import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>About</h1>
      </div>
      <div className={styles.body}>
        <p>Text about myself</p>
      </div>
    </Layout>
  )
}
