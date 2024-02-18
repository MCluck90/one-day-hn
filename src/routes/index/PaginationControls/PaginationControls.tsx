import React from 'react'
import { getNextPage, getPrevPage } from '../../../url/relative-urls'
import { usePage } from '../../../hooks/usePage'

export const PaginationControls: React.FC = () => {
  const page = usePage()

  return (
    <div>
      {page > 0 && <a href={getPrevPage()}>Back</a>}
      <a href={getNextPage()}>Next</a>
    </div>
  )
}
