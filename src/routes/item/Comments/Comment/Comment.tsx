import React from 'react'
import { useItem } from '../../../../api/item'
import * as css from './Comment.css'

export interface CommentProps {
  id: number
}

export const Comment: React.FC<CommentProps> = ({ id }) => {
  const { data: item, isLoading } = useItem(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={css.root}>
      <div>{item?.by ?? ''}</div>
      <div dangerouslySetInnerHTML={{ __html: item?.text ?? '' }} />
    </div>
  )
}
