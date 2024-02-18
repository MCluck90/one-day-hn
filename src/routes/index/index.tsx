import React from 'react'
import { createRoot } from 'react-dom/client'
import * as css from './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StoryType, isStoryType } from '../../domain/Story'
import { StoryList } from '../../components/StoryList'
import { getQueryParam } from '../../url/query-params'
import { getNextPage, getPrevPage } from '../../url/relative-urls'
import { usePage } from '../../hooks/usePage'

const IndexPage: React.FC = () => {
  const storyType = getQueryParam('type')
  const page = usePage()

  return (
    <div className={css.root}>
      <h1>1DHN</h1>

      <StoryList
        type={isStoryType(storyType) ? storyType : StoryType.Top}
        pagination={{ page, pageSize: 30 }}
      />
      {page > 0 && <a href={getPrevPage()}>Back</a>}
      <a href={getNextPage()}>Next</a>
    </div>
  )
}

const queryClient = new QueryClient()
createRoot(document.getElementById('appRoot')!).render(
  <QueryClientProvider client={queryClient}>
    <IndexPage />
  </QueryClientProvider>,
)
