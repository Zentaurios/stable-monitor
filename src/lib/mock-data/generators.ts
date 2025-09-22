import { Transaction, Entity, Alert, NetworkGraph, RiskScore, DashboardMetrics } from '../types'

// Realistic wallet addresses and exchange names
const WALLET_ADDRESSES = [
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // Genesis block
  '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
  '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
  '1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF',
  '3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC',
  'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  '3FupnqBvnSjgdHPP5yCzYzCBSRVNfXjXUx',
  '1LdRcdxfbSnmCYYNdeYpUnztiYzVfBEQeC',
  '3BMEXqHOFPzUQFCKleCK3C3NwULF8pZK6p',
  '1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s'
]

const EXCHANGE_NAMES = [
  'Binance', 'Coinbase', 'Kraken', 'Gemini', 'Bitfinex', 
  'KuCoin', 'Huobi', 'OKX', 'Bybit', 'Gate.io'
]

const CURRENCIES = ['BTC', 'ETH', 'USDT', 'USDC', 'BNB', 'ADA', 'SOL', 'XRP', 'DOT', 'AVAX']

const RISK_FACTORS = [
  'High frequency transactions',
  'Multiple inputs/outputs',
  'Connection to mixer',
  'Sanctions list match',
  'Unusual geographic pattern',
  'Round amount transactions',
  'Quick succession transfers',
  'Connection to darknet',
  'AML compliance flag',
  'Velocity threshold exceeded'
]

const COUNTRIES = [
  'United States', 'China', 'Germany', 'United Kingdom', 'Japan',
  'South Korea', 'Singapore', 'Switzerland', 'Netherlands', 'Russia',
  'Iran', 'North Korea', 'Venezuela', 'Syria', 'Cuba' // Some sanctioned
]

export function generateRandomTransaction(): Transaction {
  const currency = CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)]
  const amount = Math.random() * 100000 + 100
  const risk = Math.random()
  const factorCount = Math.floor(Math.random() * 4)
  const selectedFactors = RISK_FACTORS.sort(() => 0.5 - Math.random()).slice(0, factorCount)
  
  return {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    hash: `0x${Math.random().toString(16).substr(2, 64)}`,
    amount,
    currency,
    from: WALLET_ADDRESSES[Math.floor(Math.random() * WALLET_ADDRESSES.length)],
    to: WALLET_ADDRESSES[Math.floor(Math.random() * WALLET_ADDRESSES.length)],
    timestamp: new Date(Date.now() - Math.random() * 3600000), // Last hour
    risk,
    riskFactors: selectedFactors,
    status: risk > 0.8 ? 'flagged' : risk > 0.6 ? 'pending' : 'confirmed',
    type: ['deposit', 'withdrawal', 'transfer', 'trade'][Math.floor(Math.random() * 4)] as 'deposit' | 'withdrawal' | 'transfer' | 'trade',
    network: currency === 'BTC' ? 'Bitcoin' : currency === 'ETH' ? 'Ethereum' : 'Binance Smart Chain',
    fees: Math.random() * 50 + 1,
    blockHeight: Math.floor(Math.random() * 1000000 + 700000),
    confirmations: Math.floor(Math.random() * 20 + 1)
  }
}

export function generateRandomEntity(): Entity {
  const type = ['wallet', 'exchange', 'mixer', 'service', 'unknown'][Math.floor(Math.random() * 5)] as 'wallet' | 'exchange' | 'mixer' | 'service' | 'unknown'
  const risk = Math.random()
  const isExchange = type === 'exchange'
  
  return {
    id: `entity_${Math.random().toString(36).substr(2, 9)}`,
    address: WALLET_ADDRESSES[Math.floor(Math.random() * WALLET_ADDRESSES.length)],
    label: isExchange ? EXCHANGE_NAMES[Math.floor(Math.random() * EXCHANGE_NAMES.length)] : undefined,
    type,
    risk,
    totalVolume: Math.random() * 10000000 + 10000,
    transactionCount: Math.floor(Math.random() * 10000 + 10),
    firstSeen: new Date(Date.now() - Math.random() * 31536000000), // Last year
    lastSeen: new Date(Date.now() - Math.random() * 86400000), // Last day
    tags: ['DeFi', 'CEX', 'High Volume', 'Suspicious'].filter(() => Math.random() > 0.7),
    isBlacklisted: risk > 0.9,
    country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)],
    compliance: {
      kycStatus: ['verified', 'pending', 'failed', 'none'][Math.floor(Math.random() * 4)] as 'verified' | 'pending' | 'failed' | 'none',
      amlRisk: risk,
      sanctions: risk > 0.95
    }
  }
}

