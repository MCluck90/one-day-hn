import React from 'react'
import { Link } from '../../../components/Link'
import * as css from './ItemHeader.css'
import { formatContent } from '../util/content'

export interface ItemHeaderProps {
  title: string
  text: string | undefined
  url: string
}

export const ItemHeader: React.FC<ItemHeaderProps> = ({ title, text, url }) => {
  return (
    <header className={css.root}>
      <h1>{title}</h1>
      {text && (
        <div dangerouslySetInnerHTML={{ __html: formatContent(text) }} />
      )}
      {url && (
        <Link href={url} target="_blank">
          Open in a new tab
        </Link>
      )}
    </header>
  )
}
