import React from 'react'
import { Link } from '../../../components/Link'

export interface ItemHeaderProps {
  title: string
  url: string
}

export const ItemHeader: React.FC<ItemHeaderProps> = ({ title, url }) => {
  return (
    <header>
      <h1>{title}</h1>
      {url && (
        <Link href={url} target="_blank">
          Open in a new tab
        </Link>
      )}
    </header>
  )
}
