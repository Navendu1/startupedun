import PropTypes from 'prop-types';

export default function MarketResearchFundamentals({ isPreview = false }) {
  const chapterData = {
    title: "Market Research Fundamentals",
    description: "Understanding your target market and competition",
    readTime: "15 min",
    thumbnail: "🔍",
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
        <h1 className="text-2xl font-bold mb-6">Market Research Fundamentals</h1>
        
        <p className="mb-4">
          Market research is a critical process for businesses, especially startups, as it helps entrepreneurs understand their target market, customer needs, and competitive landscape (Kotler & Keller, 2016). By gathering and analyzing data, companies can make informed decisions, reduce risks, and improve their chances of success. This section explores market research fundamentals, focusing on <strong>primary vs. secondary research, target market identification, customer segmentation, competitor analysis, and market sizing and trends</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Primary vs. Secondary Research</h2>
        <p className="mb-4">
          Market research is typically divided into <strong>primary</strong> and <strong>secondary</strong> research. Both approaches provide valuable insights but serve different purposes (Burns & Bush, 2014).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Primary Research</h3>
        <p className="mb-4">
          Primary research involves collecting <strong>first-hand data</strong> directly from customers, competitors, or industry experts (Malhotra, 2019). This method is useful when businesses need specific insights that are not available from existing sources.
        </p>
        
        <p className="mb-2"><strong>Examples of Primary Research:</strong></p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Surveys and Questionnaires:</strong> Collecting opinions from potential customers</li>
          <li><strong>Interviews:</strong> Conducting one-on-one discussions with target users</li>
          <li><strong>Focus Groups:</strong> Gathering small groups to discuss a product or service</li>
          <li><strong>Observational Research:</strong> Studying customer behavior in real-world settings</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Secondary Research</h3>
        <p className="mb-4">
          Secondary research involves analyzing <strong>existing data</strong> from external sources (Kotler & Keller, 2016). It is useful for understanding industry trends, competitor strategies, and general market conditions.
        </p>

        <p className="mb-2"><strong>Examples of Secondary Research:</strong></p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Industry Reports and Publications:</strong> Research from firms like Gartner, McKinsey, or government sources</li>
          <li><strong>Competitor Websites and Financial Reports:</strong> Analyzing publicly available data</li>
          <li><strong>Market Trend Studies:</strong> Examining research reports on emerging trends</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Target Market Identification</h2>
        <p className="mb-4">
          A <strong>target market</strong> is the specific group of customers a business aims to serve (Solomon et al., 2018). Identifying the right market ensures that a company&apos;s product or service meets customer needs.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Factors in Identifying a Target Market</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Demographics:</strong> Age, gender, income, education level (Kotler & Keller, 2016)</li>
          <li><strong>Geographics:</strong> Location, climate, urban vs. rural distribution</li>
          <li><strong>Behavioral Aspects:</strong> Buying habits, brand loyalty, usage patterns (Solomon et al., 2018)</li>
          <li><strong>Psychographics:</strong> Lifestyle, values, personality traits</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Customer Segmentation</h2>
        <p className="mb-4">
          Customer segmentation involves dividing a target market into <strong>smaller, more manageable groups</strong> based on shared characteristics (Weinstein, 2013). This allows companies to <strong>personalize</strong> their marketing efforts and improve customer engagement.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Types of Customer Segmentation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Demographic Segmentation:</strong> Based on age, gender, income, education level</li>
          <li><strong>Geographic Segmentation:</strong> Based on location and climate (Kotler & Keller, 2016)</li>
          <li><strong>Psychographic Segmentation:</strong> Focuses on customer values, interests, and lifestyles (Solomon et al., 2018)</li>
          <li><strong>Behavioral Segmentation:</strong> Groups customers by buying patterns and product usage (Weinstein, 2013)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Competitor Analysis</h2>
        <p className="mb-4">
          Understanding competition is essential for positioning a business effectively in the market (Porter, 2008). A thorough <strong>competitor analysis</strong> helps companies identify industry trends, strengths, weaknesses, and market opportunities.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4.1 Steps in Competitor Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Identify Direct and Indirect Competitors:</strong> Direct competitors offer similar products, while indirect competitors provide alternatives</li>
          <li><strong>Analyze Competitor Strengths and Weaknesses:</strong> Assess pricing, branding, customer reviews, and financial performance (Weinstein, 2013)</li>
          <li><strong>Examine Competitive Strategies:</strong> Understanding how competitors attract and retain customers helps businesses refine their own approach (Kotler & Keller, 2016)</li>
          <li><strong>Identify Gaps and Opportunities:</strong> Finding unmet needs in the market can provide a competitive edge</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Market Sizing and Trends</h2>
        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Market Sizing Components</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Total Addressable Market (TAM):</strong> The total demand for a product or service if every potential customer were reached (Gans et al., 2018)</li>
          <li><strong>Serviceable Available Market (SAM):</strong> The segment of TAM that a business can realistically serve</li>
          <li><strong>Serviceable Obtainable Market (SOM):</strong> The portion of SAM that a company can capture based on resources and competition</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Market Trend Analysis</h3>
        <p className="mb-4">
          Businesses must stay informed about <strong>emerging trends</strong> that could impact their industry. Key methods include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Industry Reports and Data Analysis:</strong> Studying reports from firms like McKinsey and Gartner</li>
          <li><strong>Social Media and Consumer Insights:</strong> Analyzing online conversations and trends (Solomon et al., 2018)</li>
          <li><strong>Technological Advancements:</strong> Monitoring innovations that could disrupt markets (Kotler & Keller, 2016)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Conclusion</h2>
        <p className="mb-6">
          Market research is a <strong>fundamental</strong> process that helps businesses <strong>understand their target market and competition</strong>. By using a combination of <strong>primary and secondary research, identifying target markets, segmenting customers, conducting competitor analysis, and assessing market size and trends</strong>, companies can make informed decisions that improve their chances of success. A <strong>data-driven approach</strong> to market research ensures that businesses remain competitive and adaptable in a changing marketplace.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Burns, A. C., & Bush, R. F. (2014). <em>Marketing Research</em>. Pearson.</p>
          <p>Gans, J., Stern, S., & Wu, J. (2018). <em>Strategy for Startups</em>. Harvard Business Review Press.</p>
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Malhotra, N. K. (2019). <em>Marketing Research: An Applied Orientation</em>. Pearson.</p>
          <p>Porter, M. E. (2008). <em>Competitive Strategy: Techniques for Analyzing Industries and Competitors</em>. Free Press.</p>
          <p>Solomon, M. R., Marshall, G. W., & Stuart, E. W. (2018). <em>Marketing: Real People, Real Choices</em> (9th ed.). Pearson.</p>
          <p>Weinstein, A. (2013). <em>Handbook of Market Segmentation: Strategic Targeting for Business and Technology Firms</em>. Routledge.</p>
        </div>
      </div>
    </div>
  );
}

MarketResearchFundamentals.propTypes = {
  isPreview: PropTypes.bool
};
