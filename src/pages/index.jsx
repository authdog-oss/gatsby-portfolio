import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import colors from '../../tailwind'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Nav from '../components/Nav'
// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Footer from '../views/Footer'
// Styles
import '../styles/normalize.scss'
import '../styles/main.scss'


class Index extends React.Component {
  render() {
    return (
      <>
        <Layout />
        <Parallax ref='parallax' pages={4.35}>
          <Nav logo={false} />
          <Hero offset={0} parallax={this.refs.parallax} />
          <About offset={1} factor={1.25} id='about' />
          <Projects offset={2.5} factor={2.2} id='projects'/>
          <Contact offset={3.825} factor={0.35}/>
          <Footer offset={4.025} />
        </Parallax>
      </>
    )
  }
}

export default Index