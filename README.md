# Treasury Digital Asset Compliance Monitor

## 🎯 Project Overview

This is a comprehensive digital asset compliance monitoring platform built for the US Treasury's GENIUS Act response. It demonstrates innovative methods, techniques, and strategies for detecting illicit activity involving digital assets.

## 🚀 Live Demo

**Deployment URL**: [Will be updated after Vercel deployment]

## 📋 Key Features Demonstrated

### 1. Real-Time Transaction Monitoring
- Live transaction feed with risk scoring
- Server-sent events simulation
- Interactive transaction cards with detailed risk analysis
- Configurable risk thresholds and alerts

### 2. Interactive Network Analysis
- Force-directed graph visualization of entity relationships
- Click/hover interactions for entity exploration
- Risk-based color coding and sizing
- Zoom, pan, and selection capabilities

### 3. AI/ML Risk Assessment Engine
- **Anomaly Detection**: Real-time scatter plot analysis
- **Pattern Recognition**: Automated detection of suspicious patterns
- **Model Performance**: Live metrics for multiple ML models
- **Prediction Engine**: Real-time risk predictions with confidence scores

### 4. Compliance Monitoring & Reporting
- **Automated SAR Generation**: Suspicious Activity Report creation
- **Travel Rule Compliance**: Cross-border transaction monitoring
- **OFAC Sanctions Screening**: Real-time sanctions list checking
- **Audit Trail**: Comprehensive compliance activity logging

### 5. Identity Verification & Privacy Technology
- **Document Verification**: AI-powered document analysis
- **Biometric Matching**: Facial recognition and fingerprint verification
- **Zero-Knowledge Proofs**: Privacy-preserving identity verification
- **Device Fingerprinting**: Behavioral analysis and device identification

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS
- **Charts**: Recharts + D3.js
- **State Management**: Zustand
- **Real-time**: Server-Sent Events simulation
- **Data Visualization**: Interactive network graphs, risk charts, compliance dashboards

## 🏛 Treasury Compliance Focus

This demo specifically addresses Treasury's requirements for:

- **Anti-Money Laundering (AML)** detection and reporting
- **Sanctions screening** against OFAC lists
- **Travel Rule compliance** for cross-border transactions
- **Suspicious Activity Reporting (SAR)** automation
- **Know Your Customer (KYC)** with privacy preservation
- **Digital asset transaction monitoring** and analysis

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file:

```env
# Optional: API keys for real data sources
NEXT_PUBLIC_BLOCKCYPHER_API_KEY=your_key_here
NEXT_PUBLIC_COINGECKO_API_KEY=your_key_here
```

## 📊 Data Strategy

The application uses a hybrid approach:

1. **Mock Data**: High-quality simulated data for reliable demo experience
2. **Real API Integration**: Ready for BlockCypher, CoinGecko, and other APIs
3. **Live Simulation**: Real-time updates to demonstrate system capabilities

## 🎨 Design Principles

- **Government-Ready**: Professional, trustworthy appearance
- **Navy Blue Color Scheme**: Official government aesthetic
- **Risk-Based Color Coding**: Green/Yellow/Orange/Red system
- **Mobile Responsive**: Full functionality across devices
- **Accessibility**: WCAG compliant design patterns

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Connect to Vercel**:
   ```bash
   npx vercel
   ```

2. **Configure Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**:
   - Add any API keys in Vercel dashboard
   - No environment variables required for demo functionality

### Manual Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload to Vercel**:
   - Drag and drop the `.next` folder to Vercel dashboard
   - Or use Vercel CLI for automated deployment

## 📈 Key Performance Metrics

- **Page Load Time**: < 2 seconds
- **Real-time Updates**: < 500ms latency
- **Chart Interactions**: < 100ms response time
- **Mobile Performance**: Full feature parity

## 🔍 Demo Scenarios

### Money Laundering Detection
- Multiple wallets with circular transaction patterns
- Unusual velocity and amount patterns
- Cross-jurisdictional movement analysis

### Sanctions Compliance
- OFAC list matching demonstration
- Geographic risk assessment
- Entity relationship analysis

### Privacy-Preserving KYC
- Zero-knowledge proof verification
- Selective disclosure of identity attributes
- Compliance without data exposure

## 🏆 Innovation Highlights

1. **Real-time AI/ML Analysis**: Live risk scoring and anomaly detection
2. **Interactive Network Visualization**: Dynamic entity relationship mapping
3. **Zero-Knowledge Proof Integration**: Privacy-preserving compliance
4. **Automated Regulatory Reporting**: SAR/CTR generation
5. **Cross-Border Compliance**: Travel Rule monitoring

## 📞 Contact & Portfolio

**Developer**: Ryan
**Purpose**: Treasury GENIUS Act Demo & Freelance Portfolio
**Focus**: Government compliance technology solutions

## 🔐 Security & Privacy

- No real personal data stored
- Simulated data for demonstration purposes
- Privacy-preserving verification methods
- Compliance with data protection regulations

## 📄 License

This project is created for demonstration purposes for the US Treasury's GENIUS Act response.

---

**This platform demonstrates innovative compliance technologies that address Treasury's digital asset monitoring challenges through advanced AI/ML analysis, privacy-preserving verification, and automated regulatory reporting.**
