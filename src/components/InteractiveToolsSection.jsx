import { Link } from 'react-router-dom';
import './InteractiveToolsSection.css';

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
    },
    {
      name: "Fundraising",
      description: "Calculate funding needs and connect with investors",
      icon: "💸"
    }
  ];

  return (
    <section className="interactive-tools py-12 px-4" id="interactive-tools">
      <h2 className="text-3xl font-bold text-center mb-8">Interactive Tools</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <Link 
            to={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`} 
            key={index} 
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
