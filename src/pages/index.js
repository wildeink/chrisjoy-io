import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <Header />
  <div className="homepage">
    <SEO title="Christopher" />
    <p className="intro1">Hi, my name is</p>
    <h2 className="introname">Chris Joy.</h2>
    
    <h3>I speacialize in modern<br /> web technologies.</h3>
    
    <p className="para">I'm a software developer based in the eastern USA, and Southeast Asia.<br />
    Tôi được nói cả tiếng Anh lẫn tiếng Việt. Je parle Français aussi.</p>
    <div className="btnrow">
    <button className="button"><a className="btnlink" href="mailto:chris@chrisjoy.io">Get In Touch</a></button>
    <button className="button"><a className="btnlink" href="#">&nbsp;Resume&nbsp;</a></button>
    </div>
    {/* <div style={{ maxWidth: `100px`, marginB `1.45rem` }}>
      <Image />
    </div> */}
    {/* <AniLink cover to="projects" bg="#663399">
      <a className="projbtn">Projects</a>
    </AniLink> */}
  </div>
  <Footer />
  </div>
)

export default IndexPage
