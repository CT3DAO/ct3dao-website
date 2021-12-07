import * as React from "react"
import SocialsBox from "../SocialsBox"
import * as roadmapStyles from "./roadmap.module.css"

const Roadmap = () => (

  <div className={roadmapStyles.container}>
    <div className={roadmapStyles.Header}>
      <h1>CT3 DAO's Roadmap</h1>
      <h2>What we plan to buidl.</h2>
    </div>

    <div className={roadmapStyles.roadmapContainer}>
      <div className={roadmapStyles.blockquoteLeft}>
        <h3>Phase 1</h3>
        <p> - Free NFT mint</p>
        <p> - DAO voting via Squads (where your NFT is used as a vote)</p>
        <p> - Gated channels using NFT verification tools</p>
      </div>

      <div className={roadmapStyles.blockquoteRight}>
        <h3>Phase 2</h3>
        <p>IRL events.</p>
      </div>

      <div className={roadmapStyles.blockquoteLeft}>
        <h3>Phase 3</h3>
        <p>This plus validator?</p>
        <p>Helping with the maker space hackathon.</p>
      </div>
    </div>
    
    <SocialsBox />
  </div>
)

export default Roadmap
