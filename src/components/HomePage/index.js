import * as React from "react"
import Particles from "react-particles-js"
import homePageStyles from "./homePage.module.css"


const SecondPage = () => (

  <div id="particles">
    <Particles
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
  </div>
)

export default SecondPage
