export default function EducationResources() {
  const resources = [
    {
      id: 1,
      title: "Top Startup Success Story Websites",
      description: "Here are some of the best websites where you can read startup success stories:",
      websites: [
        { name: "Y Combinator (YC) Blog", url: "https://www.ycombinator.com", description: "Features startup success stories from companies like Airbnb, Dropbox, and Stripe." },
        { name: "TechCrunch - Startup Section", url: "https://techcrunch.com", description: "Covers emerging startups, their growth journeys, and investment stories." },
        { name: "Entrepreneur - Success Stories", url: "https://www.entrepreneur.com", description: "Detailed insights into how entrepreneurs built their businesses." },
        { name: "Forbes - Entrepreneurs", url: "https://www.forbes.com", description: "Covers inspirational startup journeys and business insights." },
        { name: "YourStory", url: "https://yourstory.com", description: "India's largest platform featuring startup success stories and funding updates." },
        { name: "Inc. - Startup Section", url: "https://www.inc.com", description: "Features real-world startup stories and business advice." },
        { name: "The Hustle", url: "https://thehustle.com", description: "Engaging and fun startup case studies with deep analysis." },
        { name: "Business Insider - Startup Section", url: "https://www.businessinsider.com", description: "Reports on startup funding, acquisitions, and success stories." },
        { name: "Startup Grind", url: "https://www.startupgrind.com", description: "Features interviews and insights from successful startup founders worldwide." },
        { name: "CB Insights - Startup Stories", url: "https://www.cbinsights.com", description: "Data-driven startup case studies, success stories, and industry insights." },
        { name: "Failory", url: "https://www.failory.com", description: "Includes both success and failure case studies, providing a balanced perspective." },
        { name: "Foundr", url: "https://foundr.com", description: "Features startup success stories, business growth strategies, and founder interviews." },
        { name: "Indie Hackers", url: "https://www.indiehackers.com", description: "A platform where indie entrepreneurs share their startup journeys and revenue numbers." },
        { name: "Harvard Business Review - Entrepreneurship", url: "https://hbr.org", description: "Features case studies on startups, business strategies, and innovation." },
        { name: "Startup India", url: "https://www.startupindia.gov.in", description: "Government-backed platform showcasing Indian startup success stories." },
        { name: "Crunchbase News", url: "https://news.crunchbase.com", description: "Covers startup funding, acquisitions, and success stories." },
        { name: "Fast Company - Entrepreneurs Section", url: "https://www.fastcompany.com", description: "Features inspiring stories of successful entrepreneurs and businesses." },
        { name: "Business Model Navigator", url: "https://businessmodelnavigator.com", description: "In-depth case studies on how startups succeed with innovative business models." },
        { name: "Startup Bonsai", url: "https://startupbonsai.com", description: "Provides insights, strategies, and success stories of online startups." },
        { name: "The Startup (Medium Publication)", url: "https://medium.com", description: "One of Medium's largest publications featuring startup case studies and advice." }
      ]
    }
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Success Story Resources</h2>
      <p className="text-gray-600 mb-6">
        Discover inspiring startup journeys and entrepreneurial insights from around the world
      </p>
      
      <div className="results-grid">
        {resources.map(resource => (
          <div key={resource.id} className="result-card p-6">
            <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            

            {resource.websites && (
              <div className="space-y-4 mt-4">
                <h4 className="font-semibold text-gray-700">Resource Websites</h4>
                <div className="space-y-3">
                  {resource.websites.map((site, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="font-semibold text-blue-600 hover:text-blue-800 mb-2">{site.name} 🔗</div>
                        <div className="text-sm text-gray-600">{site.description}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
