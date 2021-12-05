import * as React from 'react'

const BlogItem = ({ item,index }) => {
    var data = item.node;
    return (
        <div> {data.title} </div>
    )
}

export default BlogItem