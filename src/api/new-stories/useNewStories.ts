import { useQuery } from 'react-query'
import { fetchNewStories } from './fetchNewStories'

export const useNewStories = () =>
  useQuery({
    queryFn: fetchNewStories,
  })
