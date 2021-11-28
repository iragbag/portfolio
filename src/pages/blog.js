import * as React from 'react'
import { graphql } from 'gatsby'
const BlogList = ({data}) => {
    var blogList = data.allNotion.edges;
  return (
    <div>
        {
        blogList[0].node.title
        }
    </div>
  )
}
export const query = graphql`
        query getBlogMetaData {
            allNotion {
            edges {
                node {
                title
                }
            }
        }
    }
`
export default BlogList