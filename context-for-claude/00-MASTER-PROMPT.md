# MASTER PROMPT: Digital Asset Compliance Monitoring MVP

## Context & Objective
You are building a comprehensive digital asset compliance monitoring platform demo for the US Treasury's GENIUS Act response. This is a high-stakes project that will be viewed by Treasury officials and serve as a portfolio piece for freelance business development.

**Project Directory**: `/Users/Ryan/builds/stable-monitor`

**Key Requirements from Treasury Request**:
> "This request for comment offers the opportunity for interested individuals and organizations to provide feedback on innovative or novel methods, techniques, or strategies that regulated financial institutions use, or could potentially use, to detect illicit activity involving digital assets."

## Technical Stack (MANDATORY)
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS (user prefers this stack)
- **Auth**: Server actions (simple bot protection sufficient)
- **Visualizations**: Recharts
- **State Management**: Zustand
- **Forms**: react-hook-form
- **Real-time**: Server-Sent Events
- **Deployment**: Vercel

## Project Scope & Timeline
- **Total Time**: 3-4 hours maximum
- **Priority**: Visual impact and functionality demonstration over perfect implementation
- **Data Strategy**: Use free APIs where possible, high-quality mocks otherwise
- **Target**: Government-ready demo that showcases innovative compliance technologies

## Core Features to Implement (In Priority Order)

### 1. Real-Time Transaction Monitoring Dashboard (CRITICAL)
- Live transaction feed with Server-Sent Events
- Risk scoring algorithm with visual indicators
- Interactive transaction cards with hover details
- Configurable risk thresholds

### 2. Interactive Network Graph (CRITICAL)
- Force-directed graph showing wallet connections
- Click/hover interactions to explore relationships
- Color-coded risk levels and entity types
- Zoom and pan functionality

### 3. AI/ML Demonstration (HIGH PRIORITY)
- Anomaly detection visualizations
- Risk prediction charts
- Pattern recognition examples
- Confidence scoring displays

### 4. Compliance Monitoring (HIGH PRIORITY)
- Real-time alert system
- SAR generation preview
- Travel Rule compliance tracking
- Audit trail demonstration

### 5. Identity Verification Module (MEDIUM PRIORITY)
- KYC status indicators
- Zero-knowledge proof concept demo
- Digital identity scoring
- Privacy-preserving verification

## Data Strategy Implementation

### Free APIs to Try First
```typescript
// BlockCypher for Bitcoin data
const BLOCKCYPHER_API = 'https://api.blockcypher.com/v1/btc/main'

// CoinGecko for market data  
const COINGECKO_API = 'https://api.coingecko.com/api/v3'

// Blockchain.info for transaction history
const BLOCKCHAIN_INFO = 'https://blockchain.info'
```

### Fallback Mock Data
If APIs don't work within time constraints, generate realistic mock data that includes:
- Transaction histories with proper risk indicators
- Entity relationship networks
- Geographic transaction patterns
- Temporal suspicious activity scenarios

## Essential Project Structure
```
/app
  /dashboard - Main monitoring interface
  /api
    /transactions - Transaction data endpoints
    /risk - Risk analysis endpoints
    /compliance - Compliance monitoring
  /components
    /ui - Reusable UI components
    /charts - Visualization components
    /dashboard - Dashboard-specific components
  /lib
    /utils - Helper functions
    /data - Data processing
    /types - TypeScript definitions
/data
  /mock - JSON mock datasets
/public
  /icons - Custom icons
```

## UI/UX Requirements
- **Government-Ready**: Professional, clean, trustworthy appearance
- **Color Scheme**: Navy blue primary, risk-based color coding (green/yellow/red)
- **Layout**: Sidebar navigation + main content area
- **Responsive**: Mobile-first design
- **Tooltips**: Clear indicators of real vs. simulated data

## Key Demonstration Scenarios
1. **Money Laundering Detection**: Multiple wallets with circular transactions
2. **Sanctions Screening**: OFAC compliance and blocking
3. **Travel Rule Compliance**: Cross-border transaction monitoring
4. **DeFi Risk Assessment**: Smart contract and protocol risks
5. **Identity Verification**: Privacy-preserving KYC

## Performance Targets
- Page load: < 2 seconds
- Real-time updates: < 500ms
- Chart interactions: < 100ms
- Mobile responsive: Full functionality

## Deployment Requirements
- Deploy to Vercel for public access
- Include simple bot protection
- Environment variables for API keys
- Error handling and loading states

## Critical Success Factors
1. **Visual Impact**: Must look professional and government-ready
2. **Technology Demonstration**: Each required category clearly shown
3. **Interactive Experience**: Users can explore and understand features
4. **Performance**: Fast, responsive, reliable
5. **Clarity**: Clear distinction between real data and simulations

## Action Items for Implementation

### Phase 1: Setup (30 minutes)
1. Initialize Next.js 15 project with TypeScript and TailwindCSS
2. Install required dependencies
3. Set up basic project structure
4. Configure app router and initial routing

### Phase 2: Core Dashboard (60 minutes)
1. Build main layout with sidebar navigation
2. Implement transaction monitoring dashboard
3. Create risk scoring visualization
4. Set up Server-Sent Events for real-time updates

### Phase 3: Interactive Features (90 minutes)
1. Build interactive network graph component
2. Implement AI/ML demonstration panels
3. Create compliance monitoring interface
4. Add identity verification module

### Phase 4: Data Integration (45 minutes)
1. Integrate free APIs where possible
2. Generate high-quality mock data as fallback
3. Implement realistic transaction patterns
4. Add geographic and temporal data

### Phase 5: Polish & Deploy (45 minutes)
1. Add hover tooltips and help text
2. Implement responsive design
3. Add loading states and error handling
4. Deploy to Vercel and test

## START BUILDING IMMEDIATELY
Begin with Phase 1 setup. Create the Next.js project structure and implement the core dashboard first. Focus on getting a working demo with impressive visuals rather than perfect implementation of every feature.

The Treasury officials need to see innovative compliance technologies in action. Make it professional, interactive, and compelling.

**Key Message**: This demo showcases how modern technology can solve Treasury's digital asset compliance challenges through innovative detection methods, AI/ML analysis, and privacy-preserving verification systems.

---

## Files to Reference
All planning documents are available in `/context-for-claude/`:
- `01-technical-specification.md` - Detailed technical requirements
- `02-development-roadmap.md` - Step-by-step implementation plan  
- `03-data-sources-apis.md` - Data integration strategies
- `04-ui-ux-specifications.md` - Design and user experience guidelines

**START CODING NOW** - Time is limited and the goal is a working demo that showcases Treasury compliance innovation.
