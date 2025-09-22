'use client'

import React from 'react'
import { Layout } from '@/components/layout/layout'
import { IdentityVerification } from '@/components/dashboard/identity-verification'

export default function IdentityPage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Identity Verification & Privacy Technology
          </h1>
          <p className="mt-2 text-gray-600">
            Advanced KYC/AML identity verification with zero-knowledge proof technology for privacy-preserving compliance
          </p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Biometric Verification Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>Document AI Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <span>Zero-Knowledge Proofs</span>
            </div>
          </div>
        </div>

        {/* Identity Verification Dashboard */}
        <IdentityVerification />
      </div>
    </Layout>
  )
}
