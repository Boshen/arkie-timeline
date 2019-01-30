import React from 'react'
import Swiper from 'react-id-swiper'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-id-swiper/src/styles/css/swiper.css'

// https://github.com/kidjp85/react-id-swiper

const params = {
  autoplay: {
    delay: 2500,
  },
  effect: 'fade',
  grabCursor: true,
  keyboard: true,
  loop: true,
}

export const renderSlide = data =>
  data.images && (
    <Swiper {...params}>
      {data.images.edges.map(img => (
        <Img
          fadeIn={true}
          critical={true}
          key={img.node.childImageSharp.fluid.src}
          fluid={img.node.childImageSharp.fluid}
        />
      ))}
    </Swiper>
  )

export const slideImage = graphql`
  fragment slideImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 600, toFormat: JPG, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
