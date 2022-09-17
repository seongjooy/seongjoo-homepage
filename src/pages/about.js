import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function About() {
  React.useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <Layout>
      <div className={styles.header}>
        <h1 data-aos="zoom-in">About</h1>
      </div>
      <div className={styles.body} data-aos="zoom-in">
        <div className={styles.abouttext}>
          <h2>Introduction</h2>
          <br />
          <p>
            Hobbies, - fencing, table tennis, watching soccer Interests, Places
            I lived bbies, - fencing, table tennis, watching soccer Interests,
            Places I livedbbies, - fencing, table tennis, watching soccer
            Interests, Places I livedbbies, - fencing, table tennis, watching
            soccer Interests, Places I livedbbies, - fencing, table tennis,
            watching soccer Interests, Places I livedbbies, - fencing, table
            tennis, watching soccer Interests, some pictures to introduce myself
            better (more lively!)
            <br />
            <br />
            Places I've lived:
            <br />
            • Seoul, South Korea
            <br />
            • Toronto, Canada
            <br />
            • Vancouver, Canada
            <br />
            • Madrid, Spain
            <br />• Istanbul, Türkiye
          </p>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <div className={styles.school}>
            <img src="/edu_uoft.png"></img>
            <p>
              <b>University of Toronto, St. George</b> <br />
              Toronto, Canada (2019 ~) <br />
              <em>• BASc, Electrical and Computer Engineering</em>
            </p>
          </div>
          <div className={styles.school}>
            <img src="/edu_asm.jpg"></img>
            <p>
              <b>The American School of Madrid</b> <br />
              Madrid, Spain (2017~2019) <br />
              <em>
                • International Baccalaureate
                <br />
                • National Honour Society <br /> • Cum Laude Society
              </em>
            </p>
          </div>
          <div className={styles.school}>
            <img src="/edu_sfs.png"></img>
            <p>
              <b>Seoul Foreign School</b> <br />
              Seoul, South Korea (2014 ~ 2017)
              <br />
              <em>
                • Boys' Varsity Soccer
                <br />• TASSEL Cambodia <br />
              </em>
              <br />
            </p>
          </div>
          <div className={styles.school}>
            <img src="/edu_mefis.png"></img>
            <p>
              <b>MEF International School</b> <br />
              Istanbul, Türkiye (2012-2014) <br />
              <em>• Middle School Boys' Soccer</em>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.photos}>
        <h2>More</h2>
        <div className={styles.photorow}>
          <figure>
            <img src="/istanbul.png"></img>
            <figcaption>
              <em>Family Visit, Istanbul, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/jecheon.png"></img>
            <figcaption>
              <em>Fencing Competition, Jecheon, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/seoul.png"></img>
            <figcaption>
              <em>Korea v Brazil, Seoul, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/jeju.png"></img>
            <figcaption>
              <em>Jeju Island, 2022</em>
            </figcaption>
          </figure>
        </div>
        <div className={styles.photorow}>
          <figure>
            <img src="/bangkok.png"></img>
            <figcaption>
              <em>Bangkok, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/soccer.png"></img>
            <figcaption>
              <em>Varsity Soccer, Seoul, 2016</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/manila.png"></img>
            <figcaption>
              <em>Service Trip, Manila, 2016</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/banff.png"></img>
            <figcaption>
              <em>Family Trip, Banff, 2006</em>
            </figcaption>
          </figure>
        </div>
        <br />
      </div>
    </Layout>
  )
}
