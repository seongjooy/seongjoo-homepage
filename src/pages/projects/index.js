import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "gatsby"
import Helmet from "react-helmet"

export default function Projects() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <Helmet>Seong Joo Yoon</Helmet>
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
                <img src="./mapper.png" alt="mapper"></img>
              </a>
            </div>
            <div className={styles.projectdescription}>
              <br />
              <br />
              This is a city-mapping software developed using C++, STL and data
              from OpenStreetMapAPI. The map is responsive; the level of detail
              shown is adjusted based on zoom and window size. Dijkstra's and A*
              search were used for routing between two points. Developed with
              two other team mates using Git for versioning.
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>A* Pathfinding Visualizer</h3>
              <em>
                Python, Pygame, A* <br />
              </em>

              <Link to="/projects/astar">
                <img src="./astarpath.png" alt="astar"></img>
              </Link>
            </div>
            <div className={styles.projectdescription}>
              <br />
              <br />
              This is a pathfinding visualizer of A* search. It was coded using
              Python's Pygame library, using its drawing methods to create the
              layout. The user denotes the start and end points with the first
              two clicks. Then, the user can draw blockages which are
              dynamically drawn in black, and pressing space will activate the
              A* search. Click on the image for a demo.
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Gender Recognition from Images</h3>
              <em>
                Python, CV, Mini-Xception <br />
              </em>
              <img src=".gender_rec.png" alt="cv proj"></img>
            </div>
            <div className={styles.projectdescription}>
              <br />
              <br />
              This is a CV project on gender recognition. A Mini-Xception model
              was implemented and trained using an IJB-C image dataset.
              Hyperparameters were tuned to improve performance, including batch
              size, lr, # conv filters and # epochs, resulting in around 6%
              improved accuracy. Downsampling to reduce class imbalance also
              resulted in a 9% performance boost.
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.projectthumbnail}>
              <h3>Predicting Onset of Septic Shock</h3>
              <em>
                Python, Deep Learning, XGBoost <br />
              </em>
              <img src="./xgb.png" alt="septic xgb"></img>
            </div>
            <div className={styles.projectdescription}>
              <br />
              <br />
              Developed an XGBoost-based model to predict the onset of septic
              shock in patients 4 hours from time. Septic shock was defined
              according to an int'l standard and patient data consisted of chart
              data on their vital signs. Data was pre-processed from the
              MIMIC-III database.
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
              <img src="./nnfs.png" alt="nnfs"></img>
            </div>
            <div className={styles.projectdescription}>
              <br />
              <br />
              Coded a neural network from scratch in order to understand how it
              works under the hood. Coded layers, activation functions,
              backprogagation, regularization, dropout etc. to complete the
              model.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
