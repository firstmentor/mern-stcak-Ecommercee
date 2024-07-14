import React from 'react'
import { Helmet } from 'react-helmet' // To Dynamic the title

function MetaData({title}) {
  return (
    <Helmet>
      <title>{`${title}-InstaShop`}</title>
      {/* <title>{title}</title> */}
    </Helmet>
  )
}

export default MetaData