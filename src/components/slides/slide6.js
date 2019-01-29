import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { renderSlide } from './slider'

export const Slide6 = () => (
  <StaticQuery
    query={graphql`
      query Slide6 {
        images: allFile(
          filter: {
            extension: { in: ["png", "jpg"] }
            relativePath: { regex: "/^6/" }
          }
        ) {
          ...slideImage
        }
      }
    `}
    render={renderSlide}
  />
)
