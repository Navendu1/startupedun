import { Link } from 'react-router-dom';

export default function LearningModulesSection() {
  const modules = [
    {
      title: "📚 Text-based Learning",
      topics: [
        "10 chapters on startup basics",
        "Structured content",
        "Step-by-step guides"
      ],
      link: "/text-learning"
    },
    {
      title: "🎥 Video-based Learning",
      topics: [
        "Curated video courses",
        "Expert presentations",
        "Startup tutorials"
      ],
      link: "/video-learning"
    },
    {
      title: "💡 Idea Generation & Validation",
      topics: [
        "Ideation techniques",
        "Validation frameworks",
        "Tools for brainstorming"
      ],
      link: "/idea-generation"
    },
    {
      title: "🔍 Market Research",
      topics: [
        "Primary and secondary research",
        "Market sizing",
        "Competitive analysis"
      ],
      link: "/market-research"
    },
    {
      title: "📊 Building a Business Model",
      topics: [
        "Business Model Canvas",
        "Revenue models",
        "Customer segmentation"
      ],
      link: "/business-model"
    },
    {
      title: "📈 Creating a Pitch Deck",
      topics: [
        "Slide templates",
        "Example decks",
        "Best practices"
      ],
      link: "/pitch-deck"
    },
    {
      title: "💰 Financial Modeling",
      topics: [
        "Budgeting",
        "Revenue forecasting",
        "Interactive tools"
      ],
      link: "/financial-modeling"
    },
    {
      title: "🤝 Fundraising",
      topics: [
        "Types of funding",
        "Pitching tips",
        "Networking strategies"
      ],
      link: "/fundraising"
    }
  ];

  return (
    <section className="learning-modules" id="learning-modules">
      <h2>Learning Modules</h2>
      <div className="modules-grid">
        {modules.map((module, index) => (
          <Link
            key={index}
            to={module.link}
            className="module-card hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
            <ul className="space-y-1">
              {module.topics.map((topic, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400">{topic}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
