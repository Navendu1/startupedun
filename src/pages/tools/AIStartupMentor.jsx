import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function AIStartupMentor() {
  const [mentorResponse, setMentorResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');

  const getMentorAdvice = async () => {
    if (!question.trim()) {
      setError('Please enter your question first');
      return;
    }

    setLoading(true);
    setError('');
    setMentorResponse(null);

    try {
      const response = await fetch('http://localhost:5000/api/mentor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: question.trim() })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to get mentor advice');
      }

      console.log('Received advice from API:', data);
      
      if (!data || typeof data !== 'object' || !data.advice) {
        throw new Error('Invalid response format from server');
      }

      setMentorResponse(data);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to get mentor advice. Please try again.');
      setMentorResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">AI Startup Mentor</h1>
      
      <div className="tool-section">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Ask your startup-related question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="p-2 border rounded-md flex-grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading) {
                getMentorAdvice();
              }
            }}
          />
          <Button 
            onClick={getMentorAdvice}
            disabled={loading}
          >
            {loading ? "Getting Advice..." : "Ask Mentor"}
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
          Consulting AI mentor for personalized advice...
        </div>
      )}

      {mentorResponse && (
        <div className="result-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-blue-800 border-b pb-2">Mentor Advice</h4>
              <p className="text-gray-700 mt-3">{mentorResponse.advice}</p>
            </div>

            {mentorResponse.actionItems && mentorResponse.actionItems.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-blue-800 border-b pb-2">Action Items</h4>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  {mentorResponse.actionItems.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {mentorResponse.resources && mentorResponse.resources.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-blue-800 border-b pb-2">Recommended Resources</h4>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  {mentorResponse.resources.map((resource, index) => (
                    <li key={index} className="mb-2">{resource}</li>
                  ))}
                </ul>
              </div>
            )}

            {mentorResponse.nextSteps && mentorResponse.nextSteps.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-blue-800 border-b pb-2">Next Steps</h4>
                <ul className="list-disc list-inside mt-3 text-gray-700">
                  {mentorResponse.nextSteps.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {!error && !mentorResponse && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Ask any startup-related question to get personalized advice from the AI mentor
        </div>
      )}
      
      {mentorResponse && (
        <div className="text-center text-gray-400 text-xs mt-4">
          AI-generated advice. Use critical thinking and consult professionals when needed.
        </div>
      )}
    </div>
  );
}
