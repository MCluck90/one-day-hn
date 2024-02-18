import React, { HTMLAttributeAnchorTarget } from 'react'

export interface LinkProps {
  href: string
  target?: HTMLAttributeAnchorTarget
  className?: string
  children?: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({
  href,
  target,
  className,
  children,
}) => (
  <a href={href} target={target} className={className}>
    {children}
  </a>
)
