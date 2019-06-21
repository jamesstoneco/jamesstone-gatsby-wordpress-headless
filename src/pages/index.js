import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>JamesStone.com</h1>
      <h4>All Posts by Date</h4>
      <ul>
        {data.allWordpressPost.edges.map(({ node }) => (
          <li>
            <a href={node.slug}>{node.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
