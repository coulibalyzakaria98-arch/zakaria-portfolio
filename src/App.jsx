import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'

function AppContent() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
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
