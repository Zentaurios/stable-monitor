'use client'

import React from 'react'
import { Layout } from '@/components/layout/layout'
import { NetworkVisualization } from '@/components/dashboard/network-visualization'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/lib/store'

export default function NetworkPage() {
  const { networkGraph } = useAppStore()

  const networkStats = {
    totalNodes: networkGraph.nodes.length,
    totalConnections: networkGraph.links.length,
    highRiskNodes: networkGraph.nodes.filter(n => n.risk > 0.8).length,
    exchangeNodes: networkGraph.nodes.filter(n => n.type === 'exchange').length,
    mixerNodes: networkGraph.nodes.filter(n => n.type === 'mixer').length
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Network Analysis & Entity Relationships
          </h1>
          <p className="mt-2 text-gray-600">
            Interactive visualization of digital asset transaction networks and entity connections
          </p>
        </div>

        {/* Network Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{networkStats.totalNodes}</div>
                <div className="text-sm text-gray-500">Total Entities</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{networkStats.totalConnections}</div>
                <div className="text-sm text-gray-500">Connections</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{networkStats.highRiskNodes}</div>
                <div className="text-sm text-gray-500">High Risk</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{networkStats.exchangeNodes}</div>
                <div className="text-sm text-gray-500">Exchanges</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{networkStats.mixerNodes}</div>
                <div className="text-sm text-gray-500">Mixers</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Network Visualization */}
        <NetworkVisualization />

        {/* Network Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Network Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-red-800">High-Risk Cluster Detected</p>
                    <p className="text-sm text-red-600">5 entities showing circular transaction patterns</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-orange-800">Mixer Activity Increased</p>
                    <p className="text-sm text-orange-600">3 mixing services with unusual volume spikes</p>
                  </div>
                  <Badge variant="warning">Warning</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-800">Cross-Border Pattern</p>
                    <p className="text-sm text-blue-600">Large transactions between US and offshore exchanges</p>
                  </div>
                  <Badge variant="secondary">Monitor</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Compliance Verification</p>
                    <p className="text-sm text-green-600">12 exchanges show proper KYC implementation</p>
                  </div>
                  <Badge variant="success">Good</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Entity Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Entity Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Wallets</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Exchanges</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/4 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Mixers</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/12 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">3%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Services</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/12 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">2%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Risk Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Low Risk (0-40%)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-2/3 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Medium Risk (40-60%)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/4 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">High Risk (60-80%)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/6 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Critical Risk (80%+)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-1/12 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
