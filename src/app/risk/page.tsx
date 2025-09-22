'use client'

import React from 'react'
import { Layout } from '@/components/layout/layout'
import { AIMLDemonstration } from '@/components/dashboard/ai-ml-demonstration'
import { RiskScoringChart } from '@/components/dashboard/risk-scoring-chart'

export default function RiskPage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            AI/ML Risk Assessment Engine
          </h1>
          <p className="mt-2 text-gray-600">
            Advanced machine learning models for predictive risk analysis and anomaly detection in digital asset transactions
          </p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Neural Networks Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>Real-time Inference</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>

        {/* Real-time Risk Monitoring */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Real-Time Risk Scoring
          </h2>
          <RiskScoringChart />
        </section>

        {/* AI/ML Demonstration */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Advanced AI/ML Analytics
          </h2>
          <AIMLDemonstration />
        </section>
      </div>
    </Layout>
  )
}
