'use client'

import React from 'react'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/lib/store'
import { Activity, TrendingDown, TrendingUp } from 'lucide-react'

export function RiskScoringChart() {
  const { riskScores } = useAppStore()

  // Format data for chart
  const chartData = riskScores
    .slice(0, 20)
    .reverse()
    .map((score) => ({
      time: score.timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }),
      overall: Math.round(score.overall * 100),
      aml: Math.round(score.aml * 100),
      sanctions: Math.round(score.sanctions * 100),
      behavioral: Math.round(score.behavioral * 100),
      network: Math.round(score.network * 100)
    }))

  const currentRisk = riskScores[0]
  const previousRisk = riskScores[1]
  const riskTrend = currentRisk && previousRisk 
    ? currentRisk.overall - previousRisk.overall 
    : 0

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = (props: any) => {
    const { active, payload, label } = props
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{`Time: ${label}`}</p>
          {payload.map((entry: { color: string; dataKey: string; value: number }, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}%`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Real-Time Risk Assessment</CardTitle>
          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4 text-green-500" />
            <Badge variant="outline">Live AI Analysis</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Current Risk Display */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {currentRisk ? Math.round(currentRisk.overall * 100) : 0}%
            </div>
            <div className="text-sm text-gray-500">Overall Risk</div>
            <div className="flex items-center justify-center mt-1">
              {riskTrend > 0 ? (
                <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
              )}
              <span className={`text-xs ${riskTrend > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {Math.abs(Math.round(riskTrend * 1000))}bp
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-orange-600">
              {currentRisk ? Math.round(currentRisk.aml * 100) : 0}%
            </div>
            <div className="text-xs text-gray-500">AML Risk</div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-red-600">
              {currentRisk ? Math.round(currentRisk.sanctions * 100) : 0}%
            </div>
            <div className="text-xs text-gray-500">Sanctions</div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {currentRisk ? Math.round(currentRisk.behavioral * 100) : 0}%
            </div>
            <div className="text-xs text-gray-500">Behavioral</div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-purple-600">
              {currentRisk ? Math.round(currentRisk.network * 100) : 0}%
            </div>
            <div className="text-xs text-gray-500">Network</div>
          </div>
        </div>

        {/* Risk Trend Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="overallGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="amlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#d1d5db' }}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#d1d5db' }}
                label={{ value: 'Risk %', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Area 
                type="monotone" 
                dataKey="overall" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fill="url(#overallGradient)"
                name="Overall Risk"
              />
              <Line 
                type="monotone" 
                dataKey="aml" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={{ fill: '#f59e0b', strokeWidth: 0, r: 2 }}
                name="AML Risk"
              />
              <Line 
                type="monotone" 
                dataKey="sanctions" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: '#ef4444', strokeWidth: 0, r: 2 }}
                name="Sanctions Risk"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Indicators */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant={currentRisk?.overall > 0.8 ? 'destructive' : currentRisk?.overall > 0.6 ? 'warning' : 'success'}>
            Overall: {currentRisk ? Math.round(currentRisk.overall * 100) : 0}%
          </Badge>
          <Badge variant={currentRisk?.sanctions > 0.1 ? 'destructive' : 'secondary'}>
            Sanctions: {currentRisk ? Math.round(currentRisk.sanctions * 100) : 0}%
          </Badge>
          <Badge variant={currentRisk?.aml > 0.7 ? 'warning' : 'secondary'}>
            AML: {currentRisk ? Math.round(currentRisk.aml * 100) : 0}%
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
