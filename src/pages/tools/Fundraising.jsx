import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function Fundraising() {
  const [activeSection, setActiveSection] = useState('matching');
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
  const [investorSearchData, setInvestorSearchData] = useState({
    industry: '',
    customIndustry: '',
    stage: '',
    minInvestment: '',
    maxInvestment: '',
    businessDescription: ''
  });
  const [investors, setInvestors] = useState(null);
  const [searchError, setSearchError] = useState('');

  const industries = [
    'AI/ML', 'EdTech', 'FinTech', 'HealthTech', 'E-commerce', 
    'SaaS', 'Enterprise Software', 'Consumer Tech', 'CleanTech', 'Gaming',
    'BioTech', 'AgTech', 'SpaceTech', 'Robotics', 'Cybersecurity',
    'Web3/Blockchain', 'IoT', 'Retail Tech', 'PropTech', 'Other'
  ];

  const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('investor_')) {
      setInvestorSearchData(prev => ({
        ...prev,
        [name.replace('investor_', '')]: value
      }));
    } else {
      setFundingData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const searchInvestors = async () => {
    setLoading(true);
    setSearchError('');
    setInvestors(null);

    const searchData = {
      ...investorSearchData,
      industry: investorSearchData.industry === 'Other' ? investorSearchData.customIndustry : investorSearchData.industry
    };

    try {
      const response = await fetch('https://backend-delta-eight-78.vercel.app/api/investors/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to search investors');
      }

      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid response format from server');
      }

      const validInvestors = data.filter(investor => 
        investor.name &&
        investor.firm &&
        investor.industries &&
        investor.investmentRange &&
        investor.previousInvestments &&
        investor.contactInfo
      );

      if (validInvestors.length === 0) {
        throw new Error('No matching investors found. Try adjusting your search criteria.');
      }

      setInvestors(validInvestors);
    } catch (error) {
      console.error('Error:', error);
      setSearchError(error.message || 'Failed to search investors. Please try again.');
      setInvestors(null);
    } finally {
      setLoading(false);
    }
  };

  const calculateFunding = () => {
    setLoading(true);
    setTimeout(() => {
      const mockCalculations = {
        dilution: (parseFloat(fundingData.equity_offered) || 0) + '%',
        post_money_valuation: (parseFloat(fundingData.current_valuation) || 0) / (1 - (parseFloat(fundingData.equity_offered) || 0) / 100),
        share_price: ((parseFloat(fundingData.current_valuation) || 0) / 1000000).toFixed(2),
        runway_extension: (parseFloat(fundingData.funding_needed) || 0) / (parseFloat(fundingData.monthly_burn) || 1),
      };
      setCalculations(mockCalculations);
      setLoading(false);
    }, 1500);
  };

  const resources = [
    {
      title: "Valuation Guide",
      description: "Comprehensive video series on startup valuation methods",
      type: "Video Series",
      url: "https://youtube.com/playlist?list=PLUkh9m2BorqkgpNyRpP-NL3BS4yvFabXk&si=NPy66Kyb6rWO4kbl"
    },
    {
      title: "Term Sheet Basics",
      description: "Video tutorials on understanding term sheets and negotiations",
      type: "Video Series",
      url: "https://youtube.com/playlist?list=PLUkh9m2Borqnk6tJUpGzN4RcDUBAjovqN&si=0Yq2NbAOGYbBNB7m"
    },
    {
      title: "Due Diligence Checklist",
      description: "Video guide on preparing for investor due diligence",
      type: "Video Series",
      url: "https://youtube.com/playlist?list=PLO2lMhGXhaC1XmZRqXEw_NJplqlOZG7Md&si=hf8hdDagmZAyQgEz"
    }
  ];

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Fundraising Tools</h1>

      <div className="flex gap-4 mb-8">
        {['matching', 'resources', 'calculator'].map((section) => (
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
                <div className="text-center text-gray-400 text-xs mt-4">
                  LLM can make mistakes. Check important info.
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
                    <Button 
                      variant="outline" 
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      Watch Videos
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'matching' && (
          <div className="md:col-span-2">
            <div className="tool-section">
              <h2 className="text-xl font-semibold mb-4">Investor Search</h2>
              
              <div className="mb-6">
                <div className="form-group mb-4">
                  <label>Business Description</label>
                  <textarea
                    name="investor_businessDescription"
                    value={investorSearchData.businessDescription}
                    onChange={handleInputChange}
                    placeholder="Describe your business, target market, unique value proposition..."
                    className="w-full p-2 border rounded-md h-32"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="form-group">
                    <label>Industry Focus</label>
                    <select
                      name="investor_industry"
                      value={investorSearchData.industry}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {investorSearchData.industry === 'Other' && (
                    <div className="form-group">
                      <label>Custom Industry</label>
                      <input
                        type="text"
                        name="investor_customIndustry"
                        value={investorSearchData.customIndustry}
                        onChange={handleInputChange}
                        placeholder="Enter your industry"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label>Investment Stage</label>
                    <select
                      name="investor_stage"
                      value={investorSearchData.stage}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select Stage</option>
                      {stages.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="form-group">
                    <label>Min Investment ($)</label>
                    <input
                      type="number"
                      name="investor_minInvestment"
                      value={investorSearchData.minInvestment}
                      onChange={handleInputChange}
                      placeholder="e.g., 100000"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>

                  <div className="form-group">
                    <label>Max Investment ($)</label>
                    <input
                      type="number"
                      name="investor_maxInvestment"
                      value={investorSearchData.maxInvestment}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000000"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              <Button 
                onClick={searchInvestors}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Searching..." : "Search Investors"}
              </Button>

              {searchError && (
                <div className="text-center text-red-600 mt-4 p-4 bg-red-50 rounded-md border border-red-200">
                  {searchError}
                </div>
              )}

              {investors && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Matching Investors</h3>
                  <div className="text-center text-gray-400 text-xs mb-4">
                    LLM can make mistakes. Check important info.
                  </div>
                  <div className="results-grid">
                    {investors.map((investor, index) => (
                      <div key={index} className="result-card">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{investor.name}</h3>
                            <p className="text-sm text-gray-600">{investor.firm}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {investor.stage}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700">Industries</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {investor.industries.map((industry, i) => (
                                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {industry}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-gray-700">Investment Range</h4>
                            <p className="text-sm text-gray-600">{investor.investmentRange}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-gray-700">Notable Investments</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                              {investor.previousInvestments.map((investment, i) => (
                                <li key={i}>{investment}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-gray-700">Contact Information</h4>
                            <div className="space-y-1 mt-1">
                              {investor.contactInfo.email && (
                                <a href={`mailto:${investor.contactInfo.email}`} className="text-sm text-blue-600 hover:underline block">
                                  {investor.contactInfo.email}
                                </a>
                              )}
                              {investor.contactInfo.linkedin && (
                                <a href={investor.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline block">
                                  LinkedIn Profile
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!searchError && !investors && !loading && (
                <div className="text-center text-gray-500 mt-8">
                  Use the filters above to search for investors that match your criteria
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
