import * as React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import FilterPosts from "../components/main/filterPosts"
import FeaturePosts from "../components/main/featurePosts/featurePosts"
import MostRecent from "../components/main/mostRecent/mostRecent"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const [dataPosts, setDataPost] = React.useState([])
  const [collection, setCollection] = React.useState([])
  const [featurePosts, setFeaturePosts] = React.useState([])
  const [mostRecent, setMostRecent] = React.useState([])

  const filterIsFeature = (data) => {
    const filterIsFeature = data.allPrismicBlog.nodes.filter(el => el.data.is_feature)
    setFeaturePosts([])
    setFeaturePosts(prev => [...prev, ...filterIsFeature])

    const filterMostRecent = data.allPrismicBlog.nodes.filter(el => !el.data.is_feature)
    setMostRecent([])
    setMostRecent(prev => [...prev, ...filterMostRecent])

  }

  React.useEffect(() => {
    setDataPost(data)

    const arr = []
    data.allPrismicBlog.nodes.map((el, i) =>  arr.push(el.data.topic))

    const setArr = [...new Set(arr)]
    setCollection(setArr)

    filterIsFeature(data)
   

  }, [data])

  const filterPosts = (category) => {
    if(category === "All") return filterIsFeature(dataPosts)

    const postsFeature = dataPosts.allPrismicBlog.nodes.filter(post => post.data.topic === category && post.data.is_feature )
    setFeaturePosts(postsFeature)

    const postsRecent = dataPosts.allPrismicBlog.nodes.filter(post => post.data.topic === category && !post.data.is_feature )
    setMostRecent(postsRecent)
    
  }

  return (
    <Layout>
      <main>
        <FilterPosts filterClick={filterPosts} collection={collection} />
        <FeaturePosts dataPosts={featurePosts} />
        <MostRecent mostRecentData={mostRecent} />
      </main>
    </Layout>
  )
}

export const dataQuery = graphql`
  query MyQuery {
    allPrismicBlog {
      nodes {
        data {
          author_image {
            fixed {
              src
            }
          }
          author_name {
            text
          }
          description {
            text
          }
          image {
            fluid {
              src
            }
          }
          is_label
          published_date
          title {
            text
          }
          title_of_label {
            text
          }
          topic
          is_feature
        }
        uid
      }
    }
  }
`

export default IndexPage
