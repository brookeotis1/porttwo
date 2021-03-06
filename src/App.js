import React from "react"
import Layout from "./components/layout"
import{ErrorBoundary} from 'react-error-boundary'

// Components
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Skills from "./components/skills"
import Promotion from "./components/Promotion"
import Footer from "./components/Footer"

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

const App = () => {
return(
  <div>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
  <Layout>
    
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
  </ErrorBoundary>
  </div>
)
}
export default App