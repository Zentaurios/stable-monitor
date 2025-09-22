#!/bin/bash

# Treasury Digital Asset Compliance Monitor - Deployment Script
# For US Treasury GENIUS Act Demo

echo "🏛️  Treasury Digital Asset Compliance Monitor"
echo "📋 Deploying GENIUS Act Demo to Vercel..."
echo "==========================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project first
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check errors above."
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo ""
    echo "📊 Treasury Demo Features:"
    echo "  ✅ Real-time transaction monitoring"
    echo "  ✅ Interactive network analysis"
    echo "  ✅ AI/ML risk assessment"
    echo "  ✅ Compliance monitoring & alerts"
    echo "  ✅ Identity verification with ZKP"
    echo ""
    echo "🔗 Your demo is now live and ready for Treasury officials!"
    echo "📋 Share the URL for GENIUS Act evaluation."
else
    echo "❌ Deployment failed. Please check errors above."
    exit 1
fi
