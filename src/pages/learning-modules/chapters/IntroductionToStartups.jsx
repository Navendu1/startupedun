import PropTypes from 'prop-types';

export default function IntroductionToStartups({ isPreview = false }) {
  const chapterData = {
    title: "Introduction to Startups",
    description: "What is a startup and key characteristics of successful startups",
    readTime: "15 min",
    thumbnail: "📚",
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
        <p>A startup is a company or project undertaken by entrepreneurs to develop and bring to market a unique product or service.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Key Topics:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Definition and characteristics of startups</li>
          <li>Different types of startups</li>
          <li>Key success factors</li>
          <li>Common challenges faced by startups</li>
          <li>The startup lifecycle</li>
          <li>The startup lifecycle</li><li>The startup lifecycle</li>
          
        </ul>
      </div>
    </div>
  );
}

IntroductionToStartups.propTypes = {
  isPreview: PropTypes.bool
};
