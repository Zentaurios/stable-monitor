'use client'

import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, TrendingUp, Target, Zap, AlertCircle, CheckCircle } from 'lucide-react'

export function AIMLDemonstration() {
  // Mock data for anomaly detection
  const anomalyData = Array.from({ length: 50 }, (_, i) => ({
    transaction: i + 1,
    riskScore: Math.random() * 100,
    isAnomaly: Math.random() > 0.85,
    volume: Math.random() * 100000 + 1000,
    timestamp: new Date(Date.now() - (49 - i) * 60000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }))

  // Mock data for pattern recognition
  const patternData = [
    { pattern: 'Circular Transactions', detected: 15, confidence: 94, severity: 'high' },
    { pattern: 'Rapid Fire Transfers', detected: 8, confidence: 87, severity: 'medium' },
    { pattern: 'Round Amount Clustering', detected: 23, confidence: 76, severity: 'low' },
    { pattern: 'Mixer Interaction', detected: 4, confidence: 98, severity: 'critical' },
    { pattern: 'Cross-Border Patterns', detected: 12, confidence: 83, severity: 'medium' }
  ]

  // Mock data for prediction model performance
  const modelPerformance = [
    { model: 'AML Risk Classifier', accuracy: 96.2, precision: 94.8, recall: 97.1, f1Score: 95.9 },
    { model: 'Sanctions Screener', accuracy: 99.1, precision: 98.7, recall: 99.4, f1Score: 99.0 },
    { model: 'Behavioral Analyzer', accuracy: 88.5, precision: 87.2, recall: 89.7, f1Score: 88.4 },
    { model: 'Network Clusterer', accuracy: 91.3, precision: 90.1, recall: 92.6, f1Score: 91.3 }
  ]

  // Mock real-time predictions
  const realtimePredictions = [
    { id: 'pred_001', prediction: 'Money Laundering Risk', confidence: 87.5, evidence: ['Circular transactions', 'High velocity', 'Multiple jurisdictions'] },
    { id: 'pred_002', prediction: 'Sanctions Violation', confidence: 94.2, evidence: ['OFAC list match', 'Geographic pattern', 'Entity clustering'] },
    { id: 'pred_003', prediction: 'Structuring Activity', confidence: 72.8, evidence: ['Just-below threshold', 'Timing pattern', 'Beneficiary analysis'] },
    { id: 'pred_004', prediction: 'Trade-Based Laundering', confidence: 68.3, evidence: ['Invoice manipulation', 'Value discrepancy', 'Route analysis'] }
  ]



  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600'
    if (confidence >= 80) return 'text-blue-600'
    if (confidence >= 70) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* AI/ML Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Models</p>
                <p className="text-2xl font-bold text-blue-600">{modelPerformance.length}</p>
              </div>
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Predictions/Hour</p>
                <p className="text-2xl font-bold text-green-600">2,847</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Accuracy</p>
                <p className="text-2xl font-bold text-purple-600">93.8%</p>
              </div>
              <Target className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Processing Speed</p>
                <p className="text-2xl font-bold text-orange-600">1.2ms</p>
              </div>
              <Zap className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Anomaly Detection Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              Real-Time Anomaly Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={anomalyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis 
                    dataKey="volume" 
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Transaction Volume ($)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    dataKey="riskScore"
                    type="number"
                    domain={[0, 100]}
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Risk Score', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={(props) => {
                      const { active, payload } = props
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as { transaction: number; volume: number; riskScore: number; isAnomaly: boolean }
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="text-sm font-medium">{`Transaction #${data.transaction}`}</p>
                            <p className="text-sm">{`Volume: ${data.volume.toLocaleString()}`}</p>
                            <p className="text-sm">{`Risk Score: ${data.riskScore.toFixed(1)}`}</p>
                            <p className="text-sm">{`Status: ${data.isAnomaly ? 'Anomaly' : 'Normal'}`}</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Scatter 
                    dataKey="riskScore" 
                    fill="#3b82f6"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Normal Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Detected Anomalies</span>
                </div>
              </div>
              <Badge variant="outline">{anomalyData.filter(d => d.isAnomaly).length} anomalies detected</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Pattern Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Target className="mr-2 h-5 w-5 text-blue-500" />
              Pattern Recognition Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patternData.map((pattern, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{pattern.pattern}</p>
                    <p className="text-sm text-gray-500">{pattern.detected} instances detected</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${getConfidenceColor(pattern.confidence)}`}>
                        {pattern.confidence}%
                      </p>
                      <p className="text-xs text-gray-500">confidence</p>
                    </div>
                    <Badge variant={pattern.severity === 'critical' ? 'destructive' : 
                                  pattern.severity === 'high' ? 'warning' : 'secondary'}>
                      {pattern.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            Model Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelPerformance.map((model, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{model.model}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="text-sm font-medium">{model.accuracy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Precision</span>
                    <span className="text-sm font-medium">{model.precision}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Recall</span>
                    <span className="text-sm font-medium">{model.recall}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">F1-Score</span>
                    <span className="text-sm font-medium">{model.f1Score}%</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${model.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <Brain className="mr-2 h-5 w-5 text-purple-500" />
            Live AI Predictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {realtimePredictions.map((prediction) => (
              <div key={prediction.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{prediction.prediction}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      {prediction.confidence}% confidence
                    </Badge>
                    <div className={`h-2 w-2 rounded-full ${
                      prediction.confidence >= 90 ? 'bg-green-500' :
                      prediction.confidence >= 80 ? 'bg-blue-500' :
                      prediction.confidence >= 70 ? 'bg-orange-500' : 'bg-red-500'
                    }`} />
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Evidence:</span> {prediction.evidence.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
