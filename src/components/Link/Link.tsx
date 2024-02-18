import React from 'react'

export interface LinkProps {
  href: string
  children?: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href}>{children}</a>
)
