import React from 'react'
import { Item } from '../../../domain/Item'

export interface StoryProps {
  story: Item
}

export const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div>
      <a href={story.url}>
        {story.id}: {story.title}
      </a>
    </div>
  )
}
