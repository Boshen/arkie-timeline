import React from 'react'
import Swiper from 'react-id-swiper'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-id-swiper/src/styles/css/swiper.css'

// https://github.com/kidjp85/react-id-swiper

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: true,
  grabCursor: true,
  keyboard: true,
  loop: true,
  mousewheel: true,
  spaceBetween: 30,
}

const Slider = ({ children }) => {
  return <Swiper {...params}>{children}</Swiper>
}

export const renderSlide = data => (
  <Slider>
    {data.images &&
      data.images.edges.map(img => (
        <Img
          key={img.node.childImageSharp.fluid.src}
          fluid={img.node.childImageSharp.fluid}
        />
      ))}
  </Slider>
)

export const slideImage = graphql`
  fragment slideImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
