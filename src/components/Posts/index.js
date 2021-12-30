import React from "react";
import * as postsStyles from "./posts.module.css"
import { Link } from "gatsby";

export default ({ post }) => (
  <div>
    <h3 className={postsStyles.postMetadata}><Link to={ post.fields.slug }>{ post.frontmatter.title }</Link></h3>
    <h4 className={postsStyles.postMetadata}>By: { post.frontmatter.author }</h4>
    <h5 className={postsStyles.postMetadata}>Category: { post.frontmatter.category } || Date: { post.frontmatter.date }</h5>
    <p className={postsStyles.postMetadata}>{ post.excerpt }</p>
    <hr />
  </div>
)