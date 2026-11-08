import { useState } from 'react';
import { Calendar, MapPin, Clock, List, ArrowRight, Users, Bookmark } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventsSectionProps {
  onNavigate?: (page: string) => void;
}

const events = [
  {
    id: 1,
    title: 'City Council Meeting',
    date: 'Oct 7',
    fullDate: 'October 7, 2025',
    time: '6:00 PM',
    location: 'City Hall',
    category: 'Government',
    categoryColor: 'bg-[#005B82]',
    image: 'https://images.unsplash.com/photo-1679697794547-f32eadc11591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5ODI4NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Monthly city council meeting to discuss community issues and upcoming initiatives.',
    attendees: 45,
  },
  {
    id: 2,
    title: 'Community Health Fair',
    date: 'Oct 10',
    fullDate: 'October 10, 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'Memorial Hall',
    category: 'Health',
    categoryColor: 'bg-[#83A226]',
    image: 'https://images.unsplash.com/photo-1563198797-31e0a0dc15c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmYWlyJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTk4Mjg3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Free health screenings, vaccinations, and wellness information for all ages.',
    attendees: 120,
  },
  {
    id: 3,
    title: 'Parks & Rec Fall Festival',
    date: 'Oct 15',
    fullDate: 'October 15, 2025',
    time: '10:00 AM - 5:00 PM',
    location: 'Cunningham Park',
    category: 'Recreation',
    categoryColor: 'bg-[#BF500B]',
    image: 'https://images.unsplash.com/photo-1719479757967-c61fd530c625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc1OTgyODcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Family-friendly activities, food vendors, live music, and fun for all ages.',
    attendees: 250,
  },
  {
    id: 4,
    title: 'Public Works Town Hall',
    date: 'Oct 18',
    fullDate: 'October 18, 2025',
    time: '7:00 PM',
    location: 'Community Center',
    category: 'Government',
    categoryColor: 'bg-[#005B82]',
    image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTk4MDYwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Learn about upcoming infrastructure projects and share your feedback.',
    attendees: 65,
  },
  {
    id: 5,
    title: 'Animal Adoption Event',
    date: 'Oct 21',
    fullDate: 'October 21, 2025',
    time: '11:00 AM - 4:00 PM',
    location: 'Animal Shelter',
    category: 'Community',
    categoryColor: 'bg-[#D1B10E]',
    image: 'https://images.unsplash.com/photo-1642210006452-575a979767ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBhZG9wdGlvbiUyMGRvZ3N8ZW58MXx8fHwxNzU5ODI4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Meet adoptable pets and find your new furry family member. Reduced fees!',
    attendees: 85,
  },
  {
    id: 6,
    title: 'Business Development Workshop',
    date: 'Oct 25',
    fullDate: 'October 25, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Chamber of Commerce',
    category: 'Business',
    categoryColor: 'bg-[#005B82]',
    image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTk4MDYwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Learn about permits, licenses, and resources for small business owners.',
    attendees: 40,
  },
];

export function EventsSection({ onNavigate }: EventsSectionProps = { onNavigate: () => {} }) {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Government', 'Health', 'Recreation', 'Community', 'Business'];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section className="py-20 bg-[#00A8B5] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#005B82] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#83A226]/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4">
            <Calendar className="h-4 w-4 text-[#005B82]" />
            <span className="text-sm text-[#005B82]">What's Happening</span>
          </div>
          <h2 className="mb-4 text-white text-[40px]">Upcoming Events</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Join us at community events, city meetings, and special programs throughout Joplin
          </p>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full ${
                  selectedCategory === category 
                    ? 'bg-[#005B82] hover:bg-[#004a6b] text-white' 
                    : 'bg-white hover:bg-gray-50 text-[#005B82] border-[#005B82]'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('list')}
              className={`rounded-md ${view === 'list' ? 'bg-[#005B82]' : ''}`}
            >
              <List className="h-4 w-4 mr-2" />
              List
            </Button>
            <Button
              variant={view === 'calendar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('calendar')}
              className={`rounded-md ${view === 'calendar' ? 'bg-[#005B82]' : ''}`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </Button>
          </div>
        </div>

        {/* Events Display */}
        {view === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-[#FFF5E1] rounded-2xl overflow-hidden elevation-2 hover:elevation-3 transition-all duration-300 hover:-translate-y-2 border border-[#CCCCCC]"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <Badge className={`absolute top-4 left-4 ${event.categoryColor} text-white border-0`}>
                    {event.category}
                  </Badge>

                  {/* Bookmark Icon */}
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Bookmark className="h-4 w-4 text-gray-700" />
                  </button>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#FFF5E1] rounded-xl p-3 shadow-lg border-2 border-white">
                    <div className="text-center">
                      <div className="text-xs text-gray-700 uppercase tracking-wide">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-2xl text-[#005B82] leading-none mt-1">
                        {event.date.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-[#005B82] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Time & Location */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-8 h-8 bg-white/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-4 w-4 text-[#005B82]" />
                      </div>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-8 h-8 bg-white/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-[#005B82]" />
                      </div>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/10">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} going</span>
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-[#005B82] gap-1 group-hover:gap-2 transition-all"
                      onClick={() => onNavigate?.('event-details')}
                    >
                      Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#005B82] to-[#83A226] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-2">Calendar View</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                View all upcoming events in a monthly calendar format with quick access to event details
              </p>
              <div className="inline-flex gap-2 text-sm text-gray-500">
                <div className="px-3 py-1 bg-gray-100 rounded-full">October 2025</div>
                <div className="px-3 py-1 bg-gray-100 rounded-full">{filteredEvents.length} Events</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#005B82] hover:bg-[#004a6b] text-white shadow-lg hover:shadow-xl transition-all">
              View Full Calendar
              <Calendar className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white rounded-xl shadow-sm gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-md transition-all duration-150 ease-in-out"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
