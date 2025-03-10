import { Link } from 'react-router-dom';

export default function LearningModulesSection() {
  const modules = [
    {
      title: "Text Learning",
      description: "Text-based learning resources and materials.",
      path: "/learning-modules/text-learning",
      icon: "📚"
    },
    {
      title: "Video Learning",
      description: "Video tutorials and educational content.",
      path: "/learning-modules/video-learning",
      icon: "🎥"
    },
    {
      title: "Startup Basics",
      description: "Introduction to startups, types, and case studies.",
      path: "/learning-modules/startup-basics",
      icon: "🚀"
    },
    {
      title: "Idea Generation",
      description: "Ideation techniques and validation frameworks.",
      path: "/learning-modules/idea-generation",
      icon: "💡"
    },
    {
      title: "Market Research",
      description: "Primary/secondary research and competitive analysis.",
      path: "/learning-modules/market-research",
      icon: "🔍"
    },
    {
      title: "Business Model",
      description: "Business Model Canvas and revenue models.",
      path: "/learning-modules/business-model",
      icon: "📊"
    },
    {
      title: "Pitch Deck",
      description: "Creating effective pitch decks and presentations.",
      path: "/learning-modules/pitch-deck",
      icon: "📑"
    },
    {
      title: "Financial Modeling",
      description: "Budgeting, forecasting, and financial planning.",
      path: "/learning-modules/financial-modeling",
      icon: "💰"
    },
    {
      title: "Fundraising",
      description: "Funding types, pitching tips, and networking.",
      path: "/learning-modules/fundraising",
      icon: "🏦"
    }
  
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={index}
              to={module.path}
              className="block p-6 border rounded-lg hover:shadow-md transition-shadow bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{module.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
