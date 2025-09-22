# Quick Reference: Key Implementation Details

## Essential Dependencies
```bash
npm install recharts zustand react-hook-form lucide-react @heroicons/react date-fns
```

## Critical API Endpoints to Implement
```typescript
// Real-time transaction feed
/api/transactions/live (Server-Sent Events)

// Risk analysis  
/api/transactions/risk-analysis

// Network graph data
/api/entities/network

// Compliance alerts
/api/compliance/alerts

// ML anomaly detection
/api/ml/anomaly-detection
```

## Must-Have Components
1. **TransactionFeed** - Live updating sidebar
2. **RiskScoreGauge** - Real-time risk visualization
3. **NetworkGraph** - Interactive node/edge graph
4. **ComplianceAlerts** - Alert management interface
5. **MLDashboard** - AI demonstration panels

## Free APIs to Try
- BlockCypher: `https://api.blockcypher.com/v1/btc/main/txs/recent`
- CoinGecko: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
- Blockchain.info: `https://blockchain.info/rawaddr/{address}`

## Color Palette
- Primary: `#1e40af` (navy blue)
- Low Risk: `#10b981` (green)  
- Medium Risk: `#f59e0b` (yellow)
- High Risk: `#ef4444` (red)
- Critical: `#8b5cf6` (purple)

## Mock Data Structure Examples
```typescript
interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  timestamp: number;
  riskScore: number; // 0-100
  riskFactors: string[];
  geography: { fromCountry: string; toCountry: string; };
  status: 'confirmed' | 'pending' | 'flagged';
}
```

## Success Criteria Checklist
- [ ] Professional government-ready appearance
- [ ] Real-time transaction monitoring
- [ ] Interactive network graph
- [ ] AI/ML risk analysis demos
- [ ] Compliance alert system
- [ ] Mobile responsive design
- [ ] Clear real vs. mock data indicators
- [ ] Deployed to Vercel
- [ ] 3-4 hour total build time
