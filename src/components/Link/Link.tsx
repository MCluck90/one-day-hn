import React, { HTMLAttributeAnchorTarget } from 'react'

export interface LinkProps {
  href: string
  target?: HTMLAttributeAnchorTarget
  children?: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ href, target, children }) => (
  <a href={href} target={target}>
    {children}
  </a>
)
