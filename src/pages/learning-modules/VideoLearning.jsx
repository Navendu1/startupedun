import { useState } from 'react';

export default function VideoLearning() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCards = [
    {
      title: "Startup School",
      description: "by Y Combinator",
      playlist: "22 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB" // Example URL
    },
    {
      title: "How to Start a Startup",
      description: "Learn how to start a startup with this lecture series from Paul Graham, Sam Altman, Peter Thiel, Marc  Andreessen, YC founders, and more.",
      playlist: "21 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1"
    },
    {
      title: "कामयाबी ! Entrepreneurship Skills (Hindi)",
      description: "by SkillTrain",
      playlist: "18 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PL9Q_x6Cmsav9wGgj-0QXMM6nThdv7OIdO"
    },
    {
      title: "Arise ! Entrepreneurship Skills (English)",
      description: "by SkillTrain",
      playlist: "20 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PL9Q_x6Cmsav8_9F34mziRq7Q1a_qV8IyY"
    },
    {
      title: "Startup India Learning Program",
      description: "Startup India ",
      playlist: " 37 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PLWz_ZaJ-oZi0cpYmCJvq8GtVh3MZWWHXv"
    },
    {
      title: "Entrepreneurship video course",
      description: "by Supertrends Institute",
      playlist: "38 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PLyxqTGsRMin2p_sqUOsCwElRaOjUTMg_j"
    },
    {
      title: "Pathway Through Entrepreneurship",
      description: "by Innovation Boost Zone",
      playlist: "14 videos",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PL1Ab5TeRFdE3mzQM-gBTxMfkhBrTvAHjf"
    },
    {
      title: "Growth Strategies",
      description: "Proven strategies for scaling your startup",
      playlist: "21:30",
      thumbnail: "🎥",
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Video-based Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoCards.map((card, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer bg-card"
            onClick={() => setSelectedVideo(card)}
          >
            <div className="text-4xl mb-4">{card.thumbnail}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{card.description}</p>
            <div className="text-sm text-gray-500">Playlist: {card.playlist}</div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-background rounded-lg p-6 w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedVideo.title}</h2>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={selectedVideo.videoUrl}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
