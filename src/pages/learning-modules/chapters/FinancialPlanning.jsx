import PropTypes from 'prop-types';

export default function FinancialPlanning({ isPreview = false }) {
  const chapterData = {
    title: "Financial Planning",
    description: "Basic financial concepts for startups",
    readTime: "35 min",
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
        <p>Master the essential financial planning concepts and tools needed for your startup&apos;s success.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Key Topics:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Startup costs and expenses</li>
          <li>Revenue projections</li>
          <li>Cash flow management</li>
          <li>Break-even analysis</li>
          <li>Funding requirements</li>
        </ul>
      </div>
    </div>
  );
}

FinancialPlanning.propTypes = {
  isPreview: PropTypes.bool
};
