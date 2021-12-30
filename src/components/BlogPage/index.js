import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import * as blogpageStyles from "./blogpage.module.css"
import PostListing from "../Posts"
import SocialsBox from "../SocialsBox"

const BlogPage = data => {
  
  return (
    <div className={blogpageStyles.container}>
      <div className={blogpageStyles.Header}>
        <h1>CT3 DAO</h1>
        <h2>Blog Posts</h2>
      </div>
      <div className={blogpageStyles.blogpageContainer}>
        <h1>Recent Articles</h1>
        <hr />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
        <SocialsBox />
      </div>   
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query blogPostsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                author
                category
                date(formatString: "MMMM Do, YYYY")
                desc
                title
              }
              html
              excerpt(pruneLength: 280)
            }
          }
        }
      }
    `}
    render={BlogPage}
  />
)
