import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Projects() {
  React.useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <Layout>
      <div>
        <h1 data-aos="zoom-in">Projects</h1>
      </div>
    </Layout>
  )
}
