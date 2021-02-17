import React from "react"

import Layout from "./components/layout"
// Components
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Skills from "./components/skills"
import Promotion from "./components/Promotion"
import Footer from "./components/Footer"

const App = () => {
return(
  <Layout>
    
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)
}
export default App