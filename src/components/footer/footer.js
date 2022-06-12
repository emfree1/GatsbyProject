import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import HeaderNav from "../header/headerNav"
import FooterInput from "./footerInput"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQueryPage {
      prismicBlogPage {
        data {
          navigation {
            name {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <footer className="container-lg">
      <FooterInput />
      <HeaderNav
        position="footer"
        dataLinks={data.prismicBlogPage.data?.navigation || []}
      />
    </footer>
  )
}

export default Footer
