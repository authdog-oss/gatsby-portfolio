import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Bounce from 'react-reveal/Bounce';
import config from 'react-reveal/globals'
// Components
import Layout from './Layout'
import Header from './Header'
import BlogCard from './BlogCard'
import Pagination from './Pagination'
import Search from './Search'
import TagMenu from './TagMenu'
// Elements
import { BigTitle, Title } from '../elements/Titles'
import Content from '../elements/Content'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'


const HeaderContent = styled(Content)`
  ${tw`pt-0`}
  top: -5rem;
  left: -1rem;
  height: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
`

const BGTitle = styled(BigTitle)`
  ${tw`font-semibold mt-0`}
  font-size: 40vw !important;
  letter-spacing: -0.35rem;
  opacity: 0.05;
  z-index: -99;
`

const PageTitle = styled(Title)`
  ${tw`m-0 mt-12 md:text-6xl md:mt-6 xl:text-7xl xl:mt-6`}
  margin-left: 0.75rem !important;
  @media (max-width: 820px) {
    font-size: 4.75rem !important;
  }
`

const Subtitle = styled.h4`
  ${tw`font-sans text-grey text-lg text-left font-medium leading-tight md:text-xl sm:w-4/5 md:w-3/4 my-3 ml-4 mr-auto`}
`

const HeaderText = styled.div`
`

const Wrapper = styled.div`
  ${tw`m-auto xs:pt-8 sm:my-1 md:pt-16`}
  width: 95%;
  max-width: 2000px;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-bottom: 18rem;
`

const BlogContent = styled(Content)`
  ${tw`w-4/5 h-full mx-auto p-0 pt-16 z-10`}
  background: rgba(255,255,255,0.95);
  top: -1.5rem;
  padding: 0 !important;
  div {
    z-index: 9999999;
  }
`

const CardList = styled.div`
  ${tw`block w-full mx-auto pt-8 xs:inline`}
  min-width: 950px;
  margin-top: -1vh;
`

const ButtonsWrapper = styled.div`
  ${tw`hidden md:flex relative justify-between items-end h-12 ml-0 md:ml-auto mr-auto md:mr-1`}
  width: 8rem;
  top: 1.5rem;
  right: 0;
`


const BlogLayout = ({ title, posts, pageContext, algolia }) => {
  require('../styles/blog.scss')
  config({ ssrFadeout: true })
  const { currentPage, numPages, count } = pageContext
  const tagPage = (title !== 'Blog')
  const path = tagPage ? `blog/tag/${kebabCase(title)}` : `blog`

  let postCount = count % 4
  if (count < 4)
    postCount = count
  else if (currentPage <= Math.floor(count / 4))
    postCount = 4

  const offset = (numPages > 1 ? 0.075 : 0)
  let pageHeight = 1.05 + (postCount * 0.38)
  let contentHeight = 0.525 + (postCount * 0.6) + offset
  const mobile = isMobile()
  if (mobile) {
    pageHeight += postCount * 0.09
    contentHeight += 0.55
  }

  return (
    <Layout pages={pageHeight}>
      <Header offset={0} factor={0.45} full={true}>
        <HeaderContent offset={0.125} speed={0.25}>
          <BGTitle>Blog</BGTitle>
        </HeaderContent>
        <HeaderText>
          <PageTitle>{upperFirst(title)}<span className='accent'>.</span></PageTitle>
          <Subtitle>Read my latest articles and posts on software development, design, technology and more.</Subtitle>
        </HeaderText>
      </Header>
      <BlogContent className='light-bg' offset={0.55} factor={contentHeight} speed={0.6}>
        <Wrapper>
          <ButtonsWrapper>
            <Search algolia={algolia} />
            <TagMenu />
          </ButtonsWrapper>
          <CardList>
            {posts.map(({ node, i }) => (
              <Bounce bottom key={node.fields.slug} delay={100 * (i + 1)} duration={1000}>
                <BlogCard post={node} mobile={mobile} />
              </Bounce>
            ))}
          </CardList>
          <Pagination
            path={path}
            current={currentPage}
            numPages={numPages} />
        </Wrapper>
      </BlogContent>
    </Layout>
  )
}

BlogLayout.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pageContext: PropTypes.shape.isRequired,
  algolia: PropTypes.shape,
}

export default BlogLayout
