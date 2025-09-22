'use client'

import React from 'react'
import { Menu, Bell, HelpCircle, User } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const { setSidebarOpen, alerts } = useAppStore()
  
  const unreadAlerts = alerts.filter(alert => alert.status === 'open').length

  return (
    <header className="bg-white shadow-sm border-b lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Title */}
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold text-gray-900">Treasury Monitor</h1>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Alerts */}
          <div className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            {unreadAlerts > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
              >
                {unreadAlerts}
              </Badge>
            )}
          </div>

          {/* Help */}
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>

          {/* Profile */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
