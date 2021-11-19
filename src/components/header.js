import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <Link to="https://twitter.com/ct3_dao"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      >
        Twitter
      </Link>

      <Link to="https://discord.gg/jYkeC5DA"
      style={{
        color: `white`,
        textDecoration: `none`,
        onHover: `#00ff00`,
      }}
      >
        Discord
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
