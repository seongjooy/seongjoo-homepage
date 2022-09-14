import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Home() {
  React.useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <Layout>
      <div className={styles.header} data-aos="flip-left">
        <h2>Seong Joo Yoon</h2>
        <h3>
          Student at the University of Toronto
          <br /> B.A.Sc. Computer Engineering
        </h3>
      </div>

      <div className={styles.body} data-aos="flip-left">
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
        </p>
      </div>
      <div className={styles.contacts} data-aos="flip-left">
        <a
          href="https://www.linkedin.com/in/seongjooyoon"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.contactbtn}
            src="/linkedin_icon.png"
            alt="linkedin link"
          />
        </a>
        <a
          href="https://www.facebook.com/stephanseongjoo/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.contactbtn}
            src="/facebook_icon.png"
            alt="facebook link"
          />
        </a>
        <a
          href="https://www.instagram.com/_seongjoo/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.contactbtn}
            src="/insta_icon.png"
            alt="instagram link"
          />
        </a>
        <a href="https://github.com/seongjooy" target="_blank" rel="noreferrer">
          <img
            className={styles.contactbtn}
            src="/github_icon.png"
            alt="github link"
          />
        </a>
      </div>
    </Layout>
  )
}
