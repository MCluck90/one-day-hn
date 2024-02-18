import React from 'react'

export interface IconProps {
  icon: string
  size?: number
  invert?: boolean
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size,
  invert,
  className,
  onClick,
}) => {
  return (
    <img
      src={`/assets/icons/${icon}.svg`}
      style={invert ? { filter: 'invert(1)' } : undefined}
      height={size ?? 12}
      className={className}
      onClick={onClick}
    />
  )
}
