import React from 'react'
import PropTypes from 'prop-types'

import './layout.module.css'

const Layout = ({ children }) => (
  <main>
    { children }
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
