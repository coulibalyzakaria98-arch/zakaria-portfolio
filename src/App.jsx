import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/themeProvider'
import HomePage from './pages/HomePage'
import WriteupsPage from './pages/WriteupsPage'
import BlogPage from './pages/BlogPage'
import NotesPage from './pages/NotesPage'
import CompetitionsPage from './pages/CompetitionsPage'
import ProgressPage from './pages/ProgressPage'
import CertificationPage from './pages/CertificationPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import CVPage from './pages/CVPage'
import NotFoundPage from './pages/NotFoundPage'

function AppContent() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writeups" element={<WriteupsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/certifications" element={<CertificationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
