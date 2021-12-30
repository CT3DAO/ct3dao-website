import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import * as postpageStyles from "./postpage.module.css"
import Layout from "../components/Layout"
import SocialsBox from "../components/SocialsBox"

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!data) return null;
    return (
      <Layout>
        <div className={postpageStyles.container}>
          <div className={postpageStyles.Header}>
            <h1>CT3 DAO</h1>
            <h2>Blog Posts</h2>
          </div>
          <div className={postpageStyles.postpageContainer}>
            <h1>{post.title}</h1>
            <h2 className={postpageStyles.postpageMetadata}>By: {post.author}</h2>
            <p className={postpageStyles.postpageMetadata}>{post.date}</p>
            <Link className={postpageStyles.postpageMetadata} to="/blog/">&#8656; Back to Posts</Link>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            <SocialsBox />
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        author
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
