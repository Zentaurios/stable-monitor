'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BarChart3, 
  Network, 
  Shield, 
  AlertTriangle, 
  UserCheck,
  Activity,
  Settings,
  X
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { cn, formatCurrency, formatAddress, formatTime } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    description: 'Real-time monitoring overview'
  },
  {
    name: 'Network Analysis',
    href: '/network',
    icon: Network,
    description: 'Interactive entity relationships'
  },
  {
    name: 'Risk Assessment',
    href: '/risk',
    icon: Shield,
    description: 'AI/ML risk scoring'
  },
  {
    name: 'Compliance',
    href: '/compliance',
    icon: AlertTriangle,
    description: 'Alerts and reporting'
  },
  {
    name: 'Identity',
    href: '/identity',
    icon: UserCheck,
    description: 'KYC and verification'
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen, transactions, isConnected } = useAppStore()

  const recentTransactions = transactions.slice(0, 10)

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        'fixed inset-y-0 left-0 z-50 w-80 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Treasury Monitor</h1>
                <div className="flex items-center space-x-2">
                  <div className={cn(
                    'h-2 w-2 rounded-full',
                    isConnected ? 'bg-green-400' : 'bg-red-400'
                  )} />
                  <span className="text-xs text-gray-500">
                    {isConnected ? 'Live Data' : 'Simulated Data'}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <Icon 
                      className={cn(
                        'mr-3 h-5 w-5 flex-shrink-0',
                        isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'
                      )} 
                    />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Real-time Transaction Feed */}
            <div className="mt-8">
              <div className="flex items-center justify-between px-3 mb-3">
                <h3 className="text-sm font-medium text-gray-900">Live Transactions</h3>
                <div className="flex items-center space-x-1">
                  <Activity className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-gray-500">{recentTransactions.length}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="group cursor-pointer rounded-md border p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      // Handle transaction selection
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div className={cn(
                          'h-2 w-2 rounded-full',
                          tx.risk >= 0.8 ? 'bg-red-500' :
                          tx.risk >= 0.6 ? 'bg-orange-500' :
                          tx.risk >= 0.4 ? 'bg-yellow-500' : 'bg-green-500'
                        )} />
                        <span className="text-sm font-medium">
                          {formatCurrency(tx.amount)} {tx.currency}
                        </span>
                      </div>
                      <Badge variant={
                        tx.status === 'flagged' ? 'destructive' :
                        tx.status === 'pending' ? 'warning' : 'success'
                      }>
                        {tx.status}
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{formatAddress(tx.from)} → {formatAddress(tx.to)}</div>
                      <div className="flex justify-between">
                        <span>{formatTime(tx.timestamp)}</span>
                        <span>Risk: {Math.round(tx.risk * 100)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <Button variant="outline" className="w-full" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
