import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.allWordpressPost.edges[0].node
    return (
        <Layout>
        <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        </Layout>
        )
    }
    
    export const query = graphql`
    query($id: String) {
        allWordpressPost( filter: { id: { eq: $id } } ) {
            edges {
                node {
                    title
                    date
                    content
                    categories
                    author
                }
            }
        }
    }
    `
    