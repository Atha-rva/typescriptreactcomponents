import React from 'react'
import ZDividerAdd from '.'

const ZDividerAddFile = () => {
  return (
    <div style={{display:'flex', flexDirection:'column' ,marginTop:'20px'}}>
      <h1>Divider Component</h1>
      <ZDividerAdd text='+Add Button'/>
    </div>
  )
}

export default ZDividerAddFile
