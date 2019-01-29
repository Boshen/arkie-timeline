import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { renderSlide } from './slider'

export const Slide4 = () => (
  <StaticQuery
    query={graphql`
      query Slide4 {
        images: allFile(
          filter: {
            extension: { in: ["png", "jpg"] }
            relativePath: { regex: "/^4/" }
          }
        ) {
          ...slideImage
        }
      }
    `}
    render={renderSlide}
  />
)
