import * as React from "react"
import HeaderNav from "./headerNav"
import HeaderBody from "./headerBody"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerQueryPage {
      prismicBlogPage {
        data {
          navigation {
            name {
              text
            }
          }
          name_of_the_button {
            text
          }
          description {
            text
          }
          title {
            text
          }
          main_image {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  return (
    <header className="header container-lg" style={{ backgroundImage: `url(${data.prismicBlogPage.data.main_image.fluid.src})` }}>
      <HeaderNav dataLinks={data.prismicBlogPage.data?.navigation || []} />
      <HeaderBody
        buttonName={data.prismicBlogPage.data.name_of_the_button.text}
        description={data.prismicBlogPage.data.description.text}
        title={data.prismicBlogPage.data.title.text}
      />
    </header>
  )
}

export default Header
