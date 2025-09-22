'use client'

import React from 'react'
import { FileText, Download, Calendar, Globe, Shield, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ComplianceReporting() {
  const reports = [
    {
      id: 'SAR_2025_001',
      type: 'Suspicious Activity Report',
      status: 'pending_submission',
      createdAt: new Date('2025-01-15'),
      submissionDeadline: new Date('2025-01-22'),
      entities: 3,
      transactions: 47,
      totalAmount: 2847593,
      priority: 'high'
    },
    {
      id: 'CTR_2025_012',
      type: 'Currency Transaction Report', 
      status: 'submitted',
      createdAt: new Date('2025-01-14'),
      submittedAt: new Date('2025-01-15'),
      entities: 1,
      transactions: 12,
      totalAmount: 15000,
      priority: 'medium'
    },
    {
      id: 'TRAVEL_2025_089',
      type: 'Travel Rule Report',
      status: 'draft',
      createdAt: new Date('2025-01-13'),
      entities: 5,
      transactions: 23,
      totalAmount: 856432,
      priority: 'medium'
    }
  ]

  const auditTrail = [
    {
      id: 'audit_001',
      timestamp: new Date('2025-01-15T14:23:00'),
      action: 'SAR Generated',
      user: 'System AI',
      entity: 'Wallet 0x1234...5678',
      details: 'Automated SAR creation for suspicious circular transactions'
    },
    {
      id: 'audit_002', 
      timestamp: new Date('2025-01-15T14:18:00'),
      action: 'Risk Assessment Updated',
      user: 'ML Engine',
      entity: 'Exchange Binance',
      details: 'Risk score adjusted from 45% to 72% based on new transaction patterns'
    },
    {
      id: 'audit_003',
      timestamp: new Date('2025-01-15T14:15:00'),
      action: 'Sanctions Screening',
      user: 'OFAC Scanner',
      entity: 'Wallet 0xabcd...ef01',
      details: 'Entity screened against OFAC SDN list - no matches found'
    },
    {
      id: 'audit_004',
      timestamp: new Date('2025-01-15T14:12:00'),
      action: 'KYC Verification',
      user: 'Compliance Officer',
      entity: 'User ID 94857',
      details: 'Enhanced due diligence completed for high-value customer'
    }
  ]

  const travelRuleCompliance = [
    {
      id: 'tr_001',
      from: 'US Exchange A',
      to: 'EU Exchange B', 
      amount: 5000,
      currency: 'BTC',
      status: 'compliant',
      timestamp: new Date('2025-01-15T13:45:00'),
      originatorInfo: 'Complete',
      beneficiaryInfo: 'Complete'
    },
    {
      id: 'tr_002',
      from: 'Wallet 0x1234',
      to: 'JP Exchange C',
      amount: 3200,
      currency: 'ETH', 
      status: 'pending_info',
      timestamp: new Date('2025-01-15T13:42:00'),
      originatorInfo: 'Incomplete',
      beneficiaryInfo: 'Complete'
    },
    {
      id: 'tr_003',
      from: 'UK Exchange D',
      to: 'Wallet 0x5678',
      amount: 7500,
      currency: 'USDT',
      status: 'violation',
      timestamp: new Date('2025-01-15T13:38:00'),
      originatorInfo: 'Missing',
      beneficiaryInfo: 'Partial'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': case 'compliant': return 'success'
      case 'pending_submission': case 'pending_info': return 'warning'
      case 'draft': return 'secondary'
      case 'violation': return 'destructive'
      default: return 'secondary'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'warning'
      case 'low': return 'secondary'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Compliance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold text-orange-600">
                  {reports.filter(r => r.status === 'pending_submission').length}
                </p>
              </div>
              <FileText className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Submitted Today</p>
                <p className="text-2xl font-bold text-green-600">
                  {reports.filter(r => r.status === 'submitted').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Travel Rule Issues</p>
                <p className="text-2xl font-bold text-red-600">
                  {travelRuleCompliance.filter(t => t.status === 'violation').length}
                </p>
              </div>
              <Globe className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                <p className="text-2xl font-bold text-blue-600">96.2%</p>
              </div>
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regulatory Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Regulatory Reports</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-semibold text-gray-900">{report.type}</p>
                      <p className="text-sm text-gray-500">ID: {report.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getPriorityColor(report.priority) as 'default' | 'secondary' | 'destructive' | 'warning'}>
                      {report.priority} priority
                    </Badge>
                    <Badge variant={getStatusColor(report.status) as 'default' | 'secondary' | 'destructive' | 'warning'}>
                      {report.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Created</p>
                    <p className="font-medium">{report.createdAt.toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Entities</p>
                    <p className="font-medium">{report.entities}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Transactions</p>
                    <p className="font-medium">{report.transactions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Amount</p>
                    <p className="font-medium">${report.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  {report.submissionDeadline && (
                    <div className="flex items-center text-sm text-orange-600">
                      <Calendar className="mr-1 h-4 w-4" />
                      Due: {report.submissionDeadline.toLocaleDateString()}
                    </div>
                  )}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    {report.status === 'pending_submission' && (
                      <Button size="sm">Submit Report</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Travel Rule Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Travel Rule Compliance Monitor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {travelRuleCompliance.map((transaction) => (
              <div key={transaction.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`h-3 w-3 rounded-full ${
                      transaction.status === 'compliant' ? 'bg-green-500' :
                      transaction.status === 'pending_info' ? 'bg-orange-500' :
                      'bg-red-500'
                    }`} />
                    <span className="font-medium">{transaction.from} → {transaction.to}</span>
                  </div>
                  <Badge variant={getStatusColor(transaction.status) as 'default' | 'secondary' | 'destructive' | 'warning'}>
                    {transaction.status.replace('_', ' ')}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Amount</p>
                    <p className="font-medium">{transaction.amount} {transaction.currency}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Originator Info</p>
                    <p className={`font-medium ${
                      transaction.originatorInfo === 'Complete' ? 'text-green-600' :
                      transaction.originatorInfo === 'Incomplete' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {transaction.originatorInfo}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Beneficiary Info</p>
                    <p className={`font-medium ${
                      transaction.beneficiaryInfo === 'Complete' ? 'text-green-600' :
                      transaction.beneficiaryInfo === 'Partial' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {transaction.beneficiaryInfo}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium">{transaction.timestamp.toLocaleTimeString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Compliance Audit Trail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditTrail.map((entry) => (
              <div key={entry.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{entry.action}</p>
                    <span className="text-xs text-gray-500">
                      {entry.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{entry.details}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>User: {entry.user}</span>
                    <span>Entity: {entry.entity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
