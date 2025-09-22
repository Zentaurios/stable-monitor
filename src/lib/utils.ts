import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatAddress(address: string): string {
  if (address.length <= 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export function getRiskColor(risk: number): string {
  if (risk >= 0.8) return 'text-red-500 bg-red-50'
  if (risk >= 0.6) return 'text-orange-500 bg-orange-50'
  if (risk >= 0.4) return 'text-yellow-500 bg-yellow-50'
  return 'text-green-500 bg-green-50'
}

export function getRiskLabel(risk: number): string {
  if (risk >= 0.8) return 'Critical'
  if (risk >= 0.6) return 'High'
  if (risk >= 0.4) return 'Medium'
  return 'Low'
}
