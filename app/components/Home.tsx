import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Testimonial from './Testimonial'
import Services from './Services'
import Layout from './Layout'

export default function HomePage() {
  return (
    <>
        <Layout>
          <Hero />
          <Features />
          <Services />
          <Testimonial/>
        </Layout>
    </>
  )
}
