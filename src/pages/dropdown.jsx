import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/route-target-heading.js"

import Dropdown from '../components/dropdown'

const DropdownPage = () => (
  <Layout>
    <SEO title="Dropdown" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <RouteTargetHeading level={2} targetID="navigation">
        Dropdowns
      </RouteTargetHeading>
      <p>Tuck controls into an expandible, collapsible, accessible menu. Consider, however, whether you really need a dropdown.</p>
      <p>Keyboard interactions will depend on what's in the menu. List of links? The TAB key is fine.<br />UI actions with a button or radio buttons? Script the arrow keys.</p>

      <section className="two-col">
        <div>
          <h3>Link list dropdown</h3>
          <Dropdown items={[{
            text: 'Overview',
            url: '#'
          },{
            text: 'Our team',
            url: '#'
          },{
            text: 'Careers',
            url: '#'
          }]} />
        </div>
      </section>
    </div>
  </Layout>
)

export default DropdownPage


