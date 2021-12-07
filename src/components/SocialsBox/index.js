import * as React from "react"
import * as socialsBoxStyles from "./socialsBox.module.css"

const SocialsBox = () => (

  <div className={socialsBoxStyles.socialsBox}>
    <a href="https://discord.gg/WFwu6TTd8u">
      <button className={socialsBoxStyles.block}>Join Us On Discord</button>
    </a>
    <a href="https://twitter.com/ct3_dao">
      <button className={socialsBoxStyles.block}>Tweet At Us</button>
    </a>
  </div>
)

export default SocialsBox
