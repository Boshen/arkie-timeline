import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Slider from './slider'

export const Slide1 = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {
          extension: { eq: "png" },
          absolutePath: { regex: "/1/" }
        }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Slider>
          {
            data.images.edges.map((img) => (
              <Img key={img.node.childImageSharp.fluid.src} fluid={ img.node.childImageSharp.fluid } />
            ))
          }
        </Slider>
      )
    }}
  />
)
