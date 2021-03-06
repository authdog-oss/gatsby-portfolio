import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDeviantart, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// Components
import PageLink from '../components/PageLink'
// Elements
import { DividerStatic } from '../elements/Dividers'
import Content from '../elements/Content'
// Styles
import { waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'


const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`}
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
  ${tw`relative h-full`}
  top: 0;
  @media screen and (max-width: 600px) {
    top: -3rem;
  }
  @media screen and (max-width: 500px) {
    top: 2rem;
  }
  svg {
    width: 100%;
    height: 40vh;
    filter: drop-shadow(0px 1px 16px rgba(0,0,0,0.5));
  }
  path {
    ${waveAnimation('20s')};
  }
`

const FooterWrapper = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 px-4 font-sans xs:text-lg lg:text-lg sm:p-10 sm:px-4 md:p-10`}
  font-size: 0.6rem;
  top: 4rem;
  z-index: 9999;
  /* @media screen and (max-width: 420px) {
    ${tw`pin-t`}
  } */
  .separator {
    position: relative;
    font-size: 5px;
    top: -0.7em;
    margin: 0 1em;
  }
  .gatsby-icon {
    border-bottom: none;
    &:hover svg path {
      fill: #7643A9;
      transition: all 300ms ease-in-out;
    }
  }
`

const SocialList = styled.ul`
  ${tw`list-reset text-3xl xs:text-4xl lg:text-4xl mt-4 mb-4`}
  li {
    display: inline;
    margin-right: 0.5em;
    a {
      color: #70818A;
      border-bottom: none;
      transition: all 350ms ease-in-out;
      &:hover {
        color: #A4B4BC;
        border-bottom: none;
      }
    }
  }
`

const iconStyle = {
  position: 'relative',
  width: '1.1em',
  height: '1.1em',
  top: '0.175em',
  margin: '0 0 0 0.5em',
}

const GatsbyIcon = () => (
  <svg xmlns='https://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' style={iconStyle}><path d='M15.9554.0891A15.9555,15.9555,0,1,0,31.9109,16.0446,15.9555,15.9555,0,0,0,15.9554.0891ZM3.4284,16.2109,15.7891,28.5716A12.528,12.528,0,0,1,3.4284,16.2109ZM18.76,28.2584,3.7416,13.24A12.531,12.531,0,0,1,26.085,8.671L24.35,10.2016a10.23,10.23,0,0,0-18.0141,2.36L19.438,25.6638a10.249,10.249,0,0,0,6.4484-7.1646H20.4557V16.0446h8.0289A12.5338,12.5338,0,0,1,18.76,28.2584Z' transform='translate(0 -0.0891)' fill='#9BABB4' /></svg>
)

const Footer = ({ offset, speed }) => (
  <Content offset={offset + 0.025} speed={0} factor={0.3} style={{ zIndex: `99999` }}>
    <DividerStatic
      className='footer-bg'
      factor={0.2}
      fill={colors['blue-grey']}
      speed={speed}
      offset={offset}
      style={{ zIndex: `999` }}>
      <WaveWrapper style={{ height: `100%`, top: `2rem`, left: `0` }}>
        <InnerWave>
          <svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 800 338.05' preserveAspectRatio='none'>
            <path>
              <animate attributeName='d' values='M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z' repeatCount='indefinite' dur='30s' />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </DividerStatic>
    <FooterWrapper>
      <SocialList>
        <li><a href='https://github.com/tterb' aria-label='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href='https://deviantart.com/bstevenson' aria-label='DeviantArt'><FontAwesomeIcon icon={faDeviantart} /></a></li>
        <li><a href='https://twitter.com/bstevensondev' aria-label='Twitter'><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href='https://dribbble.com/tterb' aria-label='Dribbble'><FontAwesomeIcon icon={faDribbble} /></a></li>
        <li><a href='https://linkedin.com/in/brett-stevenson/' aria-label='LinkedIn'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
      </SocialList>
      &copy; 2019 by &nbsp;
      <PageLink to='/'>Brett Stevenson</PageLink>
      <FontAwesomeIcon className='separator' icon={faCircle} />
      Powered by<a href='https://www.gatsbyjs.org/' className='gatsby-icon' aria-label='Visit gatsbyjs.org'><GatsbyIcon /></a>
    </FooterWrapper>
  </Content>
)

export default Footer

Footer.defaultProps = {
  speed: 0.35,
}
Footer.propTypes = {
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number,
}
