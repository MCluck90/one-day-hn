import { useQuery } from 'react-query'
import { fetchBestStories } from './fetchBestStories'

export const useBestStories = () =>
  useQuery({
    queryFn: fetchBestStories,
  })
