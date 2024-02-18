import { Pagination } from '../domain/Pagination'
import { StoryType } from '../domain/Story'
import { fetchAskHnStories } from '../api/ask-hn-stories'
import { fetchBestStories } from '../api/best-stories'
import { fetchJobStories } from '../api/job-stories'
import { fetchNewStories } from '../api/new-stories'
import { fetchShowHnStories } from '../api/show-hn-stories'
import { fetchTopStories } from '../api/top-stories'
import { Item } from '../domain/Item'
import { fetchItem } from '../api/item'
import { useQuery } from 'react-query'

const typeToFetch: Record<StoryType, () => Promise<number[]>> = {
  [StoryType.AskHn]: fetchAskHnStories,
  [StoryType.Best]: fetchBestStories,
  [StoryType.Job]: fetchJobStories,
  [StoryType.New]: fetchNewStories,
  [StoryType.ShowHn]: fetchShowHnStories,
  [StoryType.Top]: fetchTopStories,
}

const fetchStories = async (
  type: StoryType,
  pagination: Pagination,
): Promise<Item[]> => {
  const fetch = typeToFetch[type]
  const startIndex = pagination.page * pagination.pageSize
  const endIndex = startIndex + pagination.pageSize
  const ids = await fetch()
  return Promise.all(ids.slice(startIndex, endIndex).map(fetchItem))
}

export const useStories = (type: StoryType, pagination: Pagination) =>
  useQuery({
    queryFn: () => fetchStories(type, pagination),
    staleTime: Infinity,
  })
