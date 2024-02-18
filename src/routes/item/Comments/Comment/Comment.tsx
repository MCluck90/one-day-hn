import React, { useState } from 'react'
import { useItem } from '../../../../api/item'
import * as css from './Comment.css'
import { Icon } from '../../../../components/Icon'

export interface CommentProps {
  id: number
}

export const Comment: React.FC<CommentProps> = ({ id }) => {
  const { data: item, isLoading } = useItem(id)
  const [isOpen, setIsOpen] = useState(true)
  const toggleIsOpen = () => setIsOpen(!isOpen)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={css.root}>
      <div>
        <Icon
          className={css.toggler}
          invert
          onClick={toggleIsOpen}
          icon={isOpen ? 'angle-small-down' : 'angle-small-right'}
        />
        {item?.by ?? ''}
      </div>
      {isOpen && (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: formatComment(item?.text) }}
          />
          {item?.kids?.map((id) => <Comment key={id} id={id} />)}
        </>
      )}
    </div>
  )
}

function formatComment(text: string | undefined): string {
  if (!text) {
    return ''
  }

  text = text.replace(/<p>/g, '\n<p>')
  return text.replace(/^&gt; ([^\n]+)/g, '<blockquote>$1</blockquote>')
}
