'use client'

import React from 'react'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Treasury Digital Asset Compliance Monitor",
    "description": "Advanced digital asset compliance monitoring platform for the US Treasury's GENIUS Act response. Real-time AI/ML risk assessment, network analysis, and innovative detection methods for illicit cryptocurrency activity.",
    "applicationCategory": "GovernmentApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Ryan"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Treasury Compliance Solutions"
    },
    "keywords": "Treasury, GENIUS Act, digital asset compliance, cryptocurrency monitoring, AML compliance, blockchain analysis, risk assessment, sanctions screening, AI ML detection, network analysis, zero knowledge proofs, KYC verification, transaction monitoring, illicit activity detection, financial compliance, OFAC screening, travel rule, SAR reporting",
    "featureList": [
      "Real-time transaction monitoring",
      "AI/ML risk assessment", 
      "Interactive network analysis",
      "Compliance automation",
      "Identity verification with zero-knowledge proofs",
      "Sanctions screening",
      "AML/CTF compliance",
      "Travel Rule monitoring",
      "SAR generation",
      "Behavioral analysis"
    ],
    "screenshot": "/og-image.svg",
    "softwareVersion": "1.0.0",
    "datePublished": "2025-01-21",
    "dateModified": "2025-01-21",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "audience": {
      "@type": "Audience",
      "audienceType": "Government Officials, Financial Institutions, Compliance Officers"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
