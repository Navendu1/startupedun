export default function InteractiveToolsSection() {
  const tools = [
    {
      name: "Idea Generator",
      description: "Prompts and AI suggestions for startup ideas",
      icon: "💡"
    },
    {
      name: "Market Analysis Mockup",
      description: "Tools to input data and generate market reports",
      icon: "📊"
    },
    {
      name: "Slide Deck Creator",
      description: "Drag-and-drop slide builder with templates",
      icon: "📑"
    },
    {
      name: "Financial Mockup Tool",
      description: "Input financial data to generate balance sheets and forecasts",
      icon: "💰"
    }
  ];

  return (
    <section className="interactive-tools" id="interactive-tools">
      <h2>Interactive Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
