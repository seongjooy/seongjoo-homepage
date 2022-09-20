import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/experience.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Helmet from "react-helmet"

export default function Experience() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <Helmet>Seong Joo Yoon</Helmet>

      <div data-aos="zoom-in">
        <h1>Experience</h1>
        <div className={styles.body}>
          <div className={styles.experience}>
            <div className={styles.description}>
              <b>Intern, ML Developer (May 2021 - June 2022)</b>
              <br />
              <em>Spass Co., Ltd.</em>
              <br />
              <em>Python, Deep Learning, scikit-learn, pandas </em>
              <p>
                • Main activities included learning, data pre-processing, model
                development, model training and testing, attending progress
                meetings and communicating results
                <br />
                <br />• Developed an XGBoost-based model for the prediction of
                septic shock onset in patients with a test AUC of 0.83 <br />
                <br />• Pre-processed and used patient data from MIMIC-III and
                Seoul St. Mary's Hospital, which consisted of their tabular
                vital sign data over time <br />
                <br />• Improved the model's AUROC (+0.04) and accuracy (4%) by
                feature engineering <br />
                <br />• Devised and translated SDS and SRS documents on a
                product submitted for FDA 510(k) approval
              </p>
            </div>

            <a href="https://spass.ai" target="_blank" rel="noreferrer">
              <img
                className={styles.logo}
                src="./spass.png"
                alt="spass logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
