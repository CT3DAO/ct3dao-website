import * as React from "react"
import SocialsBox from "../SocialsBox"
import * as roadmapStyles from "./roadmap.module.css"

const Roadmap = () => (

  <div className={roadmapStyles.container}>
    <div className={roadmapStyles.Header}>
      <h1>CT3 DAO</h1>
      <h2>Roadmap</h2>
    </div>

    <div className={roadmapStyles.roadmapContainer}>
      <div className={roadmapStyles.blockquoteLeft}>
        <h2>Phase 1</h2>
        <h3>Create and release our free NFTs for Connecticut affiliated folks to mint.</h3>
        <p className={roadmapStyles.caption}>This is where you come in. Holding one of these free tokens makes you a part owner of CT3.</p>
        <h3>Implement on-chain DAO voting via <a className={roadmapStyles.roadmapLink} href="https://sqds.io" target="_blank">Squads</a>.</h3>
        <p className={roadmapStyles.caption}>And this is how you can make and vote on proposals about how you'd like to shape the group.</p>
        <h3>Segment off portions of our Discord specifically for token holders via <a className={roadmapStyles.roadmapLink} href="https://grapes.network/" target="_blank">Grape</a>.</h3>
        <p className={roadmapStyles.caption}>Though, there will always be publicly available Discord channels for non token holders.</p>
      </div>

      <div className={roadmapStyles.blockquoteRight}>
        <h2>Phase 2</h2>
        <h3>Host events around the state to get to know, and learn from, each other.</h3>
        <p className={roadmapStyles.caption}>If we're going to own CT3 together, we should hang out! We'll order pizza, hack on projects, and give presentations on what we've learned.</p>
        <h3>Create and distribute POAP tokens to whoever joins us for IRL events.</h3>
        <p className={roadmapStyles.caption}>In addition to your free ownership NFT, we want to make and hand out custom tokens for attending IRL events.</p>
      </div>

      <div className={roadmapStyles.blockquoteLeft}>
        <h2>Phase 3</h2>
        <h3>Set up and run our own Solana validator.</h3>
        <p className={roadmapStyles.caption}>Beyond being a neat educational experience for us all, rewards from running this validator can help pay for events.</p>
        <h3>Work with local Makerspaces to host a hackathon.</h3>
        <p className={roadmapStyles.caption}>What fun is learning all of this new technology if we don't help the broader CT hacker/maker community build anything rad with it?</p>
      </div>
    </div>
    
    <SocialsBox />
  </div>
)

export default Roadmap
