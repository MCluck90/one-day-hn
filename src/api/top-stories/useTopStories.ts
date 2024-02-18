import { useQuery } from 'react-query'
import { fetchTopStories } from './fetchTopStories'

export const useTopStories = () =>
  useQuery({
    queryFn: fetchTopStories,
  })
