'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/lib/store'
import { GraphNode, GraphLink } from '@/lib/types'
import { ZoomIn, ZoomOut, RotateCcw, Network } from 'lucide-react'

export function NetworkVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)
  const { networkGraph } = useAppStore()
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  
  // Create zoom behavior at component level
  const zoomBehavior = useRef(d3.zoom<SVGSVGElement, unknown>()
    .scaleExtent([0.5, 5])
  )

  useEffect(() => {
    if (!svgRef.current || !networkGraph.nodes.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = 800
    const height = 500

    // Create zoom behavior
    const zoom = zoomBehavior.current
      .on('zoom', (event) => {
        container.attr('transform', event.transform)
      })

    svg.call(zoom)

    const container = svg.append('g')

    // Create simulation
    const simulation = d3.forceSimulation<GraphNode>(networkGraph.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(networkGraph.links)
        .id(d => d.id)
        .distance(d => 100 + (1 - d.risk) * 100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d) => {
        const node = d as GraphNode
        return 20 + node.volume / 50000
      }))

    // Create links
    const links = container.append('g')
      .selectAll('line')
      .data(networkGraph.links)
      .enter()
      .append('line')
      .attr('stroke', d => {
        if (d.risk > 0.8) return '#ef4444'
        if (d.risk > 0.6) return '#f59e0b'
        if (d.risk > 0.4) return '#eab308'
        return '#10b981'
      })
      .attr('stroke-width', d => Math.max(1, d.value / 10000))
      .attr('stroke-opacity', 0.6)

    // Create nodes
    const nodes = container.append('g')
      .selectAll('g')
      .data(networkGraph.nodes)
      .enter()
      .append('g')
      .attr('cursor', 'pointer')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on('drag', (event, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = undefined
          d.fy = undefined
        }))

    // Add circles for nodes
    nodes.append('circle')
      .attr('r', (d) => {
        const node = d as GraphNode
        return 8 + Math.sqrt(node.volume) / 1000
      })
      .attr('fill', (d) => {
        const node = d as GraphNode
        const colors = {
          wallet: '#3b82f6',
          exchange: '#10b981',
          mixer: '#ef4444',
          service: '#8b5cf6'
        }
        return colors[node.type] || '#6b7280'
      })
      .attr('stroke', (d) => {
        const node = d as GraphNode
        return selectedNode === node.id ? '#1f2937' : '#ffffff'
      })
      .attr('stroke-width', (d) => {
        const node = d as GraphNode
        return selectedNode === node.id ? 3 : 2
      })
      .attr('fill-opacity', (d) => {
        const node = d as GraphNode
        return node.risk > 0.8 ? 1 : 0.8
      })

    // Add labels
    nodes.append('text')
      .attr('dx', 15)
      .attr('dy', 4)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('fill', '#374151')
      .text((d) => {
        const node = d as GraphNode
        return node.label || `${node.type} ${node.id.slice(-3)}`
      })

    // Add hover and click interactions
    nodes
      .on('mouseover', function(event: MouseEvent, d: GraphNode) {
        d3.select(this).select('circle')
          .attr('stroke-width', 4)
          .attr('stroke', '#1f2937')
        
        // Show tooltip
        const tooltip = d3.select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('position', 'absolute')
          .style('background', 'rgba(0, 0, 0, 0.8)')
          .style('color', 'white')
          .style('padding', '8px')
          .style('border-radius', '4px')
          .style('font-size', '12px')
          .style('pointer-events', 'none')
          .style('opacity', 0)

        tooltip.transition().duration(200).style('opacity', 1)
        tooltip.html(`
          <div><strong>${d.label || d.id}</strong></div>
          <div>Type: ${d.type}</div>
          <div>Risk: ${Math.round(d.risk * 100)}%</div>
          <div>Volume: $${d.volume.toLocaleString()}</div>
        `)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px')
      })
      .on('mouseout', function(event: MouseEvent, d: GraphNode) {
        if (selectedNode !== d.id) {
          d3.select(this).select('circle')
            .attr('stroke-width', 2)
            .attr('stroke', '#ffffff')
        }
        
        // Remove tooltip
        d3.selectAll('.tooltip').remove()
      })
      .on('click', function(event: MouseEvent, d: GraphNode) {
        setSelectedNode(selectedNode === d.id ? null : d.id)
        
        // Update all node strokes
        nodes.select('circle')
          .attr('stroke', (node) => {
            const graphNode = node as GraphNode
            return selectedNode === graphNode.id ? '#1f2937' : '#ffffff'
          })
          .attr('stroke-width', (node) => {
            const graphNode = node as GraphNode
            return selectedNode === graphNode.id ? 3 : 2
          })
      })

    // Update simulation
    simulation.on('tick', () => {
      links
        .attr('x1', d => {
          const source = d.source as unknown as GraphNode
          return source.x!
        })
        .attr('y1', d => {
          const source = d.source as unknown as GraphNode
          return source.y!
        })
        .attr('x2', d => {
          const target = d.target as unknown as GraphNode
          return target.x!
        })
        .attr('y2', d => {
          const target = d.target as unknown as GraphNode
          return target.y!
        })

      nodes.attr('transform', d => {
        const node = d as GraphNode
        return `translate(${node.x},${node.y})`
      })
    })

    // Cleanup
    return () => {
      simulation.stop()
      d3.selectAll('.tooltip').remove()
    }
  }, [networkGraph, selectedNode])

  const handleZoomIn = () => {
    const svg = d3.select(svgRef.current)
    const currentTransform = d3.zoomTransform(svg.node()!)
    // @ts-ignore - D3 zoom transition types are incompatible but functionality works
    svg.transition().duration(300)
      .call(zoomBehavior.current.transform, currentTransform.scale(1.5))
  }

  const handleZoomOut = () => {
    const svg = d3.select(svgRef.current)
    const currentTransform = d3.zoomTransform(svg.node()!)
    // @ts-ignore - D3 zoom transition types are incompatible but functionality works
    svg.transition().duration(300)
      .call(zoomBehavior.current.transform, currentTransform.scale(0.67))
  }

  const handleReset = () => {
    const svg = d3.select(svgRef.current)
    // @ts-ignore - D3 zoom transition types are incompatible but functionality works
    svg.transition().duration(300)
      .call(zoomBehavior.current.transform, d3.zoomIdentity)
    setSelectedNode(null)
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Network Analysis</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              <Network className="mr-1 h-3 w-3" />
              {networkGraph.nodes.length} entities
            </Badge>
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Network Graph */}
          <div className="flex-1">
            <svg
              ref={svgRef}
              width="100%"
              height="500"
              className="border rounded-lg bg-gray-50"
              viewBox="0 0 800 500"
            />
          </div>

          {/* Legend and Controls */}
          <div className="w-full lg:w-64 space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Entity Types</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Wallets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Exchanges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Mixers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Services</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Risk Levels</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-green-500"></div>
                  <span>Low Risk (0-40%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-yellow-500"></div>
                  <span>Medium Risk (40-60%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-orange-500"></div>
                  <span>High Risk (60-80%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-red-500"></div>
                  <span>Critical Risk (80%+)</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded">
              <p><strong>Interactive Features:</strong></p>
              <ul className="mt-1 space-y-1">
                <li>• Click and drag nodes</li>
                <li>• Scroll to zoom</li>
                <li>• Hover for details</li>
                <li>• Click to select</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
