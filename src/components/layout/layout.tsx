'use client'

import React, { useEffect } from 'react'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { useAppStore } from '@/lib/store'
import { generateInitialData, generateRandomTransaction, generateRiskScore } from '@/lib/mock-data/generators'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { 
    setTransactions, 
    setEntities, 
    setAlerts, 
    setNetworkGraph, 
    setMetrics,
    addTransaction,
    addRiskScore,
    setConnected 
  } = useAppStore()

  // Initialize with mock data
  useEffect(() => {
    const initialData = generateInitialData()
    
    setTransactions(initialData.transactions)
    setEntities(initialData.entities)
    setAlerts(initialData.alerts)
    setNetworkGraph(initialData.networkGraph)
    setMetrics(initialData.metrics)
    
    // Mark as connected (simulated)
    setConnected(true)
    
    // Simulate real-time updates
    const transactionInterval = setInterval(() => {
      addTransaction(generateRandomTransaction())
    }, 3000) // New transaction every 3 seconds
    
    const riskInterval = setInterval(() => {
      addRiskScore(generateRiskScore())
    }, 5000) // New risk score every 5 seconds

    return () => {
      clearInterval(transactionInterval)
      clearInterval(riskInterval)
    }
  }, [setTransactions, setEntities, setAlerts, setNetworkGraph, setMetrics, addTransaction, addRiskScore, setConnected])

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <Header />
        
        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
