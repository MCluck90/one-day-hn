import { useQuery } from 'react-query'
import { fetchAskHnStories } from './fetchAskHnStories'

export const useAskHnStories = () =>
  useQuery({
    queryFn: fetchAskHnStories,
  })
