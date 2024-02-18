import React from 'react'
import { Item } from '../../../domain/Item'
import { Comment } from './Comment'

export interface CommentsProps {
  item: Item
}

export const Comments: React.FC<CommentsProps> = ({ item }) => {
  return <div>{item.kids?.map((id) => <Comment key={id} id={id} />)}</div>
}
