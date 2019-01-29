import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { renderSlide } from './slider'

export const Slide5 = () => (
  <StaticQuery
    query={graphql`
      query Slide5 {
        images: allFile(
          filter: {
            extension: { in: ["png", "jpg"] }
            relativePath: { regex: "/^5/" }
          }
        ) {
          ...slideImage
        }
      }
    `}
    render={renderSlide}
  />
)
