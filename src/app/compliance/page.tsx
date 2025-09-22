'use client'

import React from 'react'
import { Layout } from '@/components/layout/layout'
import { AlertsDashboard } from '@/components/dashboard/alerts-dashboard'
import { ComplianceReporting } from '@/components/dashboard/compliance-reporting'

export default function CompliancePage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Compliance Monitoring & Reporting
          </h1>
          <p className="mt-2 text-gray-600">
            Comprehensive regulatory compliance monitoring, automated reporting, and audit trail management
          </p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Automated SAR Generation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>Travel Rule Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <span>OFAC Sanctions Screening</span>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Real-Time Compliance Alerts
          </h2>
          <AlertsDashboard />
        </section>

        {/* Reporting Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Regulatory Reporting & Audit
          </h2>
          <ComplianceReporting />
        </section>
      </div>
    </Layout>
  )
}
