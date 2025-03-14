import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function IdeaGenerator() {
  const [ideas, setIdeas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const generateIdeas = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a topic first');
      return;
    }

    setLoading(true);
    setError('');
    setIdeas(null);

    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: searchQuery.trim() })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to generate ideas');
      }

      console.log('Received ideas from API:', data);
      
      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid response format from server');
      }

      // Validate each idea has the required fields
      const validIdeas = data.filter(idea => 
        idea.ideaName && 
        idea.problem && 
        idea.targetAudience && 
        idea.solution && 
        idea.usp && 
        idea.marketPotential && 
        idea.scalability
      );

      if (validIdeas.length === 0) {
        throw new Error('No valid ideas were generated. Please try again.');
      }

      setIdeas(validIdeas);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to generate ideas. Please try again.');
      setIdeas(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Startup Idea Generation Format</h1>
      
      <div className="tool-section">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter a topic to generate startup ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md flex-grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading) {
                generateIdeas();
              }
            }}
          />
          <Button 
            onClick={generateIdeas}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Ideas"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-center text-red-600 mt-8 p-4 bg-red-50 rounded-md border border-red-200">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center text-gray-500 mt-8">
          Generating creative startup ideas using AI...
        </div>
      )}

      <div className="results-grid">
        {ideas && ideas.map((idea, index) => (
          <div key={index} className="result-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
              {idea.ideaName}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Problem to Solve</h4>
                <p className="text-gray-600 mt-1">{idea.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Target Audience</h4>
                <p className="text-gray-600 mt-1">{idea.targetAudience}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Proposed Solution</h4>
                <p className="text-gray-600 mt-1">{idea.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Unique Selling Point (USP)</h4>
                <p className="text-gray-600 mt-1">{idea.usp}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Market Potential</h4>
                <p className="text-gray-600 mt-1">{idea.marketPotential}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Scalability</h4>
                <p className="text-gray-600 mt-1">{idea.scalability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!error && !ideas && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Enter a topic above and click &quot;Generate Ideas&quot; to get AI-powered startup suggestions
        </div>
      )}
      
      {ideas && (
        <div className="text-center text-gray-400 text-xs mt-4">
          LLM can make mistakes. Check important info.
        </div>
      )}
    </div>
  );
}
