import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <Layout>
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
