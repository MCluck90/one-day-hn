import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/global.css'
import * as css from './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useItem } from '../../api/item'
import { getQueryParam } from '../../url/query-params'
import { ItemHeader } from './ItemHeader'
import { Comments } from './Comments'
import { Header } from '../../components/Header'

const ItemPage: React.FC = () => {
  const itemId = Number(getQueryParam('id') ?? '0')
  const { data: item } = useItem(itemId)
  if (item?.title) {
    document.title = `${item.title} - 1DHN`
  }

  return (
    <div className={css.root}>
      <Header />

      <ItemHeader
        title={item?.title ?? ''}
        text={item?.text}
        url={item?.url ?? ''}
      />
      {item && <Comments item={item} />}
    </div>
  )
}

const queryClient = new QueryClient()
createRoot(document.getElementById('appRoot')!).render(
  <QueryClientProvider client={queryClient}>
    <ItemPage />
  </QueryClientProvider>,
)
