import React from 'react'
import { ZPTag } from './ZPTag'
import { ZSubTitle } from './ZSubTitle'
import { ZTitle } from './ZTitle'

const HeadingFile = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', marginTop:'10px'}}>
        <h1>Heading Title Tag</h1>
      <ZPTag> P Tag</ZPTag>
      <ZSubTitle>Subtitle Tag</ZSubTitle>
      <ZTitle>Title Tag</ZTitle>
    </div>
  )
}

export default HeadingFile
