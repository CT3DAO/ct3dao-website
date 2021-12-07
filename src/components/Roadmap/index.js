import * as React from "react"
import SocialsBox from "../SocialsBox"
import * as roadmapStyles from "./roadmap.module.css"

const Roadmap = () => (

  <div className={roadmapStyles.container}>
    <div className={roadmapStyles.Header}>
      <h1>CT3 DAO's Roadmap</h1>
      <h2>We hope you'll join us.</h2>
    </div>

    <SocialsBox />
  </div>
)

export default Roadmap
