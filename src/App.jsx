import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import './App.css';
import './global.css';
import NavigationMenu from "./components/NavigationMenu";
import OverviewSection from "./components/OverviewSection";
import InteractiveToolsSection from "./components/InteractiveToolsSection";
import LearningModulesSection from "./components/LearningModulesSection";
import QuickLinksSection from "./components/QuickLinksSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import Footer from "./components/Footer";

// Page Imports
import IdeaGenerator from "./pages/tools/IdeaGenerator";
import MarketAnalysis from "./pages/tools/MarketAnalysis";
import SlideDeckCreator from "./pages/tools/SlideDeckCreator";
import FinancialMockup from "./pages/tools/FinancialMockup";
import Fundraising from "./pages/tools/Fundraising";
import SuccessStories from "./pages/success-stories/SuccessStories";

// Learning Module Imports
import StartupBasics from "./pages/learning-modules/StartupBasics";
import IdeaGeneration from "./pages/learning-modules/IdeaGeneration";
import MarketResearch from "./pages/learning-modules/MarketResearch";
import BusinessModel from "./pages/learning-modules/BusinessModel";
import PitchDeck from "./pages/learning-modules/PitchDeck";
import FinancialModeling from "./pages/learning-modules/FinancialModeling";
import LearningFundraising from "./pages/learning-modules/Fundraising";
import TextLearning from "./pages/learning-modules/TextLearning";
import VideoLearning from "./pages/learning-modules/VideoLearning";

// Chapter Imports
import BuildingYourTeam from "./pages/learning-modules/chapters/BuildingYourTeam";
import BusinessModelDevelopment from "./pages/learning-modules/chapters/BusinessModelDevelopment";
import FinancialPlanning from "./pages/learning-modules/chapters/FinancialPlanning";
import FindingYourBusinessIdea from "./pages/learning-modules/chapters/FindingYourBusinessIdea";
import FundraisingEssentials from "./pages/learning-modules/chapters/FundraisingEssentials";
import GrowthAndScaling from "./pages/learning-modules/chapters/GrowthAndScaling";
import IntroductionToStartups from "./pages/learning-modules/chapters/IntroductionToStartups";
import LegalBasics from "./pages/learning-modules/chapters/LegalBasics";
import MarketingFundamentals from "./pages/learning-modules/chapters/MarketingFundamentals";
import MarketResearchFundamentals from "./pages/learning-modules/chapters/MarketResearchFundamentals";

function Home() {
  return (
    <>
      <OverviewSection />
      <LearningModulesSection />
      <InteractiveToolsSection />
      <SuccessStoriesSection />
      <QuickLinksSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          <NavigationMenu />
          <main className="app-container py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools/idea-generator" element={<IdeaGenerator />} />
              <Route path="/tools/market-analysis-mockup" element={<MarketAnalysis />} />
              <Route path="/tools/slide-deck-creator" element={<SlideDeckCreator />} />
              <Route path="/tools/financial-mockup-tool" element={<FinancialMockup />} />
              <Route path="/tools/fundraising" element={<Fundraising />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              
              {/* Learning Module Routes */}
              <Route path="/learning-modules/startup-basics" element={<StartupBasics />} />
              <Route path="/learning-modules/idea-generation" element={<IdeaGeneration />} />
              <Route path="/learning-modules/market-research" element={<MarketResearch />} />
              <Route path="/learning-modules/business-model" element={<BusinessModel />} />
              <Route path="/learning-modules/pitch-deck" element={<PitchDeck />} />
              <Route path="/learning-modules/financial-modeling" element={<FinancialModeling />} />
              <Route path="/learning-modules/fundraising" element={<LearningFundraising />} />
              <Route path="/learning-modules/text-learning" element={<TextLearning />} />
              <Route path="/learning-modules/video-learning" element={<VideoLearning />} />
              
              {/* Chapter Routes */}
              <Route path="/learning-modules/chapters/building-your-team" element={<BuildingYourTeam />} />
              <Route path="/learning-modules/chapters/business-model-development" element={<BusinessModelDevelopment />} />
              <Route path="/learning-modules/chapters/financial-planning" element={<FinancialPlanning />} />
              <Route path="/learning-modules/chapters/finding-your-business-idea" element={<FindingYourBusinessIdea />} />
              <Route path="/learning-modules/chapters/fundraising-essentials" element={<FundraisingEssentials />} />
              <Route path="/learning-modules/chapters/growth-and-scaling" element={<GrowthAndScaling />} />
              <Route path="/learning-modules/chapters/introduction-to-startups" element={<IntroductionToStartups />} />
              <Route path="/learning-modules/chapters/legal-basics" element={<LegalBasics />} />
              <Route path="/learning-modules/chapters/marketing-fundamentals" element={<MarketingFundamentals />} />
              <Route path="/learning-modules/chapters/market-research-fundamentals" element={<MarketResearchFundamentals />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
