import { ThemeProvider } from './components/theme-provider'
import NavigationMenu from './components/NavigationMenu'
import Footer from './components/Footer'
import OverviewSection from './components/OverviewSection'
import QuickLinksSection from './components/QuickLinksSection'
import SuccessStoriesSection from './components/SuccessStoriesSection'
import LearningModulesSection from './components/LearningModulesSection'
import InteractiveToolsSection from './components/InteractiveToolsSection'
import { ModeToggle } from './components/mode-toggle'
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen w-full bg-background text-foreground">
        <NavigationMenu />
        <div className="max-w-7xl mx-auto space-y-8 p-8">
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <OverviewSection />
          <QuickLinksSection />
          <LearningModulesSection />
          <InteractiveToolsSection />
          <SuccessStoriesSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App
