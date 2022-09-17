import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Projects() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <div data-aos="zoom-in">
        <h1>Projects</h1>
        <div className={styles.projectcontainer}>
          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Geographic Information System</h3>
              <em>
                C++, STL, Git
                <br />
              </em>
              <a
                href="https://www.youtube.com/watch?v=_91wIJ_akvU&t=141s&ab_channel=JongjinJungn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/dali.png"></img>
              </a>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Gender Recognition from Images</h3>
              <em>
                Python, CV, Mini-Xception <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Predicting Onset of Septic Shock</h3>
              <em>
                Python, Deep Learning, XGBoost <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Neural Network From Scratch</h3>
              <em>
                Python <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Dynamic Array Visualizer</h3>
              <em>
                Javascript, React <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Dynamic Array Visualizer</h3>
              <em>
                Javascript, React <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
