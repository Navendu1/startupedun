import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function FinancialMockup() {
  const [activeTab, setActiveTab] = useState('balance-sheet');
  const [financialData, setFinancialData] = useState({
    revenue: '',
    expenses: '',
    assets: '',
    liabilities: '',
    equity: '',
    growth_rate: '',
    burn_rate: '',
    runway_months: ''
  });
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinancialData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateReports = () => {
    setLoading(true);
    // Simulated API call - replace with actual calculation logic
    setTimeout(() => {
      const mockForecast = {
        balanceSheet: {
          assets: {
            current: {
              cash: 100000,
              accounts_receivable: 50000,
              inventory: 25000
            },
            fixed: {
              equipment: 75000,
              property: 200000
            }
          },
          liabilities: {
            current: {
              accounts_payable: 30000,
              short_term_debt: 20000
            },
            longTerm: {
              loans: 150000
            }
          },
          equity: {
            invested_capital: 200000,
            retained_earnings: 50000
          }
        },
        metrics: {
          quick_ratio: 2.5,
          current_ratio: 2.9,
          debt_to_equity: 0.75,
          profit_margin: 0.15
        },
        projections: {
          yearly: [
            { year: 2024, revenue: 500000, expenses: 400000, profit: 100000 },
            { year: 2025, revenue: 750000, expenses: 600000, profit: 150000 },
            { year: 2026, revenue: 1000000, expenses: 800000, profit: 200000 }
          ]
        }
      };
      setForecast(mockForecast);
      setLoading(false);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Financial Mockup Tool</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="tool-section">
          <div className="flex gap-2 mb-6">
            {['balance-sheet', 'forecasting'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'default' : 'outline'}
                onClick={() => setActiveTab(tab)}
              >
                {tab.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </Button>
            ))}
          </div>

          <div className="tool-form">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label>Revenue</label>
                <input
                  type="number"
                  name="revenue"
                  value={financialData.revenue}
                  onChange={handleInputChange}
                  placeholder="Annual Revenue"
                />
              </div>
              <div className="form-group">
                <label>Expenses</label>
                <input
                  type="number"
                  name="expenses"
                  value={financialData.expenses}
                  onChange={handleInputChange}
                  placeholder="Annual Expenses"
                />
              </div>
              <div className="form-group">
                <label>Assets</label>
                <input
                  type="number"
                  name="assets"
                  value={financialData.assets}
                  onChange={handleInputChange}
                  placeholder="Total Assets"
                />
              </div>
              <div className="form-group">
                <label>Liabilities</label>
                <input
                  type="number"
                  name="liabilities"
                  value={financialData.liabilities}
                  onChange={handleInputChange}
                  placeholder="Total Liabilities"
                />
              </div>
            </div>

            {activeTab === 'forecasting' && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="form-group">
                  <label>Growth Rate (%)</label>
                  <input
                    type="number"
                    name="growth_rate"
                    value={financialData.growth_rate}
                    onChange={handleInputChange}
                    placeholder="Annual Growth Rate"
                  />
                </div>
                <div className="form-group">
                  <label>Burn Rate</label>
                  <input
                    type="number"
                    name="burn_rate"
                    value={financialData.burn_rate}
                    onChange={handleInputChange}
                    placeholder="Monthly Burn Rate"
                  />
                </div>
              </div>
            )}

            <Button
              onClick={generateReports}
              disabled={loading}
              className="w-full mt-4"
            >
              {loading ? "Generating Reports..." : "Generate Financial Reports"}
            </Button>
          </div>
        </div>

        <div className="tool-section">
          {forecast ? (
            <div className={`results-section ${loading ? 'loading' : ''}`}>
              {activeTab === 'balance-sheet' ? (
                <>
                  <h3 className="text-xl font-semibold mb-4">Balance Sheet</h3>
                  <div className="results-grid">
                    {/* Current Assets */}
                    {Object.entries(forecast.balanceSheet.assets.current).map(([key, value]) => (
                      <div key={key} className="result-card card-highlight">
                        <div className="metric-label">{key.replace(/_/g, ' ')}</div>
                        <div className="metric-value">{formatCurrency(value)}</div>
                      </div>
                    ))}
                    {/* Fixed Assets */}
                    {Object.entries(forecast.balanceSheet.assets.fixed).map(([key, value]) => (
                      <div key={key} className="result-card card-success">
                        <div className="metric-label">{key.replace(/_/g, ' ')}</div>
                        <div className="metric-value">{formatCurrency(value)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Financial Metrics</h4>
                    <div className="results-grid">
                      {Object.entries(forecast.metrics).map(([key, value]) => (
                        <div key={key} className="financial-metric">
                          <div className="metric-label">{key.replace(/_/g, ' ')}</div>
                          <div className="metric-value">{value.toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-4">Financial Projections</h3>
                  <div className="space-y-4">
                    {forecast.projections.yearly.map((year) => (
                      <div key={year.year} className="result-card">
                        <h4 className="font-medium mb-2">Year {year.year}</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="financial-metric">
                            <div className="metric-label">Revenue</div>
                            <div className="metric-value">{formatCurrency(year.revenue)}</div>
                          </div>
                          <div className="financial-metric">
                            <div className="metric-label">Expenses</div>
                            <div className="metric-value">{formatCurrency(year.expenses)}</div>
                          </div>
                          <div className="financial-metric">
                            <div className="metric-label">Profit</div>
                            <div className="metric-value">{formatCurrency(year.profit)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              Fill in the financial data and click &quot;Generate Financial Reports&quot; to create a report
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
