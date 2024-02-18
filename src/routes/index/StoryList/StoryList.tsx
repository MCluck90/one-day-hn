import React from 'react'
import { LoadingState } from './Loading'
import { ErrorState } from './ErrorState'
import { Story } from './Story'
import { StoryType } from '../../../domain/Story'
import { Pagination } from '../../../domain/Pagination'
import { useStories } from '../../../hooks/useStories'

export interface StoryListProps {
  type: StoryType
  pagination: Pagination
}

export const StoryList: React.FC<StoryListProps> = ({ type, pagination }) => {
  const { data: stories, isLoading, isError } = useStories(type, pagination)

  if (isLoading) {
    return <LoadingState />
  }

  if (isError) {
    return <ErrorState />
  }

  if (!stories) {
    console.error('Failed to get list of stories but did not receive an error')
    return null // Should never happen
  }

  return (
    <div>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  )
}
