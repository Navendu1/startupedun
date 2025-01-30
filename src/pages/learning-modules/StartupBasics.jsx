import { useState } from 'react';

export default function StartupBasics() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  
  const chapters = [
    {
      title: "Introduction to Startups",
      description: "What is a startup and key characteristics of successful startups",
      readTime: "15 min",
      thumbnail: "📚",
      content: "A startup is a company or project undertaken by entrepreneurs to develop and bring to market a unique product or service. This chapter covers:\n\n• Definition and characteristics of startups\n• Different types of startups\n• Key success factors\n• Common challenges faced by startups\n• The startup lifecycle"
    },
    {
      title: "Finding Your Business Idea",
      description: "Methods and techniques for startup idea generation",
      readTime: "20 min",
      thumbnail: "💡",
      content: "Learn how to generate and validate startup ideas:\n\n• Identifying market opportunities\n• Problem-solution fit\n• Idea validation techniques\n• Market size assessment\n• Competitive analysis basics"
    },
    {
      title: "Market Research Fundamentals",
      description: "Understanding your target market and competition",
      readTime: "25 min",
      thumbnail: "🔍",
      content: "Essential market research concepts:\n\n• Primary vs Secondary research\n• Target market identification\n• Customer segmentation\n• Competitor analysis\n• Market sizing and trends"
    },
    {
      title: "Business Model Development",
      description: "Creating a sustainable business model",
      readTime: "30 min",
      thumbnail: "📊",
      content: "Key aspects of business model development:\n\n• Business model canvas\n• Revenue streams\n• Cost structure\n• Value proposition\n• Customer relationships"
    },
    {
      title: "Financial Planning",
      description: "Basic financial concepts for startups",
      readTime: "35 min",
      thumbnail: "💰",
      content: "Essential financial planning topics:\n\n• Startup costs and expenses\n• Revenue projections\n• Cash flow management\n• Break-even analysis\n• Funding requirements"
    },
    {
      title: "Legal Basics",
      description: "Essential legal considerations for startups",
      readTime: "20 min",
      thumbnail: "⚖️",
      content: "Understanding legal requirements:\n\n• Business structure selection\n• Registration and licenses\n• Intellectual property protection\n• Basic contracts and agreements\n• Compliance requirements"
    },
    {
      title: "Building Your Team",
      description: "Team composition and hiring strategies",
      readTime: "25 min",
      thumbnail: "👥",
      content: "Learn about team building:\n\n• Core team roles\n• Hiring best practices\n• Company culture\n• Equity distribution\n• Team management basics"
    },
    {
      title: "Marketing Fundamentals",
      description: "Basic marketing strategies for startups",
      readTime: "30 min",
      thumbnail: "📣",
      content: "Marketing essentials:\n\n• Marketing strategy development\n• Digital marketing channels\n• Content marketing basics\n• Social media marketing\n• Customer acquisition strategies"
    },
    {
      title: "Fundraising Essentials",
      description: "Understanding startup funding options",
      readTime: "35 min",
      thumbnail: "🏦",
      content: "Fundraising fundamentals:\n\n• Types of funding\n• Funding stages\n• Pitch deck creation\n• Investor relations\n• Valuation basics"
    },
    {
      title: "Growth and Scaling",
      description: "Strategies for growing your startup",
      readTime: "25 min",
      thumbnail: "📈",
      content: "Growth strategies and considerations:\n\n• Growth metrics\n• Scaling operations\n• Customer retention\n• Market expansion\n• Strategic partnerships"
    }
  ];
  return (
    <div className="flex">
      {/* Overview Section */}
      <div className="w-64 p-4 sticky top-0 h-screen overflow-y-auto border-r">
        <h3 className="text-lg font-semibold mb-4">Learning Chapters</h3>
        <ul className="space-y-2 text-sm">
          {chapters.map((chapter, index) => (
            <li key={index}>
              <button 
                onClick={() => setSelectedChapter(chapter)}
                className="hover:text-primary text-left w-full"
              >
                {chapter.thumbnail} {chapter.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">🚀 Startup Basics</h1>
        <div className="space-y-4">
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <div 
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedChapter(chapter)}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{chapter.thumbnail}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{chapter.description}</p>
                  <div className="text-sm text-gray-500">Read time: {chapter.readTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chapter Modal */}
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
      </div>
    </div>
  );
}
