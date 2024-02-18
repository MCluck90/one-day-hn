import { useQuery } from 'react-query'
import { fetchItem } from './fetchItem'

export const useItem = (id: string) =>
  useQuery({
    queryFn: () => fetchItem(id),
  })
