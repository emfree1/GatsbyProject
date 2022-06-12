import * as React from "react"
import FeaturePost from "./featurePost"

const FeaturePosts = ({ dataPosts }) => {

  return (
    <div className="feature-posts container-md">
      <h3 className="feature-posts--title">Featured Posts</h3>
      <div className="feature-posts--wrapper">
        {dataPosts?.map(post => (
          <FeaturePost
            key={post.uid}
            title={post.data.title.text}
            description={post.data.description.text}
            author_image={post.data.author_image.fixed.src}
            author_name={post.data.author_name.text}
            published_date={post.data.published_date}
            adventure={post.adventure}
            bgImg={post.data.image.fluid.src}
            title_of_label={post.data.title_of_label.text}
            is_label={post.data.is_label}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturePosts
