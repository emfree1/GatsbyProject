import * as React from "react"
import Recent from "./recent"

const MostRecent = ({ mostRecentData }) => {

  return (
    <div className="most-recent container-md">
      <h3 className="most-recent--title"> Most Recent</h3>
      <div className="most-recent--wrapper">
        {mostRecentData.map(post => (
          <Recent
            key={post.uid}
            title={post.data.title.text}
            description={post.data.description.text}
            author_image={post.data.author_image.fixed.src}
            author_name={post.data.author_name.text}
            published_date={post.data.published_date}
            bgImg={post.data.image.fluid.src}
          />
        ))}
      </div>
    </div>
  )
}

export default MostRecent
