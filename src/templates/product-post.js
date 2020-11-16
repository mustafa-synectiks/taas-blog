import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby-plugin-modal-routing';
import ConditionalLayout from '../components/ConditionalLayout'

const ProductPostTemplate = ({ data, location }) => {
  const propost = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={propost.frontmatter.title}
        description={propost.frontmatter.description || propost.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{propost.frontmatter.title}</h1>
          <p>{propost.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: propost.html }}
          itemProp="articleBody"
        />
        <hr />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" asModal>
                ← prev
                {/* ← {previous.frontmatter.title} */}
              </Link>
            )}
          </li>
          <li>
           {next && (
              <Link to={next.fields.slug} rel="next" asModal>
                next →
                {/* {next.frontmatter.title} → */}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProductPostTemplate

export const pageQuery = graphql`
  query ProductPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
