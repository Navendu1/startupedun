import { useState } from 'react';

export default function TextLearning() {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const textChapters = [
    {
      title: "Introduction to Startups",
      description: "What is a startup and key characteristics of successful startups",
      readTime: "15 min",
      thumbnail: "📚",
      content: `A startup is a company or project undertaken by entrepreneurs to develop and bring to market a unique product or service. This chapter covers:

      • Definition and characteristics of startups
      • Different types of startups
      • Key success factors
      • Common challenges faced by startups
      • The startup lifecycle`
    },
    {
      title: "Finding Your Business Idea",
      description: "Methods and techniques for startup idea generation",
      readTime: "20 min",
      thumbnail: "💡",
      content: `Learn how to generate and validate startup ideas:

      • Identifying market opportunities
      • Problem-solution fit
      • Idea validation techniques
      • Market size /n assessment
      • Competitive analysis basics`
    },
    {
      title: "Market Research Fundamentals",
      description: "Understanding your target market and competition",
      readTime: "25 min",
      thumbnail: "🔍",
      content: `Essential market research concepts:

      • Primary vs Secondary research
      • Target market identification
      • Customer segmentation
      • Competitor analysis
      • Market sizing and trends`
    },
    {
      title: "Business Model Development",
      description: "Creating a sustainable business model",
      readTime: "30 min",
      thumbnail: "📊",
      content: `Key aspects of business model development:

      • Business model canvas
      • Revenue streams
      • Cost structure
      • Value proposition
      • Customer relationships`
    },
    {
      title: "Financial Planning",
      description: "Basic financial concepts for startups",
      readTime: "35 min",
      thumbnail: "💰",
      content: `Essential financial planning topics:

      • Startup costs and expenses
      • Revenue projections
      • Cash flow management
      • Break-even analysis
      • Funding requirements`
    },
    {
      title: "Legal Basics",
      description: "Essential legal considerations for startups",
      readTime: "20 min",
      thumbnail: "⚖️",
      content: `Understanding legal requirements:

      • Business structure selection
      • Registration and licenses
      • Intellectual property protection
      • Basic contracts and agreements
      • Compliance requirements`
    },
    {
      title: "Building Your Team",
      description: "Team composition and hiring strategies",
      readTime: "25 min",
      thumbnail: "👥",
      content: `Learn about team building:

      • Core team roles
      • Hiring best practices
      • Company culture
      • Equity distribution
      • Team management basics`
    },
    {
      title: "Marketing Fundamentals",
      description: "Basic marketing strategies for startups",
      readTime: "30 min",
      thumbnail: "📣",
      content: `Marketing essentials:

      • Marketing strategy development
      • Digital marketing channels
      • Content marketing basics
      • Social media marketing
      • Customer acquisition strategies`
    },
    {
      title: "Fundraising Essentials",
      description: "Understanding startup funding options",
      readTime: "35 min",
      thumbnail: "🏦",
      content: `Fundraising fundamentals:

      • Types of funding
      • Funding stages
      • Pitch deck creation
      • Investor relations
      • Valuation basics`
    },
    {
      title: "Growth and Scaling",
      description: "Strategies for growing your startup",
      readTime: "25 min",
      thumbnail: "📈",
      content: `Growth strategies and considerations:

      • Growth metrics
      • Scaling operations
      • Customer retention
      • Market expansion
      • Strategic partnerships`
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Text-based Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {textChapters.map((chapter, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer bg-card"
            onClick={() => setSelectedChapter(chapter)}
          >
            <div className="text-4xl mb-4">{chapter.thumbnail}</div>
            <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{chapter.description}</p>
            <div className="text-sm text-gray-500">Read time: {chapter.readTime}</div>
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedChapter.title}</h2>
              <button 
                onClick={() => setSelectedChapter(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedChapter.description}</p>
            <div className="prose dark:prose-invert">
              {selectedChapter.content.split('\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-wrap">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
