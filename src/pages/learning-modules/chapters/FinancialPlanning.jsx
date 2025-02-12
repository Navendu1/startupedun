import PropTypes from 'prop-types';

export default function FinancialPlanning({ isPreview = false }) {
  const chapterData = {
    title: "Financial Planning",
    description: "Basic financial concepts for startups",
    readTime: "15 min",
    thumbnail: "💰",
  };

  if (isPreview) {
    return (
      <div className="card-preview p-6">
        <div className="text-4xl mb-4">{chapterData.thumbnail}</div>
        <h3 className="text-xl font-semibold mb-2">{chapterData.title}</h3>
        <div className="text-sm text-gray-500 mb-2">Read time: {chapterData.readTime}</div>
      </div>
    );
  }

  return (
    <div className="chapter-content p-6">
      <div className="text-4xl mb-4">{chapterData.thumbnail}</div>
      <h1 className="text-3xl font-bold mb-4">{chapterData.title}</h1>
      <div className="chapter-info mb-6">
        <p className="text-sm text-gray-500">Read time: {chapterData.readTime}</p>
        <p className="text-gray-600 dark:text-gray-400">{chapterData.description}</p>
      </div>
      <div className="content prose dark:prose-invert">
        <h1 className="text-2xl font-bold mb-6">Financial Planning for Startups</h1>
        
        <p className="mb-4">
          Financial planning is a <strong>critical factor</strong> in a startup&apos;s success. Many new businesses fail due to poor financial management, insufficient funding, or unrealistic revenue expectations (Robb & Robinson, 2014). Understanding <strong>startup costs, revenue projections, cash flow management, break-even analysis, and funding requirements</strong> helps entrepreneurs build sustainable businesses.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Startup Costs and Expenses</h2>
        <p className="mb-4">
          Before launching a business, entrepreneurs must estimate their <strong>startup costs</strong>—the initial expenses required to start operations (Burns, 2016). These costs typically fall into two categories:
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Fixed vs. Variable Costs</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Fixed Costs:</strong> Expenses that remain constant regardless of sales volume, such as rent, salaries, and insurance (Brigham & Ehrhardt, 2019)</li>
          <li><strong>Variable Costs:</strong> Costs that fluctuate based on production or sales, including raw materials, marketing expenses, and shipping fees</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 One-Time vs. Recurring Expenses</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>One-Time Costs:</strong> Initial investments such as legal fees, website development, and equipment purchases</li>
          <li><strong>Recurring Costs:</strong> Ongoing expenses such as employee wages, office rent, and utilities</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Revenue Projections</h2>
        <p className="mb-4">
          Revenue projections estimate how much money a startup expects to generate over a specific period. They are essential for setting financial goals, securing funding, and making informed business decisions (Damodaran, 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Methods for Estimating Revenue</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Top-Down Approach:</strong> Starts with the total market size and estimates the startup&apos;s potential market share</li>
          <li><strong>Bottom-Up Approach:</strong> Estimates revenue based on actual sales data, pricing strategy, and expected customer growth (Mason & Brown, 2014)</li>
          <li><strong>Historical Data Analysis:</strong> If available, using past sales trends to predict future revenue</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Cash Flow Management</h2>
        <p className="mb-4">
          Cash flow—the movement of money in and out of a business—determines a startup&apos;s financial health. Many startups fail due to <strong>cash flow mismanagement</strong>, even if they are profitable (Brigham & Ehrhardt, 2019).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Key Cash Flow Concepts</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Cash Inflows:</strong> Revenue from sales, funding, and loans</li>
          <li><strong>Cash Outflows:</strong> Expenses such as salaries, rent, and marketing costs</li>
          <li><strong>Cash Flow Statement:</strong> A financial document that tracks cash inflows and outflows over time (Gitman et al., 2020)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Strategies for Managing Cash Flow</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Maintain a Cash Reserve:</strong> Keeping extra funds for emergencies</li>
          <li><strong>Optimize Payment Terms:</strong> Negotiating with suppliers for longer payment periods while encouraging customers to pay quickly</li>
          <li><strong>Monitor Cash Flow Regularly:</strong> Using accounting software to track financial performance (Damodaran, 2012)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Break-Even Analysis</h2>
        <p className="mb-4">
          A <strong>break-even analysis</strong> helps determine when a startup will become <strong>profitable</strong>—that is, when total revenue equals total costs (Burns, 2016).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Break-Even Point Formula</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 mb-4 rounded-lg">
          <p className="font-mono">Break-even point = Fixed Costs / (Price per Unit - Variable Cost per Unit)</p>
        </div>
        <p className="mb-4">This formula calculates the number of units a startup must sell to cover its expenses.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.2 Importance of Break-Even Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Helps set <strong>pricing strategies</strong> to ensure profitability</li>
          <li>Identifies whether a <strong>business model is financially viable</strong></li>
          <li>Assists in <strong>funding decisions</strong> by demonstrating financial feasibility to investors (Mason & Brown, 2014)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Funding Requirements</h2>
        <p className="mb-4">
          Most startups require external funding to cover initial costs and sustain operations before reaching profitability. Understanding <strong>funding requirements</strong> is essential for securing the right investment (Robb & Robinson, 2014).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Types of Startup Funding</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Bootstrapping:</strong> Using personal savings or revenue from early sales to fund the business</li>
          <li><strong>Angel Investors:</strong> High-net-worth individuals who invest in startups in exchange for equity</li>
          <li><strong>Venture Capital (VC):</strong> Firms that provide funding in exchange for ownership stakes (Gompers et al., 2020)</li>
          <li><strong>Bank Loans & Government Grants:</strong> Traditional funding options that require repayment</li>
          <li><strong>Crowdfunding:</strong> Raising small amounts of money from a large number of people through online platforms</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 How to Determine Funding Needs</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Calculate <strong>startup costs</strong> and projected expenses</li>
          <li>Forecast <strong>cash flow needs</strong> for at least 12 months</li>
          <li>Factor in a <strong>financial buffer</strong> for unexpected costs</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Effective <strong>financial planning</strong> is essential for <strong>startup success</strong>. Entrepreneurs must carefully manage <strong>startup costs, revenue projections, cash flow, break-even points, and funding requirements</strong> to ensure financial stability. By implementing <strong>sound financial strategies</strong>, startups can minimize risk, attract investors, and build a sustainable business.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Brigham, E. F., & Ehrhardt, M. C. (2019). <em>Financial Management: Theory & Practice</em>. Cengage Learning.</p>
          <p>Burns, P. (2016). <em>Entrepreneurship and Small Business</em>. Palgrave Macmillan.</p>
          <p>Damodaran, A. (2012). <em>Investment Valuation: Tools and Techniques for Determining the Value of Any Asset</em>. Wiley.</p>
          <p>Gitman, L. J., Juchau, R., & Flanagan, J. (2020). <em>Principles of Managerial Finance</em>. Pearson.</p>
          <p>Gompers, P., Gornall, W., Kaplan, S. N., & Strebulaev, I. A. (2020). &ldquo;How do venture capitalists make decisions?&rdquo; <em>Journal of Financial Economics</em>, 135(1), 169-190.</p>
          <p>Mason, C., & Brown, R. (2014). &ldquo;Entrepreneurial ecosystems and growth-oriented entrepreneurship.&rdquo; <em>OECD LEED Programme Paper</em>.</p>
          <p>Robb, A. M., & Robinson, D. T. (2014). &ldquo;The capital structure decisions of new firms.&rdquo; <em>The Review of Financial Studies</em>, 27(1), 153-179.</p>
        </div>
      </div>
    </div>
  );
}

FinancialPlanning.propTypes = {
  isPreview: PropTypes.bool
};
