import { useQuery } from 'react-query'
import { fetchItem } from './fetchItem'

export const useItem = (id: number) =>
  useQuery({
    queryFn: () => fetchItem(id),
  })
