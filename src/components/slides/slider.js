import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-id-swiper/src/styles/css/swiper.css'

// https://github.com/kidjp85/react-id-swiper

const params = {
  spaceBetween: 30,
  autoplay: true,
  effect: 'fade',
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
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
