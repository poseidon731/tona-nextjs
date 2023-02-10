import Head from 'next/head'
import NavBar from '../components/nav-bar'
import Home from '../components/home'
import Hero from '../components/Hero'
import Numbers from '../components/numbers'
import Services from '../components/services'
import Clients from '../components/clients'
import Portfolio from '../components/portfolio'
import Blog from '../components/blog'
import Contact from '../components/contact'
import Bottom from '../components/bottom'
import { useEffect } from 'react'

export default function HomePage() {

  return (
    <div>
      <Head>
        <title>Paul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />
      <Home />
      <span className="anchor" id="about"></span>
      <Hero />
      <span className="anchor" id="numbers"></span>
      <Numbers />
      <span className="anchor" id="services" ></span>
      <Services />
      <span className="anchor" id="clients"></span>
      <Clients />
      <span className="anchor" id="portfolio" ></span>
      <Portfolio />
      
      <section className="hire section-padding text-center">
        <div className="container">
          <h3>Start Work With Me</h3>
          <button>Hire Me</button>
        </div>
      </section>

      <span className="anchor" id="blog"></span>
      <Blog />
      <span className="anchor" id="contact"></span>
      <Contact />
      <Bottom />
    </div>
  )
}
