import React from 'react'
import BlogPost from './BlogPost'

const BlogPosts = props => (
  <ul>
    {
      props.blogPosts.map(e => <BlogPost post={e}/>)
    }
  </ul>
)

export default BlogPosts