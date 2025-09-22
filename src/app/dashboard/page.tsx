'use client'

import React from 'react'
import { Layout } from '@/components/layout/layout'
import { MetricsOverview } from '@/components/dashboard/metrics-overview'
import { RiskScoringChart } from '@/components/dashboard/risk-scoring-chart'
import { NetworkVisualization } from '@/components/dashboard/network-visualization'
import { AlertsDashboard } from '@/components/dashboard/alerts-dashboard'

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Digital Asset Compliance Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Real-time monitoring and risk assessment for digital asset transactions and entities
          </p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Live Data Simulation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>AI/ML Analysis Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <span>Treasury GENIUS Act Demo</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key Performance Indicators
          </h2>
          <MetricsOverview />
        </section>

        {/* Risk Assessment */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Real-Time Risk Assessment
          </h2>
          <RiskScoringChart />
        </section>

        {/* Network Analysis */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Interactive Network Analysis
          </h2>
          <NetworkVisualization />
        </section>

        {/* Compliance Alerts */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Compliance Monitoring & Alerts
          </h2>
          <AlertsDashboard />
        </section>
      </div>
    </Layout>
  )
}
