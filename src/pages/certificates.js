import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/certificates.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Certificates() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <h1 data-aos="zoom-in">Certificates / Awards</h1>
      <div className={styles.body} data-aos="zoom-in">
        <div className={styles.certificates}>
          <div className={styles.description}>
            <b>Bias in AI (2022)</b>
            <br />
            <em>Vector Institute for Artificial Intelligence</em>
            <p>
              • Investigated bias in pre-trained language and
              <br /> image datasets due to bias in train sets
              <br />
              <br />• Developed awareness of disadvantaged groups
              <br />
              impacted by biased AI models
              <br />
              <br /> • Studied techniques to mitigate bias in computer <br />
              vision, including data augmentation and cost <br />
              function constraint terms
              <br />
              <br />• Completed capstone project on identifying and <br />
              mitigating bias in healthcare data. Presented
              <br /> findings to Vector Institute and IRAP staff
            </p>
          </div>
          <a href="https://vectorinstitute.ai" target="_blank" rel="noreferrer">
            <img className={styles.logo} src="/vector.png"></img>
          </a>
        </div>
        <div className={styles.certificates}>
          <div className={styles.description}>
            <b>Dean's List (2019-2020)</b>
            <br />
            <em>University of Toronto</em>
            <p>
              • Awarded for a sessional GPA of at least 3.5
              <br />
              <br />• Achieved in Fall 2019, Winter 2020
            </p>
          </div>
          <a href="https:/www.ece.utoronto.ca" target="_blank" rel="noreferrer">
            <img className={styles.logo} src="/uoft.png"></img>
          </a>
        </div>
        <div className={styles.certificates}>
          <div className={styles.description}>
            <b>Certificate of Distinction (2018)</b>
            <br />
            <em>Euclid Mathematics Contest, University of Waterloo</em>
            <p>
              • Math contest for senior-level high school students
              <br />
              <br />• Scored in the top 25% of participants
            </p>
          </div>
          <a
            href="https://www.cemc.uwaterloo.ca/contests/euclid.html"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.logo} src="/uwaterloo.png"></img>
          </a>
        </div>
        <div className={styles.certificates}>
          <div className={styles.description}>
            <b>Gold Medal (2015)</b>
            <br />
            <em>U-15 Men's Epee, Seoul Fencing Association</em>
            <p>
              • Regional fencing tournament for U-15 athletes
              <br />
              <br />• Placed first
            </p>
          </div>
          <a
            href="https://fencing.sports.or.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.logo} src="/sfa.png"></img>
          </a>
        </div>
      </div>
    </Layout>
  )
}
