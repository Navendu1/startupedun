import PropTypes from 'prop-types';

export default function MarketResearch({ isPreview = false }) {
  const chapterData = {
    title: "Market Research",
    description: "Understanding consumer and competitive insights through structured research methods",
    readTime: "25 min",
    thumbnail: "📊",
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
        <h1 className="text-2xl font-bold mb-6">Market Research: Understanding Consumer and Competitive Insights</h1>
        
        <p className="mb-4">
          Market research is a critical process that enables businesses to comprehend <strong>customer needs, market trends, and competitive landscapes</strong>. It involves gathering and analyzing data to support strategic decision-making.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Primary and Secondary Research</h2>
        <p className="mb-4">
          Market research is broadly classified into <strong>primary</strong> and <strong>secondary</strong> research. Both methods are essential for gathering accurate and relevant data.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Primary Research</h3>
        <p className="mb-4">
          Primary research involves collecting <strong>first-hand data</strong> directly from target audiences. This method provides <strong>customized insights</strong> but can be time-consuming and costly (Malhotra, 2019).
        </p>
        
        <p className="mb-4">Common primary research methods include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Surveys and Questionnaires:</strong> Structured data collection tools targeting potential customers</li>
          <li><strong>Interviews:</strong> One-on-one discussions with industry experts or consumers</li>
          <li><strong>Focus Groups:</strong> Small groups engaging in discussions about a product or service</li>
          <li><strong>Observational Research:</strong> Studying consumer behavior in natural settings</li>
          <li><strong>Experimental Research:</strong> Testing variables to determine cause-and-effect relationships</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Primary Market Research</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/b-hDg7699S0"
            title="How to Conduct Effective Market Research"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://hbsp.harvard.edu/product/585039-PDF-ENG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Marketing Research: An Overview of Research Methods – Harvard Business Publishing Education
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.2 Secondary Research</h3>
        <p className="mb-4">
          Secondary research utilizes <strong>existing data</strong> collected by third parties. It is <strong>cost-effective</strong> and offers <strong>broad market insights</strong> but may lack specificity (Kotler & Keller, 2016).
        </p>

        <p className="mb-4">Sources include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Industry Reports:</strong> Publications from market research firms</li>
          <li><strong>Government Publications:</strong> Data from official agencies</li>
          <li><strong>Competitor Reports:</strong> Publicly available financial reports and case studies</li>
          <li><strong>Academic Papers & Whitepapers:</strong> Research published by educational institutions and think tanks</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Secondary Market Research</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/QsZEzo5FnYE"
            title="How to Conduct Market Research and Identify Your Target Audience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://online.hbs.edu/blog/post/how-to-do-market-research-for-a-startup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            How to Conduct Market Research for a Startup
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Market Sizing</h2>
        <p className="mb-4">
          Market sizing helps businesses estimate <strong>potential revenue opportunities</strong> within a specific market. It provides data for <strong>investment decisions, product launches, and market entry strategies</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Market Sizing Approaches</h3>
        <p className="mb-4">
          There are three primary methods for estimating market size (Gans et al., 2018):
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Total Addressable Market (TAM):</strong> The total demand for a product or service if every potential customer is reached</li>
          <li><strong>Serviceable Available Market (SAM):</strong> The portion of TAM that a business can realistically serve</li>
          <li><strong>Serviceable Obtainable Market (SOM):</strong> The percentage of SAM that a company expects to capture</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Methods for Market Sizing</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Top-Down Approach:</strong> Utilizes existing industry reports and macroeconomic data to estimate market potential</li>
          <li><strong>Bottom-Up Approach:</strong> Aggregates individual sales data and customer adoption rates to project market size</li>
          <li><strong>Value-Theory Method:</strong> Estimates market size based on perceived customer value and willingness to pay</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Market Sizing</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/M_RMTC2YmXY"
            title="How To Do Market Research! (5 FAST & EASY Strategies For 2024)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://learn.marsdd.com/article/how-to-estimate-market-size-business-and-marketing-planning-for-startups/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            How to estimate market size: Business and marketing planning for startups
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Competitive Analysis</h2>
        <p className="mb-4">
          Competitive analysis enables businesses to understand their competitors&apos; strengths, weaknesses, opportunities, and threats (SWOT), refining their own strategies accordingly (Porter, 2008).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Competitive Analysis Frameworks</h3>
        
        <h4 className="text-base font-semibold mt-4 mb-2">Porter&apos;s Five Forces Model</h4>
        <p className="mb-4">Evaluates industry attractiveness based on:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Threat of New Entrants</strong></li>
          <li><strong>Bargaining Power of Suppliers</strong></li>
          <li><strong>Bargaining Power of Buyers</strong></li>
          <li><strong>Threat of Substitute Products</strong></li>
          <li><strong>Industry Rivalry</strong></li>
        </ul>

        <h4 className="text-base font-semibold mt-4 mb-2">SWOT Analysis</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Strengths:</strong> Internal capabilities providing a competitive edge</li>
          <li><strong>Weaknesses:</strong> Areas requiring improvement</li>
          <li><strong>Opportunities:</strong> Market trends and untapped potential</li>
          <li><strong>Threats:</strong> External factors that may hinder growth</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Competitive Intelligence Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Digital Analytics Tools:</strong> Analyzing competitors&apos; online presence</li>
          <li><strong>Financial Data Platforms:</strong> Researching investment and financial information</li>
          <li><strong>Social Media Monitoring Tools:</strong> Understanding consumer sentiment through online interactions</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Competitive Analysis</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/mYF2_FBCvXw"
            title="How to Conduct Market Research"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.cmu.edu/swartz-center-for-entrepreneurship/assets/Olympus%20pdfs/Competitive%20Analysis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
           Competitive Analysis
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Gans, J., Stern, S., & Wu, J. (2018). <em>Strategy for Startups</em>. Harvard Business Review Press.</p>
          <p>Kotler, P., & Keller, K. L. (2016). <em>Marketing Management</em> (15th ed.). Pearson.</p>
          <p>Malhotra, N. K. (2019). <em>Marketing Research: An Applied Orientation</em>. Pearson.</p>
          <p>Porter, M. E. (2008). <em>Competitive Strategy: Techniques for Analyzing Industries and Competitors</em>. Free Press.</p>
        </div>
      </div>
    </div>
  );
}

MarketResearch.propTypes = {
  isPreview: PropTypes.bool
};
