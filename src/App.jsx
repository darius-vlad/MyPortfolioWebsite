
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { WebProjects } from './components/Projects/WebProjects'
import { JavaProjects } from './components/Projects/JavaProjects'
import { PyhtonProjects } from './components/Projects/PythonProjects'
import { HardwareProjects } from './components/Projects/HardwareProjects'

function App() {


  return (

    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <WebProjects />
      <JavaProjects />
      <PyhtonProjects/>
      <HardwareProjects/>
      <Contact/>
    </div>
  )
}

export default App
