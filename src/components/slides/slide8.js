import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { renderSlide } from './slider'

export const Slide8 = () => (
  <StaticQuery
    query={graphql`
      query Slide8 {
        images: allFile(
          filter: {
            extension: { in: ["png", "jpg"] }
            relativePath: { regex: "/^8/" }
          }
        ) {
          ...slideImage
        }
      }
    `}
    render={renderSlide}
  />
)
