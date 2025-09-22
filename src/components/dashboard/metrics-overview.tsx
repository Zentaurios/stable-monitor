'use client'

import React from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  AlertTriangle, 
  Shield, 
  Network,
  CheckCircle,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppStore } from '@/lib/store'
import { formatCurrency } from '@/lib/utils'

export function MetricsOverview() {
  const { metrics } = useAppStore()

  const metricCards = [
    {
      title: 'Total Transactions',
      value: metrics.totalTransactions.toLocaleString(),
      icon: Activity,
      change: '+12.5%',
      changeType: 'positive' as const,
      description: 'Last 24 hours'
    },
    {
      title: 'Total Volume',
      value: formatCurrency(metrics.totalVolume),
      icon: TrendingUp,
      change: '+8.2%',
      changeType: 'positive' as const,
      description: 'Last 24 hours'
    },
    {
      title: 'High Risk Transactions',
      value: metrics.highRiskTransactions.toLocaleString(),
      icon: AlertTriangle,
      change: '-5.3%',
      changeType: 'negative' as const,
      description: 'Requiring investigation'
    },
    {
      title: 'Active Alerts',
      value: metrics.alertsToday.toLocaleString(),
      icon: Shield,
      change: '+2.1%',
      changeType: 'neutral' as const,
      description: 'New today'
    },
    {
      title: 'Average Risk Score',
      value: `${Math.round(metrics.averageRisk * 100)}%`,
      icon: TrendingDown,
      change: '-3.1%',
      changeType: 'negative' as const,
      description: 'Lower is better'
    },
    {
      title: 'Network Size',
      value: metrics.networkSize.toLocaleString(),
      icon: Network,
      change: '+15.8%',
      changeType: 'positive' as const,
      description: 'Known entities'
    },
    {
      title: 'Compliance Score',
      value: `${Math.round(metrics.complianceScore * 100)}%`,
      icon: CheckCircle,
      change: '+0.8%',
      changeType: 'positive' as const,
      description: 'Regulatory compliance'
    },
    {
      title: 'Processing Speed',
      value: `${metrics.processingSpeed.toLocaleString()} TPS`,
      icon: Zap,
      change: '+5.2%',
      changeType: 'positive' as const,
      description: 'Transactions per second'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricCards.map((metric, index) => {
        const Icon = metric.icon
        
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {metric.value}
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-1">
                  {metric.changeType === 'positive' && (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  )}
                  {metric.changeType === 'negative' && (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={`text-xs font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' :
                    metric.changeType === 'negative' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {metric.description}
                </span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
