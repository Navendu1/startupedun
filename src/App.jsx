import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import NavigationMenu from './components/NavigationMenu'
import Footer from './components/Footer'
import OverviewSection from './components/OverviewSection'
import QuickLinksSection from './components/QuickLinksSection'
import SuccessStoriesSection from './components/SuccessStoriesSection'
import LearningModulesSection from './components/LearningModulesSection'
import InteractiveToolsSection from './components/InteractiveToolsSection'
import './App.css'

import StartupBasics from './pages/learning-modules/StartupBasics'
import IdeaGeneration from './pages/learning-modules/IdeaGeneration'
import MarketResearch from './pages/learning-modules/MarketResearch'
import BusinessModel from './pages/learning-modules/BusinessModel'
import PitchDeck from './pages/learning-modules/PitchDeck'
import FinancialModeling from './pages/learning-modules/FinancialModeling'
import Fundraising from './pages/learning-modules/Fundraising'
import VideoLearning from './pages/learning-modules/VideoLearning'
import TextLearning from './pages/learning-modules/TextLearning'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <main className="min-h-screen w-full bg-background text-foreground">
          <NavigationMenu />
          <div className="max-w-7xl mx-auto space-y-8 p-8">
              <Routes>
              <Route path="/" element={
                <>
                  <OverviewSection />
                  <QuickLinksSection />
                  <LearningModulesSection />
                  <InteractiveToolsSection />
                  <SuccessStoriesSection />
                </>
              } />
              <Route path="/startup-basics" element={<StartupBasics />} />
              <Route path="/idea-generation" element={<IdeaGeneration />} />
              <Route path="/market-research" element={<MarketResearch />} />
              <Route path="/business-model" element={<BusinessModel />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
              <Route path="/financial-modeling" element={<FinancialModeling />} />
              <Route path="/fundraising" element={<Fundraising />} />
              <Route path="/video-learning" element={<VideoLearning />} />
              <Route path="/text-learning" element={<TextLearning />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
