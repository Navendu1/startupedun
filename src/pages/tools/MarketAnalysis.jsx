import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function MarketAnalysis() {
  const [formData, setFormData] = useState({
    industry: '',
    targetMarket: '',
    competitors: '',
    marketSize: '',
    growthRate: '',
    trends: ''
  });
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateReport = async () => {
    setLoading(true);
    // Simulated API call - replace with actual analysis logic
    setTimeout(() => {
      const mockReport = {
        summary: {
          marketSize: "$50B",
          growthRate: "15% YoY",
          competitiveLandscape: "Moderately Competitive",
          marketMaturity: "Growth Phase"
        },
        opportunities: [
          "Rising demand in emerging markets",
          "Technological advancement creating new segments",
          "Shift in consumer behavior towards digital solutions"
        ],
        threats: [
          "Increasing regulatory pressure",
          "New market entrants",
          "Economic uncertainty"
        ],
        recommendations: [
          "Focus on digital transformation",
          "Expand into emerging markets",
          "Invest in R&D for innovation"
        ]
      };
      setReport(mockReport);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Market Analysis Tool</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="tool-section">
          <h2 className="text-xl font-semibold mb-4">Input Market Data</h2>
          <div className="tool-form">
            <div className="form-group">
              <label>Industry</label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                placeholder="e.g., Technology, Healthcare"
              />
            </div>
            <div className="form-group">
              <label>Target Market</label>
              <input
                type="text"
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                placeholder="e.g., Small Businesses, Young Professionals"
              />
            </div>
            <div className="form-group">
              <label>Key Competitors</label>
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                placeholder="List main competitors"
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Estimated Market Size</label>
              <input
                type="text"
                name="marketSize"
                value={formData.marketSize}
                onChange={handleInputChange}
                placeholder="e.g., $1M, $1B"
              />
            </div>
            <div className="form-group">
              <label>Growth Rate (%)</label>
              <input
                type="text"
                name="growthRate"
                value={formData.growthRate}
                onChange={handleInputChange}
                placeholder="e.g., 5, 10, 15"
              />
            </div>
            <div className="form-group">
              <label>Market Trends</label>
              <textarea
                name="trends"
                value={formData.trends}
                onChange={handleInputChange}
                placeholder="Describe current market trends"
                rows="3"
              />
            </div>
            <Button
              onClick={generateReport}
              disabled={loading}
              className="w-full"
            >
              {loading ? "Generating Report..." : "Generate Market Analysis"}
            </Button>
          </div>
        </div>

        <div className="tool-section">
          <h2 className="text-xl font-semibold mb-4">Market Analysis Report</h2>
          {report ? (
            <div className="results-section">
              <div className="results-grid">
                {Object.entries(report.summary).map(([key, value]) => (
                  <div key={key} className="result-card">
                    <div className="metric-label">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="metric-value">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Market Opportunities</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {report.opportunities.map((item, index) => (
                    <li key={index} className="text-green-700">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Market Threats</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {report.threats.map((item, index) => (
                    <li key={index} className="text-red-700">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {report.recommendations.map((item, index) => (
                    <li key={index} className="text-blue-700">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              Fill in the form and click &quot;Generate Market Analysis&quot; to create a report
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
