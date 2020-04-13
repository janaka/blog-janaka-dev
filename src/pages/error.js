import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ErrorPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="500: Error" />
      <h1>Error</h1>
      <p>Ooops! something went wrong grabbing that page. Sorry.</p>
    </Layout>
  )
}

export default ErrorPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
