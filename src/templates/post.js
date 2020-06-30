import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/site-chrome/layout'

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    allMarkdownRemark(
        limit: 5,
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
          edges {
            node {
              id
              frontmatter {
                  title
                  path
              }
            }
          }
      }
  }
`
