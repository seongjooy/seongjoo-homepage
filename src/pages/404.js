import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Helmet from "react-helmet"

export default function NotFound() {
  return (
    <Layout>
      <Helmet>Seong Joo Yoon</Helmet>
      <div>
        <h2>Sorry, that page doesn't exist.</h2>
        <Link to="/">
          <br />
          Go To Home
        </Link>
      </div>
    </Layout>
  )
}
