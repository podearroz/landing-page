import type { ElementType } from 'react'

export interface BenefitItem {
  icon: ElementType
  title: string
  description: string
}

export interface MethodStep {
  number: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}
