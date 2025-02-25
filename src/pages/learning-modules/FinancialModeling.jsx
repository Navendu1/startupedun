import PropTypes from 'prop-types';

export default function FinancialModeling({ isPreview = false }) {
  const chapterData = {
    title: "Financial Modeling",
    description: "Understanding budgeting, revenue forecasting, and interactive financial tools",
    readTime: "20 min",
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
        <h1 className="text-2xl font-bold mb-6">Financial Modeling: A Comprehensive Guide</h1>
        
        <p className="mb-4">
          Financial modeling is a fundamental process that enables businesses to <strong>forecast financial performance, create budgets, and analyze revenue streams</strong>. It involves building mathematical representations of a company financial situation to support <strong>strategic decision-making and investment planning</strong>. This document explores <strong>budgeting strategies, revenue forecasting techniques, and interactive financial modeling tools</strong> that help businesses optimize financial performance.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Understanding Budgeting</h2>
        
        <p className="mb-4">
          Budgeting is the process of <strong>allocating financial resources</strong> to different business activities. It ensures effective financial management and helps organizations control expenses while planning for growth.
        </p>
        
        <div className="video-container mb-6">
          <h3 className="text-lg font-semibold mb-3">Foundations of Finance</h3>
          <iframe
            
            src="https://www.youtube.com/embed/videoseries?si=Tjk0I99CDroSLKgj&amp;list=PLUkh9m2BorqndWimijiJ-VCAXjJUrzJQU"
            title="Mastering Business Budgeting"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://people.stern.nyu.edu/adamodar/New_Home_Page/spreadsh.htm#cf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Corporate finance spreadsheets
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Importance of Budgeting</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Monitor cash flow</strong> to avoid liquidity issues</li>
          <li><strong>Control costs</strong> and reduce unnecessary expenses</li>
          <li><strong>Set financial goals</strong> and align spending with business objectives</li>
          <li><strong>Measure performance</strong> by comparing actual results with projected figures</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Types of Budgets</h3>
        <p className="mb-4">
          Businesses use different types of budgets based on their financial needs and operational structure:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Operating Budget:</strong> Forecasts revenues and expenses for daily operations</li>
          <li><strong>Capital Budget:</strong> Plans for large investments in assets like equipment and infrastructure</li>
          <li><strong>Cash Flow Budget:</strong> Tracks expected cash inflows and outflows</li>
          <li><strong>Zero-Based Budgeting:</strong> Requires justification for every expense from scratch</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Revenue Forecasting</h2>

        <p className="mb-4">
          Revenue forecasting helps businesses <strong>predict future income based on historical data, market trends, and sales projections</strong>. Accurate forecasting enables better financial planning and investment decisions.
        </p>

        <div className="video-container mb-6">
          <h3 className="text-lg font-semibold mb-3">Revenue Forecasting Guide</h3>
          <iframe
            
            src="https://www.youtube.com/embed/hs4gE-wjL0g"
            title="How to Forecast Revenue Effectively"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://online.hbs.edu/blog/post/financial-forecasting-methods"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            7 Financial Forecasting Methods to Predict Business Performance
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Revenue Forecasting Methods</h3>
        <p className="mb-4">
          There are several approaches to revenue forecasting, each suited to different business models:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Historical Data Analysis:</strong> Uses past revenue trends to predict future sales</li>
          <li><strong>Market-Based Forecasting:</strong> Estimates revenue based on industry trends and market size</li>
          <li><strong>Sales Funnel Analysis:</strong> Uses lead conversion rates to project revenue</li>
          <li><strong>Scenario Planning:</strong> Models multiple revenue outcomes under different market conditions</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Key Factors in Revenue Forecasting</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Market Demand:</strong> Evaluating customer interest and purchasing behavior</li>
          <li><strong>Economic Conditions:</strong> Assessing macroeconomic factors that influence consumer spending</li>
          <li><strong>Competitive Landscape:</strong> Understanding how competitors impact revenue potential</li>
          <li><strong>Pricing Strategy:</strong> Analyzing how price adjustments affect sales volume</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Interactive Financial Tools</h2>

        <p className="mb-4">
          Financial modeling tools help businesses build dynamic models to <strong>analyze financial performance, simulate different scenarios, and make data-driven decisions</strong>.
        </p>

        <div className="video-container mb-6">
          <h3 className="text-lg font-semibold mb-3">Financial Modeling Tools Overview</h3>
          <iframe
            
            src="https://www.youtube.com/embed/Ye7VeofnBfc"
            title="Best Financial Modeling Tools Explained"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://create.microsoft.com/en-us/templates/financial-management"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Financial management templates for Excel
          </a>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Popular Financial Modeling Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Microsoft Excel:</strong> Widely used for financial projections, budgeting, and forecasting</li>
          <li><strong>Google Sheets:</strong> Cloud-based alternative for collaborative financial modeling</li>
          <li><strong>Tableau & Power BI:</strong> Advanced visualization tools for analyzing financial data</li>
          <li><strong>Anaplan & Adaptive Insights:</strong> Enterprise-level financial planning and forecasting solutions</li>
          <li><strong>QuickBooks & Xero:</strong> Accounting software with built-in budgeting and forecasting features</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Benefits of Interactive Financial Models</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Real-Time Analysis:</strong> Provides instant insights into financial performance</li>
          <li><strong>Scenario Planning:</strong> Enables businesses to test different financial assumptions</li>
          <li><strong>Automated Calculations:</strong> Reduces human errors and enhances accuracy</li>
          <li><strong>Collaboration & Accessibility:</strong> Allows multiple stakeholders to review and adjust financial models</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Conclusion</h2>
        <p className="mb-6">
          Financial modeling plays a crucial role in <strong>budgeting, revenue forecasting, and strategic planning</strong>. By leveraging <strong>interactive financial tools</strong>, businesses can enhance accuracy in financial projections, optimize resource allocation, and improve decision-making. Implementing <strong>effective budgeting techniques and revenue forecasting strategies</strong> ensures long-term financial stability and growth.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>McKinsey & Company. (2022). <em>Revenue Forecasting Strategies for Businesses</em>.</p>
          <p>CFA Institute. (2023). <em>Financial Modeling and Analysis Techniques</em>.</p>
          <p>Harvard Business Review. (2021). <em>Mastering Budgeting for Business Success</em>.</p>
          <p>Malhotra, N. K. (2019). <em>Financial Planning and Budgeting Strategies</em>. Pearson.</p>
        </div>
      </div>
    </div>
  );
}

FinancialModeling.propTypes = {
  isPreview: PropTypes.bool
};
