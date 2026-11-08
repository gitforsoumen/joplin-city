import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsItems = [
  {
    id: 1,
    title: 'New Community Center Opens in Downtown Joplin',
    category: 'Parks',
    date: 'Oct 1',
    image: 'https://images.unsplash.com/photo-1703688829492-0cab2287d358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJrJTIwcGVvcGxlfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'The new 50,000 sq ft facility features a gymnasium, meeting rooms, and recreational spaces.',
  },
  {
    id: 2,
    title: 'City Council Approves 2026 Infrastructure Budget',
    category: 'City Council',
    date: 'Sep 28',
    image: 'https://images.unsplash.com/photo-1640556409699-eab69072fec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: '$45 million allocated for road repairs and public transit improvements.',
  },
  {
    id: 3,
    title: 'Health Department Launches Free Vaccination Clinics',
    category: 'Health',
    date: 'Sep 25',
    image: 'https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Weekly clinics now available at three locations throughout the city.',
  },
  {
    id: 4,
    title: 'Police Department Community Outreach Program Expands',
    category: 'Police',
    date: 'Sep 20',
    image: 'https://images.unsplash.com/photo-1663511172369-34b8b9f04ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwYWVyaWFsfGVufDF8fHx8MTc1OTQ5MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'New neighborhood watch programs and youth engagement initiatives.',
  },
];

const categories = ['All', 'City Council', 'Parks', 'Health', 'Police'];

const categoryColors: Record<string, string> = {
  'City Council': 'bg-[#005B82]',
  'Parks': 'bg-[#83A226]',
  'Health': 'bg-[#D1B10E]',
  'Police': 'bg-[#BF500B]',
};

export function NewsCarousel() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, filteredNews.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <Badge className="mb-4 bg-blue-50 text-[#005B82] border-[#005B82]">
              Latest Updates
            </Badge>
            <h2 className="mb-2 text-[40px]">Latest News</h2>
            <p className="text-gray-600">Stay updated with what's happening in Joplin</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`${selectedCategory === category ? 'bg-[#005B82] hover:bg-[#004a6b] text-white' : 'hover:bg-gray-50 text-[#005B82] hover:text-[#005B82] border-[#005B82]'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Card className="group overflow-hidden border border-[#CCCCCC] hover:border-[#005B82] transition-all duration-300 elevation-2 hover:elevation-3 cursor-pointer h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge 
                        className={`absolute top-4 left-4 ${categoryColors[item.category] || 'bg-[#005B82]'} text-white shadow-lg`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="mb-3 group-hover:text-[#005B82] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center gap-2 text-[#005B82] text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredNews.length > itemsPerView && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl disabled:opacity-30 hover:shadow-2xl w-12 h-12 rounded-full border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] transition-all duration-150 ease-in-out"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl disabled:opacity-30 hover:shadow-2xl w-12 h-12 rounded-full border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] transition-all duration-150 ease-in-out"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
