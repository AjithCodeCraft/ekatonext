import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Star, 
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  Heart,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  videoTestimonials, 
  successStories, 
  categories, 
  renderStars, 
  renderPlayButton, 
  renderQuoteIcon 
} from '@/data/website/storiesData';

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-play carousel
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % videoTestimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % videoTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Filter stories based on category and search query
  const filteredStories = successStories.filter(story => {
    const matchesCategory = activeCategory === 'All Stories' || 
                           story.condition.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = searchQuery === '' || 
                         story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.testimonial.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.condition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section with Video Testimonial Carousel */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-pink-100 rounded-full mb-6">
              <Heart className="w-5 h-5 text-teal-600 mr-2" />
              <span className="text-teal-700 font-medium">Real Transformation Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-purple-800 to-pink-700 mb-6 leading-tight">
              Healing Journeys
            </h1>
            
            <p className="text-xl md:text-2xl text-teal-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how our integrated approach has transformed thousands of lives through personalized, holistic healing
            </p>
          </div>

          {/* Video Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videoTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full relative">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={testimonial.videoThumbnail} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Play Button */}
                    {renderPlayButton()}
                    
                    {/* Testimonial Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <div className="flex items-center space-x-4 mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white"
                        />
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-white/80 text-sm md:text-base">{testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{testimonial.title}</h2>
                          <p className="text-white/80 text-sm md:text-base mb-4">{testimonial.description}</p>
                          <div className="flex items-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        
                        {testimonial.productName && (
                          <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3">
                            {testimonial.productImage && (
                              <img 
                                src={testimonial.productImage} 
                                alt={testimonial.productName}
                                className="w-12 h-12 object-cover rounded-md"
                              />
                            )}
                            <div>
                              <p className="text-white text-sm font-medium">{testimonial.productName}</p>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-bold">₹{testimonial.price}</span>
                                {testimonial.originalPrice && (
                                  <span className="text-white/70 text-xs line-through">₹{testimonial.originalPrice}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                ) : (
                  <Play size={12} className="ml-0.5" />
                )}
              </button>
              
              <div className="flex space-x-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Our Best Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real people, real transformations
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-full md:w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card 
                key={story.id}
                className="border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Story Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Play Button for Video */}
                    {story.videoThumbnail && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white/30 transition-all cursor-pointer">
                          <Play size={20} className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* User Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{story.name}</h3>
                          <p className="text-white/80 text-sm">{story.age} years • {story.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="p-6 relative">
                    {renderQuoteIcon()}
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-teal-100 text-teal-700">
                          {story.condition}
                        </Badge>
                        <div className="flex">
                          {renderStars(story.rating)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3 italic">
                        "{story.testimonial.substring(0, 150)}..."
                      </p>
                    </div>
                    
                    {/* Before/After */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800 text-xs mb-1">Before:</h4>
                        <p className="text-red-700 text-xs">{story.beforeAfter.before}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 text-xs mb-1">After:</h4>
                        <p className="text-green-700 text-xs">{story.beforeAfter.after}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-teal-200 text-teal-700">
                        {story.program}
                      </Badge>
                      <Link to={`/stories/${story.id}`}>
                        <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 p-0">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No stories found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join thousands who have transformed their health with our unique Five Healers approach
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <CheckCircle className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}