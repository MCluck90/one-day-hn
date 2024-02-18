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

const typeToTitle: Record<StoryType, string> = {
  [StoryType.AskHn]: 'Ask HN',
  [StoryType.Best]: 'Best',
  [StoryType.Job]: 'Job',
  [StoryType.New]: 'New',
  [StoryType.ShowHn]: 'Show HN',
  [StoryType.Top]: 'Top',
}

const IndexPage: React.FC = () => {
  const typeQueryParam = getQueryParam('type')
  const storyType = isStoryType(typeQueryParam) ? typeQueryParam : StoryType.Top
  const page = usePage()

  document.title = `${typeToTitle[storyType]} - 1DHN`

  return (
    <div className={css.root}>
      <Header />

      <StoryList type={storyType} pagination={{ page, pageSize: 30 }} />
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
