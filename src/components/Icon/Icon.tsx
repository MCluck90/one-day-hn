import React from 'react'

export interface IconProps {
  icon: string
  size?: number
}

export const Icon: React.FC<IconProps> = ({ icon, size }) => {
  return <img src={`/assets/icons/${icon}.svg`} height={size ?? 12} />
}
