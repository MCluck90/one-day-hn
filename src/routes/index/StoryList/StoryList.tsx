import React from 'react'
import { LoadingState } from './Loading'
import { ErrorState } from './ErrorState'
import { Story } from './Story'
import { StoryType } from '../../../domain/Story'
import { Pagination } from '../../../domain/Pagination'
import { useStories } from '../../../hooks/useStories'
import * as css from './StoryList.css'

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
    <div className={css.root}>
      <ol start={pagination.page * pagination.pageSize}>
        {stories.map((story) => (
          <li key={story.id}>
            <Story story={story} />
          </li>
        ))}
      </ol>
    </div>
  )
}
