import * as React from 'react'
import { graphql } from 'gatsby'
import BlogItem from "../components/blog/BlogItem"

const BlogList = ({data}) => {
    var blogList = data.allNotion.edges;
    return (
        <div>
            {blogList.map((item, index) => 
                <BlogItem item = { item } key={ index } />
            )}
        </div>
  )
}
/* export const query = graphql`
        query getBlogMetaData {
            allNotion {
            edges {
                node {
                title
                }
            }
        }
    }
`*/
export default BlogList