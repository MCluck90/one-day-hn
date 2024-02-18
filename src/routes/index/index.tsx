import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/global.css'
import * as css from './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StoryType, isStoryType } from '../../domain/Story'
import { StoryList } from './StoryList'
import { getQueryParam } from '../../url/query-params'
import { usePage } from '../../hooks/usePage'
import { PaginationControls } from './PaginationControls'
import { Header } from '../../components/Header'

const IndexPage: React.FC = () => {
  const storyType = getQueryParam('type')
  const page = usePage()

  return (
    <div className={css.root}>
      <Header />

      <StoryList
        type={isStoryType(storyType) ? storyType : StoryType.Top}
        pagination={{ page, pageSize: 30 }}
      />
      <PaginationControls />
    </div>
  )
}

const queryClient = new QueryClient()
createRoot(document.getElementById('appRoot')!).render(
  <QueryClientProvider client={queryClient}>
    <IndexPage />
  </QueryClientProvider>,
)
