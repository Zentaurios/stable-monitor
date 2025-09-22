import { create } from 'zustand'
import { Transaction, Entity, Alert, DashboardMetrics, NetworkGraph, RiskScore } from './types'

interface AppState {
  // Data
  transactions: Transaction[]
  entities: Entity[]
  alerts: Alert[]
  metrics: DashboardMetrics
  networkGraph: NetworkGraph
  riskScores: RiskScore[]
  
  // UI State
  selectedTransaction: Transaction | null
  selectedEntity: Entity | null
  sidebarOpen: boolean
  loading: boolean
  error: string | null
  
  // Real-time connection
  isConnected: boolean
  lastUpdate: Date | null
  
  // Actions
  setTransactions: (transactions: Transaction[]) => void
  addTransaction: (transaction: Transaction) => void
  updateTransaction: (id: string, updates: Partial<Transaction>) => void
  
  setEntities: (entities: Entity[]) => void
  updateEntity: (id: string, updates: Partial<Entity>) => void
  
  setAlerts: (alerts: Alert[]) => void
  addAlert: (alert: Alert) => void
  resolveAlert: (id: string) => void
  
  setMetrics: (metrics: DashboardMetrics) => void
  setNetworkGraph: (graph: NetworkGraph) => void
  addRiskScore: (score: RiskScore) => void
  
  setSelectedTransaction: (transaction: Transaction | null) => void
  setSelectedEntity: (entity: Entity | null) => void
  setSidebarOpen: (open: boolean) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setConnected: (connected: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  transactions: [],
  entities: [],
  alerts: [],
  metrics: {
    totalTransactions: 0,
    totalVolume: 0,
    highRiskTransactions: 0,
    alertsToday: 0,
    averageRisk: 0,
    networkSize: 0,
    complianceScore: 0.95,
    processingSpeed: 1200
  },
  networkGraph: { nodes: [], links: [] },
  riskScores: [],
  
  selectedTransaction: null,
  selectedEntity: null,
  sidebarOpen: true,
  loading: false,
  error: null,
  
  isConnected: false,
  lastUpdate: null,
  
  // Actions
  setTransactions: (transactions) => set({ transactions, lastUpdate: new Date() }),
  
  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions.slice(0, 99)], // Keep last 100
    lastUpdate: new Date()
  })),
  
  updateTransaction: (id, updates) => set((state) => ({
    transactions: state.transactions.map(t => t.id === id ? { ...t, ...updates } : t),
    lastUpdate: new Date()
  })),
  
  setEntities: (entities) => set({ entities }),
  
  updateEntity: (id, updates) => set((state) => ({
    entities: state.entities.map(e => e.id === id ? { ...e, ...updates } : e)
  })),
  
  setAlerts: (alerts) => set({ alerts }),
  
  addAlert: (alert) => set((state) => ({
    alerts: [alert, ...state.alerts]
  })),
  
  resolveAlert: (id) => set((state) => ({
    alerts: state.alerts.map(a => a.id === id ? { ...a, status: 'resolved' as const } : a)
  })),
  
  setMetrics: (metrics) => set({ metrics }),
  setNetworkGraph: (networkGraph) => set({ networkGraph }),
  
  addRiskScore: (score) => set((state) => ({
    riskScores: [score, ...state.riskScores.slice(0, 99)] // Keep last 100
  })),
  
  setSelectedTransaction: (selectedTransaction) => set({ selectedTransaction }),
  setSelectedEntity: (selectedEntity) => set({ selectedEntity }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setConnected: (isConnected) => set({ isConnected, lastUpdate: new Date() })
}))
