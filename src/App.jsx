import '../src/styles/reset.css'
import { Header } from './components/Header'
import { BannerSection } from './components/BannerSection'
import { AboutMe } from './components/AboutMeSection'
import { TechSection } from './components/TechSection'
import { ProjectSection } from './components/ProjectSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />    
      <BannerSection />
      <AboutMe />
      <TechSection />
      <ProjectSection />
      <Footer /> 
    </>
  )
}

export default App
