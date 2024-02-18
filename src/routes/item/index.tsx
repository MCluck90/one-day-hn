import React from 'react'
import { createRoot } from 'react-dom/client'
import * as css from './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useItem } from '../../api/item'
import { getQueryParam } from '../../url/query-params'

const ItemPage: React.FC = () => {
  const itemId = Number(getQueryParam('id') ?? '0')
  const { data: item } = useItem(itemId)

  return <div className={css.root}>{JSON.stringify(item, null, 2)}</div>
}

const queryClient = new QueryClient()
createRoot(document.getElementById('appRoot')!).render(
  <QueryClientProvider client={queryClient}>
    <ItemPage />
  </QueryClientProvider>,
)
