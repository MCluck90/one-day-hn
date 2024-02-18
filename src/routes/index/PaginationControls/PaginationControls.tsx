import React from 'react'
import { getNextPage, getPrevPage } from '../../../url/relative-urls'
import { usePage } from '../../../hooks/usePage'
import { Link } from '../../../components/Link'
import * as css from './PaginationControls.css'

export const PaginationControls: React.FC = () => {
  const page = usePage()

  return (
    <div className={css.root}>
      {page > 0 && <Link href={getPrevPage()}>&lt; Back</Link>}
      <Link href={getNextPage()}>Next &gt;</Link>
    </div>
  )
}
