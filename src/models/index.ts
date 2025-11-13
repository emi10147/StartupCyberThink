// Base interface for all models
export interface BaseModel {
  id: string
  createdAt: Date
  updatedAt: Date
}

// User model for authentication and user management
export interface User extends BaseModel {
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatar?: string
  role: UserRole
  isActive: boolean
  lastLoginAt?: Date
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin'
}

// AI Service model for cybersecurity services
export interface AIService extends BaseModel {
  name: string
  description: string
  category: ServiceCategory
  features: string[]
  pricing: PricingTier
  isActive: boolean
  iconUrl?: string
}

export enum ServiceCategory {
  THREAT_DETECTION = 'threat_detection',
  VULNERABILITY_ASSESSMENT = 'vulnerability_assessment',
  INCIDENT_RESPONSE = 'incident_response',
  COMPLIANCE = 'compliance',
  MONITORING = 'monitoring'
}

export interface PricingTier {
  name: string
  price: number
  currency: string
  interval: 'monthly' | 'yearly'
  features: string[]
}

// Security Alert model
export interface SecurityAlert extends BaseModel {
  title: string
  description: string
  severity: AlertSeverity
  category: string
  status: AlertStatus
  affectedSystems: string[]
  remediation?: string
  userId: string
}

export enum AlertSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export enum AlertStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  DISMISSED = 'dismissed'
}