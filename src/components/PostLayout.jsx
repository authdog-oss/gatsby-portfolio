import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
// Components
import Nav from './Nav'
import PostMeta from './PostMeta'
import Disqus from './Disqus';


class PostLayout extends React.Component {
  render() {
    const { post, location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const disqusShortname = get(this.props, 'data.site.siteMetadata.disqusShortname')
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <PostMeta 
          title={`${post.title} | ${siteTitle}`}
          description={post.description}
          thumbnail={post.heroImage.fluid}
          url={`/blog/${post.slug}`}
        />
        <Nav active={location.pathname} />
        <div style={{ background: `#fff` }}>
          {children}
        </div>
        <Disqus 
          siteTitle={siteTitle}
          postId={post.id}
          postUrl={siteUrl+location.pathname}
          postTitle={post.title}
          postId={post.id}
          disqusShortname={disqusShortname}
        />
      </div>
    )
  }
}

export default PostLayout
