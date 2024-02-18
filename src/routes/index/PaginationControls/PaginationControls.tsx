import React from 'react'
import { getNextPage, getPrevPage } from '../../../url/relative-urls'
import { usePage } from '../../../hooks/usePage'
import { Link } from '../../../components/Link'

export const PaginationControls: React.FC = () => {
  const page = usePage()

  return (
    <div>
      {page > 0 && <Link href={getPrevPage()}>Back</Link>}
      <Link href={getNextPage()}>Next</Link>
    </div>
  )
}
