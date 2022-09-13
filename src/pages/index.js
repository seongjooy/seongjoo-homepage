import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.header}>
        <h2>Seong Joo Yoon</h2>
        <h3>
          Student at the University of Toronto
          <br /> B.A.Sc. Computer Engineering
        </h3>
      </div>

      <div className={styles.body}>
        <img src="/dp.jpg" alt="display picture"></img>
        <p>
          <b>E-mail:</b> seongjooyoon@gmail.com
          <br />
          <b>Mobile:</b> +1 (647) 922 0923
          <br />
        </p>
        <p>
          I'm a third year student after taking the previous year off and
          interning as an ML developer working with the medical field. I mainly
          worked with Python and developed an XGBoost-based model which attempts
          to predict septic shock onset in patients using their vital sign data.
          My short-term goal spanning a few years is to decide on and put myself
          on track in an area of expertise that I will enjoy doing for a long
          time. <br />
          <br />
        </p>
      </div>
    </Layout>
  )
}
