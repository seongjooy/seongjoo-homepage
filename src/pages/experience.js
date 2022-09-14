import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/experience.module.css"

export default function experience() {
  return (
    <Layout>
      <div>
        <h1>Experience</h1>
        <div className={styles.body}>
          <div className={styles.experience}>
            <div className={styles.description}>
              <b>Intern, ML Developer (May 2021 - June 2022)</b>
              <br />
              <em>Spass Co., Ltd.</em>
              <p>
                • Regional fencing tournament for U-15 athletes
                <br />• Placed first
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
