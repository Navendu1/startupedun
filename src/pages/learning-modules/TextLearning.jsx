import { useState } from 'react';
import IntroductionToStartups from './chapters/IntroductionToStartups';
import FindingYourBusinessIdea from './chapters/FindingYourBusinessIdea';
import MarketResearchFundamentals from './chapters/MarketResearchFundamentals';
import BusinessModelDevelopment from './chapters/BusinessModelDevelopment';
import FinancialPlanning from './chapters/FinancialPlanning';
import LegalBasics from './chapters/LegalBasics';
import BuildingYourTeam from './chapters/BuildingYourTeam';
import MarketingFundamentals from './chapters/MarketingFundamentals';
import FundraisingEssentials from './chapters/FundraisingEssentials';
import GrowthAndScaling from './chapters/GrowthAndScaling';

export default function TextLearning() {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    { Component: IntroductionToStartups, id: 'intro' },
    { Component: FindingYourBusinessIdea, id: 'idea' },
    { Component: MarketResearchFundamentals, id: 'research' },
    { Component: BusinessModelDevelopment, id: 'business' },
    { Component: FinancialPlanning, id: 'finance' },
    { Component: LegalBasics, id: 'legal' },
    { Component: BuildingYourTeam, id: 'team' },
    { Component: MarketingFundamentals, id: 'marketing' },
    { Component: FundraisingEssentials, id: 'fundraising' },
    { Component: GrowthAndScaling, id: 'growth' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Text-based Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map(({ Component, id }) => (
          <div 
            key={id}
            className="border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-card hover:bg-accent"
            onClick={() => setSelectedChapter(id)}
          >
            <Component isPreview={true} />
          </div>
        ))}
      </div>

      {/* Content Modal */}
      {selectedChapter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedChapter(null)}
        >
          <div 
            className="bg-background rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {chapters.find(c => c.id === selectedChapter)?.Component({ isPreview: false })}
            <button 
              onClick={() => setSelectedChapter(null)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