export function generateRandomAlert(): Alert {
  const types = ['aml', 'sanctions', 'unusual_activity', 'travel_rule', 'kyc'] as const
  const severities = ['low', 'medium', 'high', 'critical'] as const
  const type = types[Math.floor(Math.random() * types.length)]
  const severity = severities[Math.floor(Math.random() * severities.length)]
  
  const titles = {
    aml: 'Potential Money Laundering Activity',
    sanctions: 'OFAC Sanctions List Match',
    unusual_activity: 'Unusual Transaction Pattern',
    travel_rule: 'Travel Rule Compliance Required',
    kyc: 'KYC Verification Failed'
  }
  
  return {
    id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type,
    severity,
    title: titles[type],
    description: `Automated system detected ${type.replace('_', ' ')} requiring immediate attention.`,
    timestamp: new Date(Date.now() - Math.random() * 86400000),
    status: ['open', 'investigating', 'resolved', 'false_positive'][Math.floor(Math.random() * 4)] as 'open' | 'investigating' | 'resolved' | 'false_positive',
    entities: [Math.random().toString(36).substr(2, 9)],
    transactions: [Math.random().toString(36).substr(2, 9)],
    notes: []
  }
}

export function generateMockNetworkGraph(): NetworkGraph {
  const nodeCount = 20
  const nodes = Array.from({ length: nodeCount }, (_, i) => ({
    id: `node_${i}`,
    label: i < 5 ? EXCHANGE_NAMES[i] : `Wallet ${i}`,
    type: (i < 5 ? 'exchange' : i < 15 ? 'wallet' : 'mixer') as 'exchange' | 'wallet' | 'mixer',
    risk: Math.random(),
    volume: Math.random() * 1000000 + 10000
  }))
  
  const links = []
  for (let i = 0; i < nodeCount * 1.5; i++) {
    const source = Math.floor(Math.random() * nodeCount)
    const target = Math.floor(Math.random() * nodeCount)
    if (source !== target) {
      links.push({
        source: `node_${source}`,
        target: `node_${target}`,
        value: Math.random() * 100000 + 1000,
        risk: Math.random()
      })
    }
  }
  
  return { nodes, links }
}

export function generateMockMetrics(): DashboardMetrics {
  return {
    totalTransactions: Math.floor(Math.random() * 100000 + 50000),
    totalVolume: Math.random() * 1000000000 + 100000000,
    highRiskTransactions: Math.floor(Math.random() * 500 + 50),
    alertsToday: Math.floor(Math.random() * 50 + 5),
    averageRisk: Math.random() * 0.3 + 0.2, // 0.2-0.5 range
    networkSize: Math.floor(Math.random() * 10000 + 5000),
    complianceScore: Math.random() * 0.1 + 0.9, // 0.9-1.0 range
    processingSpeed: Math.floor(Math.random() * 500 + 800) // 800-1300 TPS
  }
}

export function generateRiskScore(): RiskScore {
  return {
    overall: Math.random() * 0.8 + 0.1,
    aml: Math.random() * 0.7 + 0.1,
    sanctions: Math.random() * 0.3,
    geographic: Math.random() * 0.5 + 0.1,
    behavioral: Math.random() * 0.6 + 0.1,
    network: Math.random() * 0.8 + 0.1,
    velocity: Math.random() * 0.7 + 0.1,
    timestamp: new Date()
  }
}

// Generate initial data sets
export function generateInitialData() {
  return {
    transactions: Array.from({ length: 50 }, generateRandomTransaction),
    entities: Array.from({ length: 25 }, generateRandomEntity),
    alerts: Array.from({ length: 10 }, generateRandomAlert),
    networkGraph: generateMockNetworkGraph(),
    metrics: generateMockMetrics(),
    riskScores: Array.from({ length: 20 }, generateRiskScore)
  }
}
