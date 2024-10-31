import React from 'react'
import { useState } from 'react'

interface Props {
    children: string
    maxChars?: number
}

const ExpandableText = ({children, maxChars = 100}: Props) => {
  const [viewed, setViewed] = useState(false)

  if(children.length <= maxChars) return <p>{children}</p>
  
  const displayContext = () => viewed ? children : children.slice(0, maxChars);
  const viewMore = () => {
    setViewed(!viewed);
  }

  return (
    <div>
      {displayContext()}
      {viewed ? '' : '....'}
      <button onClick={viewMore}>{viewed ? 'view less' : 'view more'}</button>
    </div>
  )
}

export default ExpandableText
