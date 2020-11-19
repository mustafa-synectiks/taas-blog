import React from "react"
import {graphql } from "gatsby"
import './index.css'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby-plugin-modal-routing';
import ConditionalLayout from '../components/ConditionalLayout'
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} >
  //      <h1>Hi</h1>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} >
      <SEO title="All posts" />

      <div className='main-column'>
      <div className="columns one">
      	<Link to='/hello-world/' asModal>
						Blog
					</Link>
      	</div>
      <div className="columns two">
      	<Link to='/oneservice/' asModal>
						Products
					</Link>
      	</div>
      <div className="columns three">
      	<Link to='/oneservice/' asModal>
						Solutions
					</Link></div>
      </div>
      {/* <Bio /> */}
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1, sort: { fields: [frontmatter___date], order: ASC },filter: {fileAbsolutePath: {regex: "/blog/"}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
