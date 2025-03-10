import { useState } from 'react';
import './tools.css';
import { Button } from "../../components/ui/button";

export default function SlideDeckCreator() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const templates = [
    {
      id: 'pitch-deck',
      name: 'Pitch Deck',
      slides: [
        { type: 'title', name: 'Title Slide' },
        { type: 'problem', name: 'Problem Statement' },
        { type: 'solution', name: 'Solution' },
        { type: 'market', name: 'Market Size' },
        { type: 'business', name: 'Business Model' },
        { type: 'traction', name: 'Traction' },
        { type: 'team', name: 'Team' },
        { type: 'financials', name: 'Financials' },
        { type: 'ask', name: 'The Ask' }
      ]
    },
    {
      id: 'company-intro',
      name: 'Company Introduction',
      slides: [
        { type: 'title', name: 'Title Slide' },
        { type: 'about', name: 'About Us' },
        { type: 'products', name: 'Products/Services' },
        { type: 'clients', name: 'Our Clients' },
        { type: 'contact', name: 'Contact Information' }
      ]
    }
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setSlides(template.slides.map(slide => ({
      ...slide,
      content: {
        title: '',
        text: '',
        bullets: [],
        image: null
      }
    })));
    setCurrentSlide(0);
  };

  const handleSlideContentChange = (e) => {
    const { name, value } = e.target;
    setSlides(prev => prev.map((slide, index) => 
      index === currentSlide
        ? {
            ...slide,
            content: {
              ...slide.content,
              [name]: value
            }
          }
        : slide
    ));
  };

  return (
    <div className="tool-page">
      <h1 className="text-3xl font-bold mb-8">Slide Deck Creator</h1>

      {!selectedTemplate ? (
        <div className="tool-section">
          <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <div 
                key={template.id}
                className="result-card cursor-pointer hover:border-blue-500"
                onClick={() => handleTemplateSelect(template)}
              >
                <h3 className="text-lg font-semibold mb-4">{template.name}</h3>
                <div className="text-sm text-gray-600">
                  {template.slides.length} slides included:
                </div>
                <ul className="mt-2 space-y-1 text-sm text-gray-500">
                  {template.slides.map((slide, index) => (
                    <li key={index}>• {slide.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {/* Slide Navigation */}
          <div className="tool-section md:col-span-1">
            <h3 className="font-semibold mb-4">Slides</h3>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`p-2 rounded cursor-pointer ${
                    currentSlide === index
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  {index + 1}. {slide.name}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Editor */}
          <div className="tool-section md:col-span-3">
            <h3 className="font-semibold mb-4">
              Edit Slide: {slides[currentSlide]?.name}
            </h3>
            <div className="tool-form">
              <div className="slide-preview">
                {slides[currentSlide]?.content.title || 'Slide Preview'}
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={slides[currentSlide]?.content.title || ''}
                  onChange={handleSlideContentChange}
                  placeholder="Slide Title"
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  name="text"
                  rows="6"
                  value={slides[currentSlide]?.content.text || ''}
                  onChange={handleSlideContentChange}
                  placeholder="Slide Content"
                />
              </div>
              <div className="flex gap-4">
                <Button>Add Image</Button>
                <Button>Add Bullet Points</Button>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                onClick={() => setSelectedTemplate(null)}
                variant="outline"
              >
                Change Template
              </Button>
              <Button>
                Export Presentation
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
