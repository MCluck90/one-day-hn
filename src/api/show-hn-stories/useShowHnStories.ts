import { useQuery } from 'react-query'
import { fetchShowHnStories } from './fetchShowHnStories'

export const useShowHnStories = () =>
  useQuery({
    queryFn: fetchShowHnStories,
  })
