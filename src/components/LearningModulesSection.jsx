export default function LearningModulesSection() {
  const modules = [
    {
      title: "Startup Basics",
      topics: [
        "Introduction to startups",
        "Types of startups",
        "Case studies"
      ]
    },
    {
      title: "Idea Generation & Validation",
      topics: [
        "Ideation techniques",
        "Validation frameworks",
        "Tools for brainstorming"
      ]
    },
    {
      title: "Market Research",
      topics: [
        "Primary and secondary research",
        "Market sizing",
        "Competitive analysis"
      ]
    },
    {
      title: "Building a Business Model",
      topics: [
        "Business Model Canvas",
        "Revenue models",
        "Customer segmentation"
      ]
    },
    {
      title: "Creating a Pitch Deck",
      topics: [
        "Slide templates",
        "Example decks",
        "Best practices"
      ]
    },
    {
      title: "Financial Modeling",
      topics: [
        "Budgeting",
        "Revenue forecasting",
        "Interactive tools"
      ]
    },
    {
      title: "Fundraising",
      topics: [
        "Types of funding",
        "Pitching tips",
        "Networking strategies"
      ]
    }
  ];

  return (
    <section className="learning-modules" id="learning-modules">
      <h2>Learning Modules</h2>
      <div className="modules-grid">
        {modules.map((module, index) => (
          <div key={index} className="module-card">
            <h3>{module.title}</h3>
            <ul>
              {module.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
