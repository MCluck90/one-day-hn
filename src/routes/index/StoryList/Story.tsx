import React from 'react'
import { Item } from '../../../domain/Item'
import { Link } from '../../../components/Link'

export interface StoryProps {
  story: Item
}

export const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div>
      <Link href={story.url ?? ''}>{story.title}</Link>
      <br />
      <Link href={`/item?id=${story.id}`}>Comments</Link>
    </div>
  )
}
