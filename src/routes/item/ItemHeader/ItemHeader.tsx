import React from 'react'
import { Link } from '../../../components/Link'
import * as css from './ItemHeader.css'

export interface ItemHeaderProps {
  title: string
  url: string
}

export const ItemHeader: React.FC<ItemHeaderProps> = ({ title, url }) => {
  return (
    <header className={css.root}>
      <h1>{title}</h1>
      {url && (
        <Link href={url} target="_blank">
          Open in a new tab
        </Link>
      )}
    </header>
  )
}
