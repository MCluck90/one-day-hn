import { useQuery } from 'react-query'
import { fetchMaxItemId } from './fetchMaxItemId'

export const useMaxItemId = () =>
  useQuery({
    queryFn: fetchMaxItemId,
  })
