'use client'

import React from 'react'
import { AlertTriangle, Shield, Eye, CheckCircle, Clock, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/lib/store'
import { formatTime } from '@/lib/utils'

export function AlertsDashboard() {
  const { alerts, resolveAlert } = useAppStore()
  
  // Group alerts by status
  const openAlerts = alerts.filter(alert => alert.status === 'open')
  const investigatingAlerts = alerts.filter(alert => alert.status === 'investigating')
  const recentAlerts = alerts.slice(0, 8)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive'
      case 'high': return 'warning'
      case 'medium': return 'secondary'
      case 'low': return 'outline'
      default: return 'secondary'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'aml': return Shield
      case 'sanctions': return AlertTriangle
      case 'unusual_activity': return Eye
      case 'travel_rule': return User
      case 'kyc': return CheckCircle
      default: return AlertTriangle
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'destructive'
      case 'investigating': return 'warning'
      case 'resolved': return 'success'
      case 'false_positive': return 'secondary'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open Alerts</p>
                <p className="text-2xl font-bold text-red-600">{openAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Under Investigation</p>
                <p className="text-2xl font-bold text-orange-600">{investigatingAlerts.length}</p>
              </div>
              <Eye className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Alerts</p>
                <p className="text-2xl font-bold text-gray-900">{alerts.length}</p>
              </div>
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert) => {
              const TypeIcon = getTypeIcon(alert.type)
              
              return (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      alert.severity === 'critical' ? 'bg-red-100' :
                      alert.severity === 'high' ? 'bg-orange-100' :
                      alert.severity === 'medium' ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}>
                      <TypeIcon className={`h-4 w-4 ${
                        alert.severity === 'critical' ? 'text-red-600' :
                        alert.severity === 'high' ? 'text-orange-600' :
                        alert.severity === 'medium' ? 'text-yellow-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {alert.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {alert.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="mr-1 h-3 w-3" />
                          {formatTime(alert.timestamp)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {alert.entities.length} entities • {alert.transactions.length} transactions
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge variant={getSeverityColor(alert.severity) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                      {alert.severity}
                    </Badge>
                    <Badge variant={getStatusColor(alert.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                      {alert.status.replace('_', ' ')}
                    </Badge>
                    
                    {alert.status === 'open' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => resolveAlert(alert.id)}
                      >
                        Investigate
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {recentAlerts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Shield className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p>No alerts found</p>
              <p className="text-sm">All systems operating normally</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Alert Types Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Alert Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { type: 'aml', label: 'AML Violations', icon: Shield, count: alerts.filter(a => a.type === 'aml').length },
              { type: 'sanctions', label: 'Sanctions Screening', icon: AlertTriangle, count: alerts.filter(a => a.type === 'sanctions').length },
              { type: 'unusual_activity', label: 'Unusual Activity', icon: Eye, count: alerts.filter(a => a.type === 'unusual_activity').length },
              { type: 'travel_rule', label: 'Travel Rule', icon: User, count: alerts.filter(a => a.type === 'travel_rule').length },
              { type: 'kyc', label: 'KYC Issues', icon: CheckCircle, count: alerts.filter(a => a.type === 'kyc').length }
            ].map((category) => {
              const Icon = category.icon
              return (
                <div key={category.type} className="text-center p-4 border rounded-lg">
                  <Icon className="mx-auto h-6 w-6 text-gray-600 mb-2" />
                  <div className="text-lg font-bold text-gray-900">{category.count}</div>
                  <div className="text-xs text-gray-500">{category.label}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
