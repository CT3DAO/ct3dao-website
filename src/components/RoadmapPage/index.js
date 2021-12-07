import * as React from "react"
import Particles from "react-particles-js"
import * as roadmapPageStyles from "./roadmapPage.module.css"
import CTLogo from "../../assets/CTLogo.inline.svg"

const RoadmapPage = () => (

  <div id="particles">
    <Particles className={roadmapPageStyles.particleField}
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 700,
            }
          },
          color: {
            value: "#fff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.1,
              opacity_min: 0.1,
              sync:false
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            },
          },
          retina_detect: true,
        },
      }}>  
    </Particles>

    <div className={roadmapPageStyles.container}>
      <div className={roadmapPageStyles.Header}>
        <h1>CT3 DAO's Roadmap</h1>
        <h2>We hope you'll join us.</h2>
      </div>
      
      <div className={roadmapPageStyles.ctOutlineDiv}>
        <CTLogo className={roadmapPageStyles.CTLogo}/>
      </div>

      <div className={roadmapPageStyles.socialsBox}>
        <a href="https://discord.gg/WFwu6TTd8u">
          <button className={roadmapPageStyles.block}>Join Us On Discord</button>
        </a>
        <a href="https://twitter.com/ct3_dao">
          <button className={roadmapPageStyles.block}>Tweet At Us</button>
        </a>
      </div>
    </div>
      
  </div>
)

export default RoadmapPage
