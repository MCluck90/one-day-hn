import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/global.css'
import * as css from './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useItem } from '../../api/item'
import { getQueryParam } from '../../url/query-params'
import { ItemHeader } from './ItemHeader'

const ItemPage: React.FC = () => {
  const itemId = Number(getQueryParam('id') ?? '0')
  const { data: item } = useItem(itemId)

  return (
    <div className={css.root}>
      <ItemHeader title={item?.title ?? ''} url={item?.url ?? ''} />
    </div>
  )
}

const queryClient = new QueryClient()
createRoot(document.getElementById('appRoot')!).render(
  <QueryClientProvider client={queryClient}>
    <ItemPage />
  </QueryClientProvider>,
)
