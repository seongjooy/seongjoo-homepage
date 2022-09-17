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
          <h2>About Myself</h2>
          <br />
          <p>
            I made this page to introduce more about myself to help getting to
            know me better in person. <br />
            <br />
            I'm a 3rd year student with a year of intern experience during the
            previous year where I learned machine learning model development
            using tabular healthcare data. In my free time as of now, I like to
            learn front-end dev because of the interactive nature that the
            process provides. <br />
            <br />
            As a person, I'm a fencing hobbyist, a fan of the football club
            Borussia Dortmund, a fan of Damwon Gaming and a brother to one
            younger brother. I was born in Seoul but raised in Vancouver,
            Toronto, Seoul, Istanbul and Madrid. I came back here for university
            because of my good memories of growing up here, and so far I am
            happy I made that decision!
          </p>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <div className={styles.school}>
            <img src="/edu_uoft.png" alt="uoft logo"></img>
            <p>
              <b>University of Toronto, St. George</b> <br />
              Toronto, Canada (2019 ~) <br />
              <em>• BASc, Electrical and Computer Engineering</em>
            </p>
          </div>
          <div className={styles.school}>
            <img src="/edu_asm.jpg" alt="asm logo"></img>
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
            <img src="/edu_sfs.png" alt="sfs logo"></img>
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
            <img src="/edu_mefis.png" alt="mefis logo"></img>
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
            <img src="/istanbul.png" alt="istanbul img"></img>
            <figcaption>
              <em>Family Visit, Istanbul, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/jecheon.png" alt="jecheon img"></img>
            <figcaption>
              <em>Fencing Competition, Jecheon, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/seoul.png" alt="seoul img 2022"></img>
            <figcaption>
              <em>Korea v Brazil, Seoul, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/jeju.png" alt="jeju img"></img>
            <figcaption>
              <em>Jeju Island, 2022</em>
            </figcaption>
          </figure>
        </div>
        <div className={styles.photorow}>
          <figure>
            <img src="/bangkok.png" alt="bangkok img"></img>
            <figcaption>
              <em>Bangkok, 2022</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/soccer.png" alt="seoul img 2016"></img>
            <figcaption>
              <em>Varsity Soccer, Seoul, 2016</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/manila.png" alt="manila img"></img>
            <figcaption>
              <em>Service Trip, Manila, 2016</em>
            </figcaption>
          </figure>
          <figure>
            <img src="/banff.png" alt="banff img"></img>
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
