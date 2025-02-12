import PropTypes from 'prop-types';

export default function GrowthAndScaling({ isPreview = false }) {
  const chapterData = {
    title: "Growth and Scaling",
    description: "Strategies for growing your startup",
    readTime: "15 min",
    thumbnail: "📈",
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
        <h1 className="text-2xl font-bold mb-6">Growth and Scaling: Strategies for Growing Your Startup</h1>
        
        <p className="mb-4">
          Scaling a startup is a complex but essential process for long-term success. While early-stage growth focuses on gaining traction, <strong>scaling ensures sustainability and efficiency</strong> as a business expands (Isenberg, 2010). This section explores best practices for sustainable startup growth, including <strong>tracking key growth metrics, optimizing operations, retaining customers, expanding into new markets, and forming strategic partnerships</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Growth Metrics</h2>
        <p className="mb-4">
          Tracking the right <strong>growth metrics</strong> helps startups measure progress, optimize strategies, and secure funding (Blank, 2013).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Key Performance Indicators (KPIs)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Monthly Recurring Revenue (MRR):</strong> Tracks stable income from subscriptions or repeat customers (Maurya, 2012)</li>
          <li><strong>Customer Acquisition Cost (CAC):</strong> Measures how much is spent to acquire a new customer (Kotler & Keller, 2016)</li>
          <li><strong>Customer Lifetime Value (CLV):</strong> Estimates total revenue a business can earn from a customer over time</li>
          <li><strong>Churn Rate:</strong> Percentage of customers who stop using a product or service</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Growth Rate Calculation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 mb-4 rounded-lg">
          <p className="font-mono">Growth Rate = ((New Customers - Lost Customers) / Total Customers at Start of Period) × 100</p>
        </div>
        <p className="mb-4">
          This metric helps businesses <strong>assess expansion speed and retention effectiveness</strong> (Eisenmann et al., 2012).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Scaling Operations</h2>
        <p className="mb-4">
          Scaling operations means <strong>growing without losing efficiency</strong>. A well-planned scaling strategy prevents common issues like <strong>overexpansion, quality reduction, or cash flow problems</strong> (Ries, 2011).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Automating Processes</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Use <strong>Customer Relationship Management (CRM)</strong> tools for marketing and sales automation</li>
          <li>Implement <strong>cloud-based financial software</strong> to manage expenses efficiently (Maurya, 2012)</li>
          <li>Develop <strong>scalable customer support systems</strong>, such as AI chatbots</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Hiring and Team Expansion</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Recruit <strong>skilled employees</strong> who align with company culture and growth goals (Isenberg, 2010)</li>
          <li>Implement <strong>structured onboarding programs</strong> for faster team integration</li>
          <li>Outsource <strong>non-core functions</strong> like HR and IT to maintain efficiency</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Customer Retention</h2>
        <p className="mb-4">
          Acquiring new customers is expensive, so startups must <strong>focus on retaining existing ones</strong> (Kotler & Keller, 2016).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Retention Strategies</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Personalized Communication:</strong> Use data-driven marketing to tailor content and offers (Godin, 2018)</li>
          <li><strong>Loyalty Programs & Rewards:</strong> Encourage repeat business with discounts, membership benefits, or referral incentives</li>
          <li><strong>Customer Support Optimization:</strong> Provide <strong>fast, efficient, and proactive</strong> customer service (Solomon et al., 2018)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Net Promoter Score (NPS) Analysis</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 mb-4 rounded-lg">
          <p className="font-mono">NPS = % Promoters - % Detractors</p>
        </div>
        <p className="mb-4">
          A high NPS indicates strong customer satisfaction and loyalty, which are critical for sustainable growth (Maurya, 2012).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Market Expansion</h2>
        <p className="mb-4">
          Expanding into <strong>new geographical or customer markets</strong> is a crucial scaling step (Porter, 2008).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Expansion Strategies</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Domestic Expansion:</strong> Targeting new demographics or industries within an existing market</li>
          <li><strong>International Expansion:</strong> Entering foreign markets through localization, franchising, or acquisitions (Mason & Brown, 2014)</li>
          <li><strong>Product Diversification:</strong> Adapting offerings to different markets</li>
          <li><strong>Localization:</strong> Adjusting branding, language, and marketing to fit new customer segments (Kotler & Keller, 2016)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Strategic Partnerships</h2>
        <p className="mb-4">
          Forming <strong>strategic alliances</strong> accelerates growth by leveraging <strong>resources, networks, and expertise</strong> (Isenberg, 2010).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Types of Partnerships</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Joint Ventures:</strong> Two businesses share resources for mutual growth</li>
          <li><strong>Technology Partnerships:</strong> Collaborating on product innovation (Eisenmann et al., 2012)</li>
          <li><strong>Marketing Partnerships:</strong> Co-branding or cross-promotions with aligned brands</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Partnership Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Increased Market Reach:</strong> Access new customers through partner networks</li>
          <li><strong>Operational Efficiency:</strong> Share costs and infrastructure to scale faster</li>
          <li><strong>Enhanced Credibility:</strong> Partnering with established companies builds trust (Maurya, 2012)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Scaling a startup requires a <strong>structured approach</strong> that balances <strong>growth with operational efficiency</strong>. By <strong>tracking key metrics, optimizing operations, improving customer retention, expanding into new markets, and leveraging strategic partnerships</strong>, startups can achieve <strong>long-term sustainability and profitability</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Blank, S. (2013). <em>The Startup Owner&apos;s Manual: The Step-by-Step Guide for Building a Great Company</em>. K&S Ranch.</p>
          <p>Eisenmann, T., Ries, E., & Dillard, S. (2012). &ldquo;Hypothesis-driven entrepreneurship: The lean startup.&rdquo; <em>Harvard Business School Background Note 812-095</em>.</p>
          <p>Godin, S. (2018). <em>This is Marketing: You Can&apos;t Be Seen Until You Learn to See</em>. Portfolio.</p>
          <p>Isenberg, D. J. (2010). &ldquo;How to start an entrepreneurial revolution.&rdquo; <em>Harvard Business Review</em>, 88(6), 40-50.</p>
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Mason, C., & Brown, R. (2014). &ldquo;Entrepreneurial ecosystems and growth-oriented entrepreneurship.&rdquo; <em>OECD LEED Programme Paper</em>.</p>
          <p>Maurya, A. (2012). <em>Running Lean: Iterate from Plan A to a Plan That Works</em>. O&apos;Reilly Media.</p>
          <p>Porter, M. E. (2008). <em>Competitive Strategy: Techniques for Analyzing Industries and Competitors</em>. Free Press.</p>
          <p>Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p>
          <p>Solomon, M. R., Marshall, G. W., & Stuart, E. W. (2018). <em>Marketing: Real People, Real Choices</em> (9th ed.). Pearson.</p>
        </div>
      </div>
    </div>
  );
}

GrowthAndScaling.propTypes = {
  isPreview: PropTypes.bool
};
