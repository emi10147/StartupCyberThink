// Common types used across the application
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// UI Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// WebGL and Animation Types
export interface WebGLSceneProps {
  width?: number
  height?: number
  antialias?: boolean
  alpha?: boolean
}

export interface ParticleSystemConfig {
  count: number
  size: number
  color: string
  speed: number
  opacity: number
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

// Navigation and Routing
export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  external?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}