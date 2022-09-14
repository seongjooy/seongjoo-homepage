import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/experience.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Experience() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <div>
        <h1 data-aos="zoom-in">Experience</h1>
        <div className={styles.body} data-aos="zoom-in">
          <div className={styles.experience}>
            <div className={styles.description}>
              <b>Intern, ML Developer (May 2021 - June 2022)</b>
              <br />
              <em>Spass Co., Ltd.</em>
              <p>
                •
                <br />•
              </p>
            </div>

            <a href="https://spass.ai" target="_blank" rel="noreferrer">
              <img className={styles.logo} src="/spass.png"></img>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
