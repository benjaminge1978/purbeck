import React from "react"
import { Link } from "gatsby"
import LeftCol from '../components/leftCol'
import RightCol from '../components/rightCol'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="wrapper">
    <SEO title="Purbeck Embroidery" />
    <div className="container">
    <LeftCol />
    <RightCol />
    </div>

    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)

export default IndexPage
