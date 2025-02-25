import PropTypes from 'prop-types';

function PitchDeck({ isPreview = false }) {
  const chapterData = {
    title: "Creating a Pitch Deck",
    description: "Learn essential components and best practices for investor presentations",
    readTime: "25 min",
    thumbnail: "🎯",
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
        <h1 className="text-2xl font-bold mb-6">Creating a Pitch Deck: Essential Components for Investor Presentations</h1>
        
        <p className="mb-4">
          A <strong>pitch deck</strong> is a visual presentation used by entrepreneurs to communicate their business vision, market opportunity, and financial potential to investors. A well-structured pitch deck enhances storytelling, captivates investors, and increases funding success (Sequoia Capital, 2021).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Slide Templates</h2>
        <p className="mb-4">
          A strong pitch deck follows a structured format that highlights key business aspects concisely. Below are the <strong>essential slides</strong> in a pitch deck (Kawasaki, 2015):
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1.1 Key Slides in a Pitch Deck</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Title Slide:</strong> Business name, logo, and tagline</li>
          <li><strong>Problem Statement:</strong> Clearly define the market pain point</li>
          <li><strong>Solution:</strong> Explain how the startup solves the problem</li>
          <li><strong>Market Opportunity:</strong> Present <strong>TAM, SAM, and SOM</strong> (total, serviceable, and obtainable markets)</li>
          <li><strong>Business Model:</strong> Describe revenue streams and monetization strategies</li>
          <li><strong>Go-To-Market Strategy:</strong> Outline how the company will attract customers</li>
          <li><strong>Competitive Analysis:</strong> Highlight differentiation and competitive advantage</li>
          <li><strong>Financial Projections:</strong> Provide revenue forecasts and key financial metrics</li>
          <li><strong>Team:</strong> Showcase leadership experience and relevant skills</li>
          <li><strong>Investment Ask:</strong> Specify funding needs and intended use</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Creating a Pitch Deck</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/SB16xgtFmco"
            title="How to Create a Winning Pitch Deck"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://www.sequoiacap.com/article/writing-a-business-plan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Sequoia Capital Pitch Deck Template
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Example Decks</h2>
        <p className="mb-4">
          Reviewing successful pitch decks provides valuable insights into <strong>presentation style, storytelling, and investor expectations</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Notable Example Pitch Decks</h3>
        <p className="mb-4">Below are links to notable pitch decks that provide real-world examples of successful presentations:</p>

        <div className="example-decks space-y-4 mb-6">
          <div className="deck-item mb-8">
            <strong>Airbnb (2008) Pitch Deck</strong> - Focused on market opportunity and problem-solving
            <div className="mt-4">
              <iframe 
                src="https://www.slideshare.net/slideshow/embed_code/key/KOKP6U9G6TYILf?startSlide=1" 
                width="597" 
                height="486" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                scrolling="no" 
                style={{border: "1px solid #CCC", borderWidth: "1px", marginBottom: "5px", maxWidth: "100%"}} 
                allowFullScreen
              />
              <div style={{marginBottom: "5px"}}>
                <strong>
                  <a href="https://www.slideshare.net/slideshow/airbnb-pitch-deck-from-2008/65585661" title="Airbnb Pitch Deck From 2008" target="_blank" rel="noopener noreferrer">
                    Airbnb Pitch Deck From 2008
                  </a>
                </strong> from <strong>
                  <a href="https://www.slideshare.net/ryangum" target="_blank" rel="noopener noreferrer">Ryan Gum</a>
                </strong>
              </div>
            </div>
          </div>

          <div className="deck-item mb-8">
            <strong>Uber (2011) Pitch Deck</strong> - Emphasized scalability and network effects
            <div className="mt-4">
              <iframe 
                src="https://www.slideshare.net/slideshow/embed_code/key/L4ARVYM14a51lq?startSlide=1" 
                width="597" 
                height="486" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                scrolling="no" 
                style={{border: "1px solid #CCC", borderWidth: "1px", marginBottom: "5px", maxWidth: "100%"}} 
                allowFullScreen
              />
              <div style={{marginBottom: "5px"}}>
                <strong>
                  <a href="https://www.slideshare.net/slideshow/uber-pitch-deck-87832684/87832684" title="Uber Pitch Deck" target="_blank" rel="noopener noreferrer">
                    Uber Pitch Deck
                  </a>
                </strong> from <strong>
                  <a href="https://www.slideshare.net/startuphome" target="_blank" rel="noopener noreferrer">startuphome</a>
                </strong>
              </div>
            </div>
          </div>

          <div className="deck-item mb-8">
            <strong>Dropbox (2007) Pitch Deck</strong> - Used a simple, problem-solution approach
            <div className="mt-4">
              <iframe 
                src="https://www.slideshare.net/slideshow/embed_code/key/u47t8pkdE5kOS?startSlide=1" 
                width="597" 
                height="486" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                scrolling="no" 
                style={{border: "1px solid #CCC", borderWidth: "1px", marginBottom: "5px", maxWidth: "100%"}} 
                allowFullScreen
              />
              <div style={{marginBottom: "5px"}}>
                <strong>
                  <a href="https://www.slideshare.net/slideshow/dropboxs-original-pitch-deck/251815932" title="Dropbox&apos;s original pitch deck" target="_blank" rel="noopener noreferrer">
                    Dropbox&apos;s original pitch deck
                  </a>
                </strong> from <strong>
                  <a href="https://www.slideshare.net/PitchDecks" target="_blank" rel="noopener noreferrer">Pitch Decks</a>
                </strong>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Lessons from Successful Pitch Decks</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Airbnb:</strong> Keep messaging simple and data-driven</li>
          <li><strong>Uber:</strong> Demonstrate market demand and scalability</li>
          <li><strong>Dropbox:</strong> Show proof of concept with minimal slides</li>
        </ul>



        <h2 className="text-xl font-semibold mt-8 mb-4">3. Best Practices</h2>
        <p className="mb-4">
          Crafting an impactful pitch deck requires clarity, brevity, and storytelling. The following best practices enhance the effectiveness of investor presentations (Graham, 2019).
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Pitch Deck Best Practices</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Keep it concise:</strong> Limit slides to 10–12</li>
          <li><strong>Use visuals over text:</strong> Investors prefer data visualization</li>
          <li><strong>Tell a compelling story:</strong> Structure the deck with a clear narrative</li>
          <li><strong>Focus on metrics:</strong> Showcase traction, revenue, and growth potential</li>
          <li><strong>Customize for the audience:</strong> Tailor the pitch based on investor preferences</li>
          <li><strong>Practice delivery:</strong> A confident presentation increases credibility</li>
        </ul>

        <div className="video-tutorial mb-4">
          <h4 className="font-semibold mb-2">Video Tutorial: Pitch Deck Presentation</h4>
          <iframe 
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/sQzD3st8mTk"
            title="How to Perfect Your Pitch Deck Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="additional-resource mb-6">
          <h4 className="font-semibold mb-2">Additional Resource:</h4>
          <a 
            href="https://online.hbs.edu/blog/post/how-to-pitch-a-business-idea#:~:text=Consider%20How%20You%20Present%20Yourself%2C%20Not%20Simply%20Your%20Idea&text=According%20to%20research%20published%20in,perceptions%20about%20character%20and%20trustworthiness.%E2%80%9D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Harvard Business Review – How to Pitch a Startup
          </a>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">References</h2>
        <div className="pl-6 space-y-2 mb-6 text-sm">
          <p>Graham, P. (2019). &ldquo;How to Convince Investors: The Pitch Deck Guide.&rdquo; <em>Startup Handbook</em>.</p>
          <p>Kawasaki, G. (2015). <em>The Art of the Start 2.0: The Time-Tested, Battle-Hardened Guide for Anyone Starting Anything</em>. Portfolio.</p>
          <p>Sequoia Capital. (2021). &ldquo;Writing a Business Plan: Pitch Deck Essentials.&rdquo; <em>Sequoia Insights</em>.</p>
        </div>
      </div>
    </div>
  );
}

PitchDeck.propTypes = {
  isPreview: PropTypes.bool
};

export default PitchDeck;
