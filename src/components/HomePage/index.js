import * as React from "react"
import SocialsBox from "../SocialsBox"
import * as homePageStyles from "./homePage.module.css"
import CTLogo from "../../assets/CTLogo.inline.svg"

const HomePage = () => (

  <div className={homePageStyles.container}>
    <div className={homePageStyles.Header}>
      <h1>Connecticut's home for Web3 enthusiasts.</h1>
      <h2>We hope you'll join us.</h2>
    </div>

    <SocialsBox />

    <div className={homePageStyles.roadmapButtonBox}>
      <a href="/roadmap/" target="_blank">
        <button className={homePageStyles.block}>Peep the Roadmap</button>
      </a>
    </div>
    
    <div className={homePageStyles.ctOutlineDiv}>
      <CTLogo className={homePageStyles.CTLogo}/>
    </div>
  </div>
)

export default HomePage
