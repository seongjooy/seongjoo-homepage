import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "gatsby"

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
                href="https://www.youtube.com/watch?v=_91wIJ_akvU&t=141s&ab_channel=JongjinJung"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/mapper.png"></img>
              </a>
            </div>
            <div className={styles.projectdescription}>
              This is a city-mapping software developed using C++, STL and data
              from OpenStreetMapAPI. The map is responsive; the level of detail
              shown is adjusted based on zoom and window size. Dijkstra's and A*
              algorithms were used for pathfinding between two points. This
              project was developed with two other teammates using Git for
              versioning.
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>A* Pathfinding Visualizer</h3>
              <em>
                Python, Pygame, A* <br />
              </em>

              <Link to="/projects/astar">
                <img src="/astarpath.png"></img>
              </Link>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose JIRA CONFLUENCE
              SLACK
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Gender Recognition from Images</h3>
              <em>
                Python, CV, Mini-Xception <br />
              </em>
              <img src="/gender_rec.png"></img>
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
              <img src="/xgb.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose - was also testing
              using multilayer perceptrons and random forests, but xgb gave the
              best performance
            </div>
          </div>

          {/* <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>API Project</h3>
              <em>
                Javascript <br />
              </em>
              <img src="/dali.png"></img>
            </div>
            <div className={styles.projectdescription}>
              Project description consisting of a few sentences and stack and
              things you built the project on and the purpose
            </div>
          </div> */}

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Neural Network From Scratch</h3>
              <em>
                Python <br />
              </em>
              <img src="/nnfs.png"></img>
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
