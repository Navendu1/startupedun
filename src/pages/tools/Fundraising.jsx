import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function Fundraising() {
  const [activeSection, setActiveSection] = useState('calculator');
  const [fundingData, setFundingData] = useState({
    current_valuation: '',
    funding_needed: '',
    equity_offered: '',
    runway_months: '',
    monthly_burn: '',
    growth_rate: ''
  });
  const [calculations, setCalculations] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFundingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFunding = () => {
    setLoading(true);
    // Simulated API call - replace with actual calculations
    setTimeout(() => {
      const mockCalculations = {
        dilution: (parseFloat(fundingData.equity_offered) || 0) + '%',
        post_money_valuation: (parseFloat(fundingData.current_valuation) || 0) / (1 - (parseFloat(fundingData.equity_offered) || 0) / 100),
        share_price: ((parseFloat(fundingData.current_valuation) || 0) / 1000000).toFixed(2),
        runway_extension: (parseFloat(fundingData.funding_needed) || 0) / (parseFloat(fundingData.monthly_burn) || 1),
        suggested_investors: [
          {
            type: "Seed VC",
            ticket_size: "$250K - $1M",
            focus: "Early-stage startups",
            stage_fit: "High"
          },
          {
            type: "Angel Investors",
            ticket_size: "$50K - $250K",
            focus: "Industry-specific expertise",
            stage_fit: "High"
          },
          {
            type: "Micro VC",
            ticket_size: "$100K - $500K",
            focus: "Technology startups",
            stage_fit: "Medium"
          }
        ]
      };
      setCalculations(mockCalculations);
      setLoading(false);
    }, 1500);
  };

  const resources = [
    {
      title: "Pitch Deck Template",
      description: "Standard pitch deck structure with key sections and examples",
      type: "Template"
    },
    {
      title: "Valuation Guide",
      description: "Methods and factors for startup valuation",
      type: "Guide"
    },
    {
      title: "Term Sheet Basics",
      description: "Understanding key terms and conditions",
      type: "Guide"
    },
    {
      title: "Due Diligence Checklist",
      description: "Prepare for investor due diligence",
      type: "Checklist"
    }
  ];

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Fundraising Tools</h1>

      <div className="flex gap-4 mb-8">
        {['calculator', 'resources', 'matching'].map((section) => (
          <Button
            key={section}
            variant={activeSection === section ? 'default' : 'outline'}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {activeSection === 'calculator' && (
          <>
            <div className="tool-section">
              <h2 className="text-xl font-semibold mb-4">Funding Calculator</h2>
              <div className="tool-form">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label>Current Valuation</label>
                    <input
                      type="number"
                      name="current_valuation"
                      value={fundingData.current_valuation}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Funding Needed</label>
                    <input
                      type="number"
                      name="funding_needed"
                      value={fundingData.funding_needed}
                      onChange={handleInputChange}
                      placeholder="e.g., 500000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Equity Offered (%)</label>
                    <input
                      type="number"
                      name="equity_offered"
                      value={fundingData.equity_offered}
                      onChange={handleInputChange}
                      placeholder="e.g., 20"
                    />
                  </div>
                  <div className="form-group">
                    <label>Monthly Burn Rate</label>
                    <input
                      type="number"
                      name="monthly_burn"
                      value={fundingData.monthly_burn}
                      onChange={handleInputChange}
                      placeholder="e.g., 50000"
                    />
                  </div>
                </div>
                <Button
                  onClick={calculateFunding}
                  disabled={loading}
                  className="w-full mt-4"
                >
                  {loading ? "Calculating..." : "Calculate"}
                </Button>
              </div>
            </div>

            {calculations && (
              <div className="tool-section">
                <h2 className="text-xl font-semibold mb-4">Results</h2>
                <div className="results-grid">
                  <div className="result-card card-highlight">
                    <div className="metric-label">Dilution</div>
                    <div className="metric-value">{calculations.dilution}</div>
                  </div>
                  <div className="result-card card-highlight">
                    <div className="metric-label">Post-Money Valuation</div>
                    <div className="metric-value">${calculations.post_money_valuation.toLocaleString()}</div>
                  </div>
                  <div className="result-card card-success">
                    <div className="metric-label">Share Price</div>
                    <div className="metric-value">${calculations.share_price}/share</div>
                  </div>
                  <div className="result-card card-success">
                    <div className="metric-label">Runway Extension</div>
                    <div className="metric-value">{calculations.runway_extension.toFixed(1)} months</div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {activeSection === 'resources' && (
          <div className="md:col-span-2">
            <div className="tool-section">
              <h2 className="text-xl font-semibold mb-4">Fundraising Resources</h2>
              <div className="results-grid">
                {resources.map((resource, index) => (
                  <div key={index} className="result-card">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{resource.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Button variant="outline">Access Resource</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'matching' && calculations?.suggested_investors && (
          <div className="md:col-span-2">
            <div className="tool-section">
              <h2 className="text-xl font-semibold mb-4">Suggested Investors</h2>
              <div className="results-grid">
                {calculations.suggested_investors.map((investor, index) => (
                  <div key={index} className="result-card">
                    <h3 className="text-lg font-semibold mb-2">{investor.type}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="metric-label">Ticket Size:</span>
                        <span className="ml-2">{investor.ticket_size}</span>
                      </div>
                      <div>
                        <span className="metric-label">Focus:</span>
                        <span className="ml-2">{investor.focus}</span>
                      </div>
                      <div>
                        <span className="metric-label">Stage Fit:</span>
                        <span className={`ml-2 ${
                          investor.stage_fit === 'High' 
                            ? 'text-green-600' 
                            : 'text-yellow-600'
                        }`}>
                          {investor.stage_fit}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">View Profile</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
