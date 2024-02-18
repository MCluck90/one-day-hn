import React, { useState } from 'react'
import { useItem } from '../../../../api/item'
import * as css from './Comment.css'
import { Icon } from '../../../../components/Icon'
import { formatContent } from '../../util/content'

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
            dangerouslySetInnerHTML={{ __html: formatContent(item?.text) }}
          />
          {item?.kids?.map((id) => <Comment key={id} id={id} />)}
        </>
      )}
    </div>
  )
}
