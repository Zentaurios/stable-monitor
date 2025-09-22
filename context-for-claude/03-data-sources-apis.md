# Data Sources & API Specifications

## Free Data Sources Available

### 1. Blockchain Data APIs
**BlockCypher (Bitcoin/Ethereum)**
- Endpoint: `https://api.blockcypher.com/v1/btc/main`
- Rate Limit: 3 requests/second, 200/hour (free tier)
- Use for: Recent transaction data, address information
- Example: `GET /txs/recent` for latest transactions

**CoinGecko (Market Data)**
- Endpoint: `https://api.coingecko.com/api/v3`
- Rate Limit: 30 calls/minute (free tier)
- Use for: Price data, market trends, volume
- Example: `GET /simple/price?ids=bitcoin&vs_currencies=usd`

**Blockchain.info (Bitcoin)**
- Endpoint: `https://blockchain.info/rawaddr/{address}`
- No API key required
- Use for: Address transaction history
- Rate limited but generous for demos

### 2. Mock Data Generation Strategy

**Transaction Data Structure**
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
  geography: {
    fromCountry: string;
    toCountry: string;
    fromCoords: [number, number];
    toCoords: [number, number];
  };
  status: 'confirmed' | 'pending' | 'flagged';
  compliance: {
    kycStatus: boolean;
    sanctionsCheck: boolean;
    travelRule: boolean;
  };
}
```

**Entity Network Structure**
```typescript
interface Entity {
  id: string;
  address: string;
  label?: string;
  entityType: 'individual' | 'exchange' | 'mixer' | 'defi' | 'unknown';
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  connections: string[]; // Connected entity IDs
  transactionCount: number;
  totalVolume: number;
  firstSeen: number;
  lastSeen: number;
  tags: string[];
}
```

**Risk Factors Catalog**
- High transaction volume in short time
- Connection to known illicit addresses
- Use of mixing services
- Unusual geographic patterns
- Rapid succession of small transactions
- Cross-border patterns to high-risk jurisdictions
- New address with high volume
- Circular transaction patterns

## API Route Specifications

### `/api/transactions/live`
**Method**: GET (Server-Sent Events)
**Description**: Real-time transaction feed
**Response**: Stream of transaction objects
**Rate**: 1-3 transactions per second

### `/api/transactions/risk-analysis`
**Method**: POST
**Body**: `{ transactionId: string }`
**Response**: Detailed risk analysis with ML predictions

### `/api/entities/network`
**Method**: GET
**Query**: `address` or `entityId`
**Response**: Network graph data with connections

### `/api/compliance/alerts`
**Method**: GET
**Query**: `timeframe`, `severity`
**Response**: Array of compliance alerts

### `/api/ml/anomaly-detection`
**Method**: GET
**Query**: `timeframe`, `algorithm`
**Response**: Anomaly scores and predictions

## Sample Data Scenarios

### Scenario 1: Money Laundering Detection
- **Setup**: Multiple wallets with circular transactions
- **Pattern**: Large amount broken into smaller transactions
- **Red Flags**: Rapid succession, geographic inconsistencies
- **AI Detection**: Pattern recognition algorithm flags suspicious behavior

### Scenario 2: Sanctions Screening
- **Setup**: Transaction to/from sanctioned entity
- **Pattern**: Attempt to obfuscate through intermediary wallets
- **Red Flags**: OFAC match, geographic risk indicators
- **Compliance**: Automatic blocking and reporting

### Scenario 3: Travel Rule Compliance
- **Setup**: Cross-border transaction above threshold
- **Pattern**: Required information exchange between VASPs
- **Compliance**: Automated data collection and transmission
- **Monitoring**: Real-time compliance status tracking

### Scenario 4: DeFi Protocol Risk
- **Setup**: Complex DeFi transaction chains
- **Pattern**: Flash loans, yield farming, liquidity mining
- **Risk Factors**: Smart contract risks, price manipulation
- **AI Analysis**: DeFi-specific risk models

### Scenario 5: Identity Verification
- **Setup**: New high-value customer onboarding
- **Pattern**: KYC verification without data exposure
- **Technology**: Zero-knowledge proof demonstration
- **Privacy**: Identity confirmation without revealing PII

## Data Generation Scripts

### Mock Transaction Generator
```typescript
function generateRealisticTransaction(): Transaction {
  // Generate realistic blockchain transaction
  // Include proper risk scoring
  // Add geographic and temporal patterns
  // Simulate various compliance scenarios
}
```

### Entity Network Builder
```typescript
function buildEntityNetwork(size: number): Entity[] {
  // Create interconnected entities
  // Include various entity types
  // Generate realistic transaction histories
  // Add risk-based clustering
}
```

### Anomaly Pattern Creator
```typescript
function createAnomalyPatterns(): AnomalyCase[] {
  // Generate suspicious transaction patterns
  // Include known money laundering schemes
  // Create temporal and volumetric anomalies
  // Add geographic risk indicators
}
```

## Real-time Data Simulation

**WebSocket/SSE Strategy**
- Combine real market data with simulated transactions
- Use actual Bitcoin/Ethereum network activity as base
- Apply risk scoring algorithms to real transactions
- Generate compliance events based on real patterns

**Data Refresh Rates**
- Transaction feed: 2-3 seconds
- Risk scores: Real-time calculation
- Market data: 30 seconds
- Compliance alerts: Event-driven
- Network graph: 10 seconds

**Performance Considerations**
- Cache frequently accessed data
- Lazy load large datasets
- Implement data pagination
- Use efficient data structures for real-time updates
