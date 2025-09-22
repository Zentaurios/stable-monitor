'use client'

import React, { useState } from 'react'
import { 
  User, 
  Shield, 
  CheckCircle, 
  Key,
  Fingerprint,
  Smartphone,
  CreditCard,
  Globe,
  Lock
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function IdentityVerification() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  const verificationMethods = [
    {
      id: 'document',
      name: 'Document Verification',
      icon: CreditCard,
      status: 'active',
      accuracy: 97.8,
      processed: 2847,
      description: 'AI-powered document analysis with liveness detection'
    },
    {
      id: 'biometric',
      name: 'Biometric Verification',
      icon: Fingerprint,
      status: 'active', 
      accuracy: 99.2,
      processed: 1923,
      description: 'Facial recognition and fingerprint matching'
    },
    {
      id: 'device',
      name: 'Device Fingerprinting',
      icon: Smartphone,
      status: 'active',
      accuracy: 94.5,
      processed: 5672,
      description: 'Unique device identification and behavioral analysis'
    },
    {
      id: 'zkp',
      name: 'Zero-Knowledge Proofs',
      icon: Key,
      status: 'beta',
      accuracy: 100,
      processed: 156,
      description: 'Privacy-preserving identity verification'
    }
  ]

  const userProfiles = [
    {
      id: 'user_001',
      name: 'John Anderson',
      wallet: '0x1234567890abcdef',
      kycStatus: 'verified',
      riskScore: 15,
      identityScore: 98.5,
      verificationDate: new Date('2024-12-15'),
      country: 'United States',
      tier: 'Enhanced',
      methods: ['document', 'biometric', 'device'],
      zkpEnabled: true,
      transactions: 247,
      volume: 1847392
    },
    {
      id: 'user_002', 
      name: 'Maria Rodriguez',
      wallet: '0xabcdef1234567890',
      kycStatus: 'pending',
      riskScore: 32,
      identityScore: 87.2,
      verificationDate: new Date('2025-01-10'),
      country: 'Spain',
      tier: 'Standard',
      methods: ['document', 'device'],
      zkpEnabled: false,
      transactions: 89,
      volume: 456789
    },
    {
      id: 'user_003',
      name: 'Anonymous User #4729',
      wallet: '0xfedcba0987654321',
      kycStatus: 'zkp_verified',
      riskScore: 8,
      identityScore: 95.7,
      verificationDate: new Date('2025-01-12'),
      country: 'Unknown (Privacy-Preserved)',
      tier: 'ZKP Enhanced',
      methods: ['zkp'],
      zkpEnabled: true,
      transactions: 156,
      volume: 2847592
    },
    {
      id: 'user_004',
      name: 'Ahmed Hassan',
      wallet: '0x567890abcdef1234',
      kycStatus: 'failed',
      riskScore: 78,
      identityScore: 23.4,
      verificationDate: new Date('2025-01-08'),
      country: 'Egypt',
      tier: 'Restricted',
      methods: ['document'],
      zkpEnabled: false,
      transactions: 12,
      volume: 45678
    }
  ]

  const zkpDemonstration = {
    proofTypes: [
      {
        name: 'Age Verification',
        description: 'Prove age ≥ 18 without revealing exact age or birthdate',
        status: 'verified',
        privacy: 'Complete'
      },
      {
        name: 'Citizenship Proof',
        description: 'Verify citizenship without revealing identity documents',
        status: 'verified', 
        privacy: 'Complete'
      },
      {
        name: 'Income Threshold',
        description: 'Prove income > $50k without revealing exact amount',
        status: 'verified',
        privacy: 'Complete'
      },
      {
        name: 'Clean Criminal Record',
        description: 'Verify no financial crimes without sharing record details',
        status: 'verified',
        privacy: 'Complete'
      }
    ],
    benefits: [
      'No Personal Data Storage',
      'Regulatory Compliance Maintained', 
      'User Privacy Protected',
      'Reduced Data Breach Risk',
      'Cross-Border Compatibility',
      'Selective Disclosure'
    ]
  }

  const getKycStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'success'
      case 'zkp_verified': return 'outline'
      case 'pending': return 'warning'
      case 'failed': return 'destructive'
      default: return 'secondary'
    }
  }

  const getRiskColor = (risk: number) => {
    if (risk <= 20) return 'text-green-600'
    if (risk <= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  const getIdentityScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-blue-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Identity Verification Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {verificationMethods.map((method) => {
          const Icon = method.icon
          return (
            <Card key={method.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="h-8 w-8 text-blue-500" />
                  <Badge variant={method.status === 'active' ? 'success' : 'secondary'}>
                    {method.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{method.description}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="font-medium">{method.accuracy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processed</span>
                    <span className="font-medium">{method.processed.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Identity Profiles */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <User className="mr-2 h-5 w-5" />
              Identity Verification Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userProfiles.map((user) => (
                <div 
                  key={user.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedUser === user.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.wallet.slice(0, 10)}...{user.wallet.slice(-8)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getKycStatusColor(user.kycStatus) as 'default' | 'secondary' | 'destructive' | 'outline' | 'success'}>
                        {user.kycStatus.replace('_', ' ')}
                      </Badge>
                      {user.zkpEnabled && (
                        <Badge variant="outline">
                          <Lock className="mr-1 h-3 w-3" />
                          ZKP
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Risk Score</p>
                      <p className={`font-medium ${getRiskColor(user.riskScore)}`}>{user.riskScore}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Identity Score</p>
                      <p className={`font-medium ${getIdentityScoreColor(user.identityScore)}`}>{user.identityScore}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Country</p>
                      <p className="font-medium">{user.country}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Tier</p>
                      <p className="font-medium">{user.tier}</p>
                    </div>
                  </div>

                  {selectedUser === user.id && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Verification Methods</p>
                          <div className="space-y-1">
                            {user.methods.map(method => {
                              const methodInfo = verificationMethods.find(m => m.id === method)
                              return (
                                <div key={method} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>{methodInfo?.name}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Activity Summary</p>
                          <div className="space-y-1 text-gray-600">
                            <p>Transactions: {user.transactions}</p>
                            <p>Volume: ${user.volume.toLocaleString()}</p>
                            <p>Verified: {user.verificationDate.toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Zero-Knowledge Proof Demonstration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Key className="mr-2 h-5 w-5" />
              Zero-Knowledge Proofs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">Privacy-Preserving KYC</h4>
                <p className="text-sm text-purple-700">
                  Verify identity compliance without revealing personal information
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Active Proofs</h4>
                <div className="space-y-2">
                  {zkpDemonstration.proofTypes.map((proof, index) => (
                    <div key={index} className="flex items-start space-x-2 p-2 border rounded">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{proof.name}</p>
                        <p className="text-xs text-gray-500">{proof.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {proof.privacy}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Benefits</h4>
                <div className="space-y-1">
                  {zkpDemonstration.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                Generate New Proof
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Identity Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Identity Analytics & Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Verification Success Rates</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Document Verification</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">97.8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Biometric Matching</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">99.2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ZKP Verification</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Geographic Distribution</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">United States</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">European Union</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Asia Pacific</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Privacy-Preserved</span>
                  <span className="font-medium">9%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Risk Distribution</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Low Risk (0-25%)</span>
                  <span className="font-medium text-green-600">72%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Medium Risk (25-50%)</span>
                  <span className="font-medium text-orange-600">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">High Risk (50%+)</span>
                  <span className="font-medium text-red-600">10%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
