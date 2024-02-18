import React from 'react'
import { createRoot } from 'react-dom/client'
import * as css from './index.css'

const IndexPage: React.FC = () => {
  return (
    <div className={css.root}>
      <h1>1DHN</h1>
    </div>
  )
}

createRoot(document.getElementById('appRoot')!).render(<IndexPage />)
