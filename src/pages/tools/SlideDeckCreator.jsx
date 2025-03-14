import { useState } from 'react';
import './SlideDeckCreator.css';
import { Button } from "../../components/ui/button";

const TEMPLATE_HINTS = {
  'pitch-deck': {
    title: 'Pitch Deck Tips',
    points: [
      'Include your startup name, vision, and target market',
      'Clearly explain the problem you\'re solving',
      'Highlight your unique value proposition',
      'Share key metrics and traction',
      'Describe your funding needs and use of funds'
    ]
  },
  'company-profile': {
    title: 'Company Profile Tips',
    points: [
      'Focus on company history and achievements',
      'Highlight your core products/services',
      'Showcase team expertise and leadership',
      'Include customer testimonials or case studies',
      'Present your company culture and values'
    ]
  }
};

const SLIDE_STRUCTURE = {
  'pitch-deck': [
    {
      id: 'title',
      name: 'Title Slide',
      fields: ['Startup Name', 'Tagline', 'Presenter Info']
    },
    {
      id: 'problem',
      name: 'Problem Statement',
      fields: ['Problem Description', 'Target Audience', 'Problem Insights']
    },
    {
      id: 'solution',
      name: 'Solution',
      fields: ['Solution Overview', 'USP', 'Key Benefits']
    },
    {
      id: 'market',
      name: 'Market Opportunity',
      fields: ['Market Size (TAM/SAM/SOM)', 'Industry Trends', 'Market Timing']
    },
    {
      id: 'product',
      name: 'Product/Service',
      fields: ['Product Description', 'Key Features', 'Benefits']
    },
    {
      id: 'business',
      name: 'Business Model',
      fields: ['Revenue Streams', 'Pricing Strategy', 'Monetization Plan']
    },
    {
      id: 'traction',
      name: 'Traction',
      fields: ['Key Metrics', 'Milestones', 'Social Proof']
    },
    {
      id: 'competition',
      name: 'Competition',
      fields: ['Competitor Analysis', 'Competitive Advantage', 'Market Position']
    },
    {
      id: 'strategy',
      name: 'Go-To-Market Strategy',
      fields: ['Acquisition Strategy', 'Marketing Approach', 'Growth Plan']
    },
    {
      id: 'financials',
      name: 'Financial Projections',
      fields: ['Revenue Forecast', 'Key Metrics', 'Break-even Analysis']
    },
    {
      id: 'funding',
      name: 'Funding Ask',
      fields: ['Funding Amount', 'Use of Funds', 'Funding History']
    },
    {
      id: 'team',
      name: 'Team',
      fields: ['Key Members', 'Experience', 'Capabilities']
    },
    {
      id: 'vision',
      name: 'Vision & Closing',
      fields: ['Long-term Vision', 'Call to Action', 'Contact Information']
    }
  ],
  'company-profile': [
    {
      id: 'title',
      name: 'Title Slide',
      fields: ['Company Name', 'Tagline', 'Overview']
    },
    {
      id: 'about',
      name: 'About Us',
      fields: ['Company Story', 'Mission', 'Values']
    },
    {
      id: 'offerings',
      name: 'Products/Services',
      fields: ['Main Offerings', 'Key Features', 'Benefits']
    },
    {
      id: 'market',
      name: 'Market Position',
      fields: ['Industry Context', 'Target Market', 'Unique Value']
    },
    {
      id: 'achievements',
      name: 'Achievements',
      fields: ['Key Milestones', 'Recognition', 'Success Stories']
    },
    {
      id: 'team',
      name: 'Team',
      fields: ['Leadership', 'Expertise', 'Culture']
    },
    {
      id: 'closing',
      name: 'Contact & Next Steps',
      fields: ['Contact Details', 'Call to Action', 'Follow-up Info']
    }
  ]
};

const LoadingSpinner = () => (
  <div className="loading-spinner"></div>
);

export default function SlideDeckCreator() {
  const [deckType, setDeckType] = useState('pitch-deck');
  const [slides, setSlides] = useState(null);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');

  const generateSlides = async () => {
    if (!topic.trim()) {
      setError('Please enter details about your company/startup');
      return;
    }

    setLoading(true);
    setError('');
    setSlides(null);

    try {
      const response = await fetch('http://localhost:5000/api/slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          query: topic.trim(),
          type: deckType,
          structure: SLIDE_STRUCTURE[deckType]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to generate slides');
      }

      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid response format from server');
      }

      const validSlides = data.filter(slide => 
        slide.title && 
        slide.content && 
        slide.sections &&
        Array.isArray(slide.sections)
      );

      if (validSlides.length === 0) {
        throw new Error('No valid slides were generated. Please try again.');
      }

      setSlides(validSlides);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to generate slides. Please try again.');
      setSlides(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDeckTypeChange = (type) => {
    setDeckType(type);
    setSlides(null); // Clear existing slides when switching template
    setError('');
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-4">AI Slide Deck Creator</h1>
      
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Select Presentation Type</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(SLIDE_STRUCTURE).map(([type, structure]) => (
            <div 
              key={type} 
              className={`template-card ${deckType === type ? 'selected' : ''}`}
              onClick={() => handleDeckTypeChange(type)}
            >
              <h3 className="font-semibold mb-2 capitalize">
                {type.split('-').join(' ')}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                {structure.map(slide => (
                  <div key={slide.id}>{slide.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="template-hints">
          <h4>{TEMPLATE_HINTS[deckType].title}</h4>
          <ul>
            {TEMPLATE_HINTS[deckType].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="tool-section mb-8">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder={deckType === 'pitch-deck' 
              ? "Enter your startup details (name, industry, value proposition)..." 
              : "Enter your company details (name, business focus, key offerings)..."
            }
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-2 border rounded-md flex-grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading) {
                generateSlides();
              }
            }}
          />
          <Button 
            onClick={generateSlides}
            disabled={loading}
            className="generate-button"
          >
            {loading ? (
              <>
                <LoadingSpinner />
                Generating...
              </>
            ) : "Generate Deck"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-center text-red-600 mt-8 p-4 bg-red-50 rounded-md border border-red-200">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center mt-8 space-y-4">
          <div className="text-gray-600 animate-pulse">
            Creating your {deckType === 'pitch-deck' ? 'pitch deck' : 'company profile'} using AI...
          </div>
          <div className="text-sm text-gray-500">
            This may take a few moments. We&apos;re crafting engaging content for your presentation.
          </div>
        </div>
      )}

      <div className="slide-preview-section">
        {slides && slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide-card ${index === 0 ? 'title-slide' : `${SLIDE_STRUCTURE[deckType][index]?.id}-slide`}`}
          >
            <div className="slide-content">
              <div className="slide-header">
                <h3>{slide.title}</h3>
              </div>
              
              <div className="slide-body">
                {slide.content && (
                  <div className="slide-section">
                    <p className="slide-text">{slide.content}</p>
                  </div>
                )}

                {slide.sections?.map((section, i) => (
                  <div key={i} className="slide-section">
                    <h4>{section.title}</h4>
                    <ul className="slide-bullets">
                      {section.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!error && !slides && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Enter your details above and click &quot;Generate Deck&quot; to create an AI-powered presentation
        </div>
      )}
      
      {slides && (
        <div className="text-center text-gray-400 text-xs mt-4">
          LLM can make mistakes. Check important info.
        </div>
      )}
    </div>
  );
}
