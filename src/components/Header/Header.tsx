import React from 'react'
import { Link } from '../Link'
import * as css from './Header.css'

export const Header: React.FC = () => {
  return (
    <header className={css.root}>
      <Link className={css.link} href="?type=top">
        Top
      </Link>
      <Link className={css.link} href="?type=ask-hn">
        Ask HN
      </Link>
      <Link className={css.link} href="?type=show-hn">
        Show HN
      </Link>
      <Link className={css.link} href="?type=best">
        Best
      </Link>
      <Link className={css.link} href="?type=new">
        New
      </Link>
    </header>
  )
}
