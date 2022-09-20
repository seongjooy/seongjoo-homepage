import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/astar.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import astar_demo from "../../../static/astar_demo.mp4"

export default function Astar() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <h1>Projects</h1>
      <a className={styles.backbutton} href="../">
        Back to Projects
      </a>
      <div className={styles.videobox}>
        <h3>
          A* Pathfinding Visualizer Demo Video
          <br />
          <br />
        </h3>

        <video autoplay controls muted id="astar-video">
          <source
            className="embed-responsive-item"
            src={astar_demo}
            type="video/mp4"
          ></source>
        </video>
      </div>
    </Layout>
  )
}
