import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {ContentWrapper} from '../components/Recomposse'

import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lagos State Fire Safety Conference"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
   
    <ContentWrapper  >
      {children()}
    </ContentWrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
