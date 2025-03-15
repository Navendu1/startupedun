export default function StartupStoriesVideo() {
  const playlists = [
    {
      id: 1,
      title: "Startup Success Stories",
      url: "https://youtube.com/playlist?list=PLPDvoLV_RcJQY-L5GO32KUmUW70AiU3UH&si=_9T3EytB1VxlbpaN",
      thumbnail: "https://placehold.co/300x200/3B82F6/FFFFFF?text=Playlist+1"
    },
    {
      id: 2,
      title: "Entrepreneur Journeys",
      url: "https://youtube.com/playlist?list=PL8XqTmg5WK1PNvBEDukLubPeKAFipVpaH&si=1_HxocZcP5vKSbF5",
      thumbnail: "https://placehold.co/300x200/10B981/FFFFFF?text=Playlist+2"
    },
    {
      id: 3,
      title: "Innovation Stories",
      url: "https://youtube.com/playlist?list=PLQ-uHSnFig5Pm77G19hXiQvJWD0dM-pcI&si=EiG-8XgGMIADS00K",
      thumbnail: "https://placehold.co/300x200/F59E0B/FFFFFF?text=Playlist+3"
    },
    {
      id: 4,
      title: "Startup Journey",
      url: "https://youtube.com/playlist?list=PLPDvoLV_RcJQajI1WNX8bpeDR54n_YW5L&si=1DwCrT-aCEUAUkE5",
      thumbnail: "https://placehold.co/300x200/EF4444/FFFFFF?text=Playlist+4"
    }
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Video Success Stories</h2>
      <p className="text-gray-600 mb-6">
        Watch inspiring stories from successful startup founders
      </p>
      
      <div className="results-grid">
        {playlists.map(playlist => (
          <a 
            key={playlist.id} 
            href={playlist.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="result-card overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img src={playlist.thumbnail} alt={playlist.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{playlist.title}</h3>
              <p className="text-blue-600 hover:underline">View Playlist →</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
