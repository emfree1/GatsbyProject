import { Link } from "gatsby"
import * as React from "react"

const HeaderNav = ({ position, dataLinks }) => {
  return (
    <nav className={`${position ? "nav-footer" : null}`}>
      <div className="nav-wrapper container-md">
        <h3 className="nav-wrapper--logo">Escape.</h3>
        <div className="nav-wrapper--links">
          <ul className="nav-wrapper--links__ul">
            {dataLinks && dataLinks.map((link, index) => (
              <li
                key={`${link.name.text}-${index}`}
                className="nav-wrapper--links__ul--link"
              >
                <Link to="/#">{link.name.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
