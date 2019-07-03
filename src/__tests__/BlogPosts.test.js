import React from 'react';
import { shallow } from 'enzyme';
import BlogPosts from '../components/BlogPosts';
import BlogPost from '../components/BlogPost'


it('should have as many li as posts', () => {
  const blogPosts = ['a','b','c']


  const wrapper = shallow(<BlogPosts blogPosts={blogPosts}/>)

  const lis = wrapper.find(BlogPost)

  expect(lis.length).toBe(blogPosts.length)
})