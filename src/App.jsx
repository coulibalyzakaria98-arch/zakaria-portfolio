import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Workflow from './components/Workflow'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Engagements from './components/Engagements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/themeProvider'

function AppContent() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
