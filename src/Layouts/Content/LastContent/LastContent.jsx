import React from 'react'
import './LastContent.css'
import Text from '../../../component/Text-decoration/Text-decoration'

const LastContent = () => {
  return (
    <div className="last-content-container">
        <div className="promotions">PROMOTIONS</div>
      <Text
        firstName="our"
        lastName="packages"
        className="our-packages"
      />
        <div className="last-product"></div>
    </div>
  )
}

export default LastContent
