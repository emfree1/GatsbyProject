import * as React from "react"

const HeaderBody = ({ title, description, buttonName }) => {
  return (
    <div className="headerBody container-md">
      <h1 className="headerBody--title">{title}</h1>
      <p className="headerBody--text">{description}</p>
      <button className="headerBody--btn">{buttonName}</button>
    </div>
  )
}

export default HeaderBody
