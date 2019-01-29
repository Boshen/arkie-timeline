import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import 'react-id-swiper/src/styles/css/swiper.css'

// https://github.com/kidjp85/react-id-swiper

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  spaceBetween: 30,
  autoplay: true,
}

const Slider = ({ children }) => {
  return (
    <Swiper {...params}>
      {children}
    </Swiper>
  )
}

export default Slider


