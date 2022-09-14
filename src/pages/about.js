import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function About() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <div className={styles.header}>
        <h1 data-aos="zoom-in">About</h1>
      </div>
      <div className={styles.body} data-aos="zoom-in">
        <p>Text about myself</p>
      </div>
    </Layout>
  )
}
