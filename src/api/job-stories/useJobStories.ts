import { useQuery } from 'react-query'
import { fetchJobStories } from './fetchJobStories'

export const useJobStories = () =>
  useQuery({
    queryFn: fetchJobStories,
  })
