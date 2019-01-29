import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { renderSlide } from './slider'

export const Slide3 = () => (
  <StaticQuery
    query={graphql`
      query Slide3 {
        images: allFile(
          filter: {
            extension: { in: ["png", "jpg"] }
            relativePath: { regex: "/^3/" }
          }
        ) {
          ...slideImage
        }
      }
    `}
    render={renderSlide}
  />
)
