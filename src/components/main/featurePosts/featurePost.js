import * as React from "react"

const FeaturePost= ({bgImg, title, description, author_image, author_name, published_date, is_label, title_of_label}) => {
  
  return (
    <div className='feature-post' style={{backgroundImage: `url(${bgImg})`}}>
      {is_label 
        ? <div className='feature-post--adventure'>
          <p className="feature-post--adventure__text">{title_of_label}</p>
          </div>
        : null}
      <h3 className="feature-post--title">{title}</h3>
      <p className="feature-post--text">{description}</p>
      <div className='feature-post--user-info'>
        <div className='feature-post--user-info__wrapper'>
          <div className='feature-post--user-info__wrapper--logo'>
            <img src={author_image} alt='user-logo' />
          </div>
          <p className="feature-post--user-info__wrapper--name">{author_name}</p>
        </div>
        <p className="feature-post--user-info__date">{published_date}</p>
      </div>
    </div>
  )
}

export default FeaturePost
