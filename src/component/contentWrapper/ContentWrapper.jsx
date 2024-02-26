import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='contentWrapper w-full max-w-[1500px] my-0 mx-auto'>{children}</div>
  )
}

export default ContentWrapper