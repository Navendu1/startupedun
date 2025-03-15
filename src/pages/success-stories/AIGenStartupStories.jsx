import { useState } from 'react';
import { Button } from "../../components/ui/button";
import './success-stories.css';

export default function AIGenStartupStories() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');

  // Retry mechanism for failed requests
  const retryFetch = async (url, options, maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(url, options);
        return response;
      } catch (error) {
        const isLastAttempt = attempt === maxRetries;
        const shouldRetry = error.name === 'TypeError' || error.name === 'AbortError';

        if (!shouldRetry || isLastAttempt) throw error;

        const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  };

  const generateStory = async () => {
    if (!companyName.trim()) {
      setError('Please enter a company name first');
      return;
    }

    setLoading(true);
    setError('');
    setStory(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout to match backend

    try {
      const response = await retryFetch(
        'http://localhost:5000/api/Aigenstartupstories',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query: companyName.trim() }),
          signal: controller.signal
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases from backend
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again in a moment.');
        }
        throw new Error(data.error || 'Failed to generate story');
      }

      if (!data || typeof data !== 'object') {
        throw new Error('Invalid response format from server');
      }

      // Validate story has all required sections
      const requiredSections = [
        'foundingStory',
        'marketResearch',
        'businessModel',
        'productService',
        'challenges',
        'marketing',
        'growth',
        'funding',
        'testimonials',
        'pivots',
        'futureVision',
        'keyTakeaways'
      ];

      const missingFields = requiredSections.filter(section => !data[section]);
      if (missingFields.length > 0) {
        throw new Error(`Story is missing required sections: ${missingFields.join(', ')}`);
      }

      setStory(data);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.name === 'AbortError' 
        ? 'Request timed out. Please try again.'
        : error.message || 'Failed to generate story. Please try again.';
      setError(errorMessage);
      setStory(null);
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Generate AI Startup Success Story</h1>
      
      <div className="tool-section">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your startup name..."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-2 border rounded-md flex-grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading) {
                generateStory();
              }
            }}
          />
          <Button 
            onClick={generateStory}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Story"}
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
          Generating your startup success story using AI...
        </div>
      )}

      {story && (
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">1. Founding Story & Vision</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">The Inspiration</h3>
                <p className="text-gray-600">{story.foundingStory.inspiration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Problem Statement</h3>
                <p className="text-gray-600">{story.foundingStory.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Mission & Vision</h3>
                <p className="text-gray-600">{story.foundingStory.mission}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">2. Market Research & Opportunity</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Market Gap Analysis</h3>
                <p className="text-gray-600">{story.marketResearch.gap}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Target Audience</h3>
                <p className="text-gray-600">{story.marketResearch.audience}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Competitive Advantage</h3>
                <p className="text-gray-600">{story.marketResearch.differentiator}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">3. Business Model & Revenue</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Revenue Model</h3>
                <p className="text-gray-600">{story.businessModel.revenueModel}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Pricing Strategy</h3>
                <p className="text-gray-600">{story.businessModel.pricing}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Sustainability Plan</h3>
                <p className="text-gray-600">{story.businessModel.sustainability}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">4. Product/Service Development</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Offering Overview</h3>
                <p className="text-gray-600">{story.productService.offering}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Development Process</h3>
                <p className="text-gray-600">{story.productService.development}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Key Innovations</h3>
                <p className="text-gray-600">{story.productService.innovations}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">5. Early-Stage Challenges</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Key Obstacles</h3>
                <p className="text-gray-600">{story.challenges.obstacles}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Solutions & Strategies</h3>
                <p className="text-gray-600">{story.challenges.solutions}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">6. Marketing & Customer Acquisition</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Initial Marketing Strategy</h3>
                <p className="text-gray-600">{story.marketing.initialStrategy}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Customer Acquisition</h3>
                <p className="text-gray-600">{story.marketing.acquisition}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Successful Channels</h3>
                <p className="text-gray-600">{story.marketing.channels}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">7. Growth & Scaling Strategy</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Scaling Journey</h3>
                <p className="text-gray-600">{story.growth.scaling}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Operational Strategies</h3>
                <p className="text-gray-600">{story.growth.operations}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Market Expansion</h3>
                <p className="text-gray-600">{story.growth.expansion}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Funding & Financial Journey</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Initial Funding</h3>
                <p className="text-gray-600">{story.funding.initial}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Revenue Milestones</h3>
                <p className="text-gray-600">{story.funding.milestones}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Investment Rounds</h3>
                <p className="text-gray-600">{story.funding.investments}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">9. Customer Success & Testimonials</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Customer Feedback</h3>
                <p className="text-gray-600">{story.testimonials.feedback}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Impact Stories</h3>
                <p className="text-gray-600">{story.testimonials.impact}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">10. Challenges & Pivots</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Business Model Pivots</h3>
                <p className="text-gray-600">{story.pivots.modelChanges}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Key Lessons</h3>
                <p className="text-gray-600">{story.pivots.lessons}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">11. Future Roadmap & Vision</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">3-5 Year Vision</h3>
                <p className="text-gray-600">{story.futureVision.shortTerm}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Expansion Plans</h3>
                <p className="text-gray-600">{story.futureVision.expansion}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Ultimate Goals</h3>
                <p className="text-gray-600">{story.futureVision.goals}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">12. Key Takeaways & Lessons</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Advice for Entrepreneurs</h3>
                <p className="text-gray-600">{story.keyTakeaways.advice}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Success Factors</h3>
                <p className="text-gray-600">{story.keyTakeaways.factors}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {!error && !story && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Enter your startup name above and click &quot;Generate Story&quot; to create an AI-powered success story
        </div>
      )}
      
      {story && (
        <div className="text-center text-gray-400 text-xs mt-4">
          This is an AI-generated story template. The content is fictional and for inspiration only.
        </div>
      )}
    </div>
  );
}
