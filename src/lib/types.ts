export interface Transaction {
  id: string
  hash: string
  amount: number
  currency: string
  from: string
  to: string
  timestamp: Date
  risk: number
  riskFactors: string[]
  status: 'pending' | 'confirmed' | 'flagged'
  type: 'deposit' | 'withdrawal' | 'transfer' | 'trade'
  network: string
  fees: number
  blockHeight?: number
  confirmations?: number
}

export interface Entity {
  id: string
  address: string
  label?: string
  type: 'wallet' | 'exchange' | 'mixer' | 'service' | 'unknown'
  risk: number
  totalVolume: number
  transactionCount: number
  firstSeen: Date
  lastSeen: Date
  tags: string[]
  isBlacklisted: boolean
  country?: string
  compliance: {
    kycStatus: 'verified' | 'pending' | 'failed' | 'none'
    amlRisk: number
    sanctions: boolean
  }
}

export interface NetworkConnection {
  id: string
  source: string
  target: string
  strength: number
  transactionCount: number
  totalVolume: number
  risk: number
  firstConnection: Date
  lastConnection: Date
}

export interface Alert {
  id: string
  type: 'aml' | 'sanctions' | 'unusual_activity' | 'travel_rule' | 'kyc'
  severity: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  timestamp: Date
  status: 'open' | 'investigating' | 'resolved' | 'false_positive'
  entities: string[]
  transactions: string[]
  assignee?: string
  notes: string[]
}

export interface RiskScore {
  overall: number
  aml: number
  sanctions: number
  geographic: number
  behavioral: number
  network: number
  velocity: number
  timestamp: Date
}

export interface ComplianceReport {
  id: string
  type: 'sar' | 'ctr' | 'travel_rule' | 'audit'
  title: string
  status: 'draft' | 'pending' | 'submitted' | 'approved'
  createdAt: Date
  submittedAt?: Date
  entities: string[]
  transactions: string[]
  summary: string
  attachments: string[]
}

export interface GraphNode {
  id: string
  label: string
  type: 'wallet' | 'exchange' | 'mixer' | 'service'
  risk: number
  volume: number
  x?: number
  y?: number
  fx?: number
  fy?: number
}

export interface GraphLink {
  source: string
  target: string
  value: number
  risk: number
}

export interface NetworkGraph {
  nodes: GraphNode[]
  links: GraphLink[]
}

export interface DashboardMetrics {
  totalTransactions: number
  totalVolume: number
  highRiskTransactions: number
  alertsToday: number
  averageRisk: number
  networkSize: number
  complianceScore: number
  processingSpeed: number
}

export interface AIModel {
  id: string
  name: string
  type: 'anomaly_detection' | 'risk_scoring' | 'pattern_recognition' | 'clustering'
  accuracy: number
  confidence: number
  lastTrained: Date
  predictions: number
  falsePositives: number
  status: 'active' | 'training' | 'disabled'
}
