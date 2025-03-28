import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

const ANALYSIS_SECTIONS = [
  {
    title: "Market Research & Industry Trends",
    fields: ["trendAnalysis", "searchTrendInsights", "regionalDemand"]
  },
  {
    title: "Competitor Analysis",
    fields: ["competitorIdentification", "marketPositioning", "competitiveAdvantage"]
  },
  {
    title: "Customer & Demand Analysis",
    fields: ["targetAudience", "sentimentAnalysis", "marketSize"]
  },
  {
    title: "Financial & Revenue Projections",
    fields: ["revenueModel", "pricingStrategy", "investmentForecast"]
  },
  {
    title: "Go-To-Market Strategy Insights",
    fields: ["marketingChannels", "acquisitionCosts", "partnerships"]
  }
];

export default function MarketAnalysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const generateAnalysis = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter your business or market to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const response = await fetch('https://backend-delta-eight-78.vercel.app/api/analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          query: searchQuery.trim(),
          type: 'market-analysis', // Adding type to differentiate from idea generation
          sections: ANALYSIS_SECTIONS // Sending sections structure to help AI format response
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to generate market analysis');
      }

      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid response format from server');
      }

      // Extract first analysis result (assuming API returns array like IdeaGenerator)
      const analysisData = data[0];

      // Map the received data to our required format
      const validAnalysis = {
        marketResearch: {
          trendAnalysis: analysisData.trendAnalysis || analysisData.marketTrends || 'Analysis not available',
          searchTrendInsights: analysisData.searchTrends || analysisData.keywordInsights || 'Insights not available',
          regionalDemand: analysisData.regionalDemand || analysisData.marketDemand || 'Data not available'
        },
        competitorAnalysis: {
          competitorIdentification: analysisData.competitors || analysisData.competitorList || 'Analysis not available',
          marketPositioning: analysisData.positioning || analysisData.marketPosition || 'Analysis not available',
          competitiveAdvantage: analysisData.advantages || analysisData.uniqueAdvantages || 'Analysis not available'
        },
        customerAnalysis: {
          targetAudience: analysisData.audience || analysisData.targetMarket || 'Analysis not available',
          sentimentAnalysis: analysisData.sentiment || analysisData.marketSentiment || 'Analysis not available',
          marketSize: analysisData.marketSize || analysisData.totalMarket || 'Estimation not available'
        },
        financialProjections: {
          revenueModel: analysisData.revenue || analysisData.revenueStreams || 'Analysis not available',
          pricingStrategy: analysisData.pricing || analysisData.priceStrategy || 'Analysis not available',
          investmentForecast: analysisData.investment || analysisData.financialNeeds || 'Forecast not available'
        },
        goToMarket: {
          marketingChannels: analysisData.marketing || analysisData.channels || 'Recommendations not available',
          acquisitionCosts: analysisData.acquisition || analysisData.customerAcquisition || 'Estimates not available',
          partnerships: analysisData.partnerships || analysisData.strategicPartners || 'Suggestions not available'
        }
      };

      setAnalysis(validAnalysis);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to generate market analysis. Please try again.');
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-4">AI Market Analysis Tool</h1>
      <p className="text-gray-600 mb-8">Get comprehensive market insights powered by AI analysis</p>
      
      <div className="tool-section mb-8">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your business idea or market to analyze..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md flex-grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !loading) {
                generateAnalysis();
              }
            }}
          />
          <Button 
            onClick={generateAnalysis}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Market"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-center text-red-600 mt-8 p-4 bg-red-50 rounded-md border border-red-200">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center text-gray-500 mt-8 space-y-2">
          <div className="text-lg">Analyzing market data using AI...</div>
          <div className="text-sm">This may take a few moments to gather comprehensive insights.</div>
        </div>
      )}

      {analysis && (
        <div className="space-y-8">
          {/* Market Research Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Market Research & Industry Trends</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Trend Analysis</h3>
                <p className="text-gray-600 mt-1">{analysis.marketResearch.trendAnalysis}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Search Trend Insights</h3>
                <p className="text-gray-600 mt-1">{analysis.marketResearch.searchTrendInsights}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Regional Market Demand</h3>
                <p className="text-gray-600 mt-1">{analysis.marketResearch.regionalDemand}</p>
              </div>
            </div>
          </div>

          {/* Competitor Analysis Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Competitor Analysis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Competitor Identification</h3>
                <p className="text-gray-600 mt-1">{analysis.competitorAnalysis.competitorIdentification}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Market Positioning</h3>
                <p className="text-gray-600 mt-1">{analysis.competitorAnalysis.marketPositioning}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Competitive Advantage</h3>
                <p className="text-gray-600 mt-1">{analysis.competitorAnalysis.competitiveAdvantage}</p>
              </div>
            </div>
          </div>

          {/* Customer Analysis Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Customer & Demand Analysis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Target Audience</h3>
                <p className="text-gray-600 mt-1">{analysis.customerAnalysis.targetAudience}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Sentiment Analysis</h3>
                <p className="text-gray-600 mt-1">{analysis.customerAnalysis.sentimentAnalysis}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Market Size</h3>
                <p className="text-gray-600 mt-1">{analysis.customerAnalysis.marketSize}</p>
              </div>
            </div>
          </div>

          {/* Financial Projections Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Financial & Revenue Projections</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Revenue Model</h3>
                <p className="text-gray-600 mt-1">{analysis.financialProjections.revenueModel}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Pricing Strategy</h3>
                <p className="text-gray-600 mt-1">{analysis.financialProjections.pricingStrategy}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Investment Forecast</h3>
                <p className="text-gray-600 mt-1">{analysis.financialProjections.investmentForecast}</p>
              </div>
            </div>
          </div>

          {/* Go-To-Market Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Go-To-Market Strategy Insights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Marketing Channels</h3>
                <p className="text-gray-600 mt-1">{analysis.goToMarket.marketingChannels}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">User Acquisition Costs</h3>
                <p className="text-gray-600 mt-1">{analysis.goToMarket.acquisitionCosts}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Partnership Suggestions</h3>
                <p className="text-gray-600 mt-1">{analysis.goToMarket.partnerships}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!error && !analysis && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Enter your business or market details above to get AI-powered market analysis
        </div>
      )}
      
      {analysis && (
        <div className="text-center text-gray-400 text-xs mt-4">
          LLM can make mistakes. Check important info.
        </div>
      )}
    </div>
  );
}
