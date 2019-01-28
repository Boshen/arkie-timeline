import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// https://www.gatsbyjs.org/packages/gatsby-image/

export const astronaut = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
const Image = ({ query }) => (
  <StaticQuery
    query={query}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default Image
