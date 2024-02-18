import { useQuery } from 'react-query'
import { fetchUpdates } from './fetchUpdates'

export const useUpdates = () =>
  useQuery({
    queryFn: fetchUpdates,
  })
