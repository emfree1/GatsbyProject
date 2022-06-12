import * as React from "react"

const Recent = ({ bgImg, title, description, author_image, author_name, published_date }) => {
  return (
    <div className="recent-post">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="recent-post--top-img"
      />
      <div className="recent-post--bottom-info">
        <div className="recent-post--bottom-info__wrapper-text">
          <h3 className="recent-post--bottom-info__wrapper-text--title">
            {title}
          </h3>
          <p className="recent-post--bottom-info__wrapper-text--text">
            {description}
          </p>
        </div>
        <div className="recent-post--bottom-info__user-info">
          <div className="recent-post--bottom-info__user-info--wrapper">
            <div className="recent-post--bottom-info__user-info--wrapper__logo">
              <img src={author_image} alt="user-logo" />
            </div>
            <p className="recent-post--bottom-info__user-info--wrapper__name">
              {author_name}
            </p>
          </div>
          <p className="recent-post--bottom-info__user-info--date">{published_date}</p>
        </div>
      </div>
    </div>
  )
}

export default Recent
