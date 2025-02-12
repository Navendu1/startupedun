import PropTypes from 'prop-types';

export default function FundraisingEssentials({ isPreview = false }) {
  const chapterData = {
    title: "Fundraising Essentials",
    description: "Understanding startup funding options",
    readTime: "15 min",
    thumbnail: "🏦",
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
        <h1 className="text-2xl font-bold mb-6">Fundraising Essentials: Understanding Startup Funding Options</h1>
        
        <p className="mb-4">
          Raising funds is one of the most critical aspects of launching and scaling a startup. Without adequate financial resources, even the most innovative ideas struggle to reach the market. Understanding <strong>funding types, stages, pitch deck development, investor relations, and valuation basics</strong> helps entrepreneurs navigate the complex world of startup financing (Gompers et al., 2020).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Types of Funding</h2>
        <p className="mb-4">
          Startups have multiple funding options, each with its own advantages and challenges. Selecting the right funding method depends on factors like <strong>business model, growth stage, and financial needs</strong> (Robb & Robinson, 2014).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Funding Options</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Bootstrapping:</strong> Entrepreneurs fund their business using personal savings or revenue from early sales</li>
          <li><strong>Friends and Family Funding:</strong> Early-stage funding from personal networks (Gompers et al., 2020)</li>
          <li><strong>Angel Investors:</strong> Wealthy individuals who provide early-stage capital in exchange for equity, typically investing $25,000 to $500,000 (Mason & Brown, 2014)</li>
          <li><strong>Venture Capital (VC):</strong> VC firms invest larger amounts ($1M to $50M+) in high-growth startups</li>
          <li><strong>Crowdfunding:</strong> Raising small amounts from many individuals via platforms like Kickstarter or Indiegogo</li>
          <li><strong>Bank Loans and Government Grants:</strong> Traditional financing with fixed repayment terms (Robb & Robinson, 2014)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Funding Stages</h2>
        <p className="mb-4">
          Startups go through multiple funding stages, each designed to support different phases of business growth (Eisenmann et al., 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Key Funding Stages</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Pre-Seed Stage:</strong> Initial funding from founders, friends, or small investors for market research and prototype development (Blank, 2013)</li>
          <li><strong>Seed Stage:</strong> First external investment, typically from angel investors or accelerators for product development and early hiring</li>
          <li><strong>Series A Funding:</strong> Venture capital firms invest $2M to $15M for scaling operations (Gompers et al., 2020)</li>
          <li><strong>Series B & C Funding:</strong> Investment rounds for expanding market reach and increasing revenue</li>
          <li><strong>IPO or Exit:</strong> The startup goes public or gets acquired, providing liquidity to investors and founders</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Pitch Deck Creation</h2>
        <p className="mb-4">
          A <strong>pitch deck</strong> is a presentation that communicates a startup&apos;s vision, market opportunity, and investment potential to investors (Sequoia, 2021).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Key Components of a Pitch Deck</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Problem Statement:</strong> Clearly define the market pain point</li>
          <li><strong>Solution & Value Proposition:</strong> Explain how the startup solves the problem</li>
          <li><strong>Market Opportunity:</strong> Present TAM, SAM, and SOM (total, serviceable, and obtainable markets)</li>
          <li><strong>Business Model:</strong> Detail how the startup generates revenue</li>
          <li><strong>Go-To-Market Strategy:</strong> Explain customer acquisition plans</li>
          <li><strong>Competitive Analysis:</strong> Highlight differentiation and competitive advantage (Porter, 2008)</li>
          <li><strong>Financial Projections:</strong> Provide revenue forecasts and key metrics</li>
          <li><strong>Team:</strong> Showcase leadership and relevant experience</li>
          <li><strong>Investment Ask:</strong> Specify funding needs and intended use</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Investor Relations</h2>
        <p className="mb-4">
          Building <strong>strong investor relationships</strong> is essential for long-term success (Gompers et al., 2020).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Building Investor Relationships</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Finding the Right Investors:</strong> Look for investors with experience in your industry and value beyond capital</li>
          <li><strong>Building Trust:</strong> Maintain transparent communication with regular updates (Mason & Brown, 2014)</li>
          <li><strong>Managing Expectations:</strong> Be prepared for due diligence and show clear growth strategy</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Valuation Basics</h2>
        <p className="mb-4">
          A startup&apos;s <strong>valuation</strong> determines how much equity is exchanged for funding. Understanding valuation principles is crucial for <strong>negotiating fair deals</strong> (Damodaran, 2012).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Valuation Methods</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Comparable Company Analysis (CCA):</strong> Compares valuation to similar startups</li>
          <li><strong>Discounted Cash Flow (DCF):</strong> Estimates future cash flow value</li>
          <li><strong>Venture Capital Method:</strong> Used by VCs to assess return on investment (Damodaran, 2012)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Factors Affecting Valuation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Revenue and Growth Rate:</strong> Higher growth startups command better valuations</li>
          <li><strong>Market Potential:</strong> Larger market size increases investor interest</li>
          <li><strong>Competitive Advantage:</strong> Unique offerings lead to higher valuations (Porter, 2008)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Fundraising is a <strong>critical process</strong> for startup success. By understanding <strong>funding types, stages, pitch deck development, investor relations, and valuation principles</strong>, entrepreneurs can secure capital efficiently. Building strong investor relationships and selecting the right funding strategy ensures <strong>long-term sustainability and growth</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Damodaran, A. (2012). <em>Investment Valuation: Tools and Techniques for Determining the Value of Any Asset</em>. Wiley.</p>
          <p>Eisenmann, T., Ries, E., & Dillard, S. (2012). &ldquo;Hypothesis-driven entrepreneurship: The lean startup.&rdquo; <em>Harvard Business School Background Note 812-095</em>.</p>
          <p>Gompers, P., Gornall, W., Kaplan, S. N., & Strebulaev, I. A. (2020). &ldquo;How do venture capitalists make decisions?&rdquo; <em>Journal of Financial Economics</em>, 135(1), 169-190.</p>
          <p>Mason, C., & Brown, R. (2014). &ldquo;Entrepreneurial ecosystems and growth-oriented entrepreneurship.&rdquo; <em>OECD LEED Programme Paper</em>.</p>
          <p>Porter, M. E. (2008). <em>Competitive Strategy: Techniques for Analyzing Industries and Competitors</em>. Free Press.</p>
          <p>Robb, A. M., & Robinson, D. T. (2014). &ldquo;The capital structure decisions of new firms.&rdquo; <em>The Review of Financial Studies</em>, 27(1), 153-179.</p>
          <p>Sequoia Capital. (2021). <em>Pitch Deck Guidelines</em>. Sequoia VC Insights.</p>
        </div>
      </div>
    </div>
  );
}

FundraisingEssentials.propTypes = {
  isPreview: PropTypes.bool
};
