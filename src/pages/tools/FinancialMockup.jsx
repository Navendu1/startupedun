import './FinancialMockup.css';

export default function FinancialMockup() {
  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-4">Financial Statements Guide</h1>

      <div className="mb-8 prose dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4">Financial Statements Analysis</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Income Statement (Profit & Loss Statement)</h3>
            <p className="mb-2">The income statement outlines a company&apos;s financial performance over a specific period:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Revenue (Sales):</strong> Total income from business activities</li>
              <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs of producing goods/services</li>
              <li><strong>Gross Profit:</strong> Revenue minus COGS</li>
              <li><strong>Operating Expenses:</strong> Marketing, salaries, rent, utilities</li>
              <li><strong>EBITDA:</strong> Earnings before interest, taxes, depreciation & amortization</li>
              <li><strong>Net Profit:</strong> Final earnings after all expenses & taxes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Balance Sheet</h3>
            <p className="mb-2">A snapshot of financial position at a specific point in time:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Assets:</strong> Cash, accounts receivable, inventory, equipment, property</li>
              <li><strong>Liabilities:</strong> Loans, accounts payable, outstanding expenses</li>
              <li><strong>Equity:</strong> Owner&apos;s capital and retained earnings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Cash Flow Statement</h3>
            <p className="mb-2">Tracks the movement of cash through the business:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Operating Cash Flow:</strong> From primary business operations</li>
              <li><strong>Investing Cash Flow:</strong> From asset purchases/investments</li>
              <li><strong>Financing Cash Flow:</strong> From loans, debt, equity investments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4. Key Financial Metrics</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Gross Profit Margin:</strong> Gross profit as % of revenue</li>
              <li><strong>Net Profit Margin:</strong> Net profit as % of revenue</li>
              <li><strong>ROI:</strong> Return on investment</li>
              <li><strong>Debt-to-Equity:</strong> Total liabilities / shareholders&apos; equity</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Excel Templates</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.vertex42.com/ExcelTemplates/income-statement.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">Income Statement Template (Vertex42)</a></li>
              <li><a href="https://www.vertex42.com/ExcelTemplates/balance-sheet.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">Balance Sheet Template (Vertex42)</a></li>
              <li><a href="https://www.vertex42.com/ExcelTemplates/cash-flow-statement.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">Cash Flow Statement Template (Vertex42)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
