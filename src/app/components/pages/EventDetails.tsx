import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Calendar, MapPin, Clock, Users, Share2, Download, ChevronRight, Phone, Mail, Bookmark, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Separator } from '../ui/separator';
import { useState } from 'react';

interface EventDetailsProps {
  onNavigate: (page: string) => void;
}

const relatedEvents = [
  {
    id: 1,
    title: 'Public Works Town Hall',
    date: 'Oct 18',
    time: '7:00 PM',
    location: 'Community Center',
    image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTk4MDYwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Animal Adoption Event',
    date: 'Oct 21',
    time: '11:00 AM - 4:00 PM',
    location: 'Animal Shelter',
    image: 'https://images.unsplash.com/photo-1642210006452-575a979767ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBhZG9wdGlvbiUyMGRvZ3N8ZW58MXx8fHwxNzU5ODI4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Business Development Workshop',
    date: 'Oct 25',
    time: '2:00 PM - 5:00 PM',
    location: 'Chamber of Commerce',
    image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NTk4MDYwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function EventDetails({ onNavigate }: EventDetailsProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onNavigate('home')} className="cursor-pointer">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onNavigate('home')} className="cursor-pointer">
                  Events
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Parks & Rec Fall Festival</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719479757967-c61fd530c625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc1OTgyODcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Parks & Rec Fall Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-[#BF500B] text-white border-0 px-4 py-2">
                Recreation
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                250 Attending
              </Badge>
            </div>
            <h1 className="text-white mb-4 text-5xl">Parks & Rec Fall Festival</h1>
            <p className="text-white/90 max-w-3xl text-xl mb-6">
              Join us for a day of family fun, live entertainment, local food vendors, and exciting activities for all ages at Cunningham Park.
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Date</div>
                  <div className="font-medium">October 15, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Time</div>
                  <div className="font-medium">10:00 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Location</div>
                  <div className="font-medium">Cunningham Park</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  The Annual Parks & Recreation Fall Festival is back for its 15th year! This beloved community event brings together families, friends, and neighbors for a day of celebration in the beautiful Cunningham Park.
                </p>
                <p className="text-gray-600">
                  Experience the best of autumn with a wide variety of activities including carnival games, face painting, pumpkin decorating, hayrides, and a petting zoo. Enjoy live performances from local bands and dance troupes throughout the day on our main stage.
                </p>
                <p className="text-gray-600">
                  Local food vendors will be offering delicious seasonal treats, from apple cider and hot cocoa to BBQ and festival favorites. Browse arts and crafts from local artisans and take home unique handmade items.
                </p>
                
                <div className="bg-[#FFF5E1] rounded-lg p-6 border-l-4 border-[#BF500B] mt-6">
                  <div className="flex gap-3">
                    <Calendar className="h-6 w-6 text-[#BF500B] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2 text-gray-900">Important Information</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Free admission and parking</li>
                        <li>• Rain date: October 16, 2025</li>
                        <li>• Service animals only, please</li>
                        <li>• Bring blankets or chairs for seating</li>
                        <li>• First aid station available on-site</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Event Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: '10:00 AM', activity: 'Festival Opens - Welcome & Opening Ceremony' },
                    { time: '10:30 AM', activity: 'Kids Carnival Games & Activities Begin' },
                    { time: '11:00 AM', activity: 'Live Music: The Joplin Jazz Band' },
                    { time: '12:00 PM', activity: 'Pumpkin Decorating Contest (Registration)' },
                    { time: '1:00 PM', activity: 'Dance Performance: Joplin Youth Dance Troupe' },
                    { time: '2:00 PM', activity: 'Hayride Tours Begin' },
                    { time: '3:00 PM', activity: 'Pumpkin Decorating Contest Awards' },
                    { time: '4:00 PM', activity: 'Live Music: Local Rock Band' },
                    { time: '5:00 PM', activity: 'Festival Closes' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                      <div className="flex-shrink-0 w-24 text-[#005B82]">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location & Map */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Directions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#005B82] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 mb-1">Cunningham Park</p>
                    <p className="text-sm text-gray-600">3925 E 7th St, Joplin, MO 64801</p>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#005B82] mx-auto mb-3" />
                    <p className="text-gray-600 mb-4">Interactive Map</p>
                    <Button className="bg-[#005B82] hover:bg-[#004a6b] text-white">
                      Get Directions
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-gray-900 mb-2">Parking Information</h4>
                    <p className="text-sm text-gray-600">
                      Free parking available in the main lot. Overflow parking in adjacent lots with shuttle service.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="text-gray-900 mb-2">Public Transit</h4>
                    <p className="text-sm text-gray-600">
                      Bus routes 5 and 12 stop near the park entrance. Check schedule for special event times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="sticky top-4 border-2 border-[#005B82]">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-700">Registration Open</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl text-[#005B82]">FREE</span>
                    <p className="text-sm text-gray-600 mt-1">No ticket required</p>
                  </div>
                </div>

                {isRegistered ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-green-900">You're Registered!</h3>
                    <p className="text-sm text-green-700 mb-4">
                      See you at the festival! Check your email for event updates.
                    </p>
                  </div>
                ) : (
                  <Button 
                    onClick={handleRegister}
                    className="w-full bg-[#005B82] hover:bg-[#004a6b] text-white mb-4 h-12"
                  >
                    Register for Free
                  </Button>
                )}

                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                    {isSaved ? 'Saved' : 'Save Event'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
                  >
                    <Download className="h-4 w-4" />
                    Add to Calendar
                  </Button>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 className="h-4 w-4" />
                      Share Event
                    </Button>
                    {showShareMenu && (
                      <Card className="absolute top-full mt-2 w-full shadow-lg z-10">
                        <CardContent className="p-2">
                          <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                            <Facebook className="h-4 w-4" />
                            Facebook
                          </Button>
                          <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                          <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                            <LinkIcon className="h-4 w-4" />
                            Copy Link
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4 text-[#005B82]" />
                    <span>250 people registered</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-[#005B82]" />
                    <span>Updated 2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Organizer */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Organizer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-900 mb-1">Parks & Recreation Department</p>
                  <p className="text-sm text-gray-600">City of Joplin</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                    <Phone className="h-4 w-4" />
                    (417) 624-0820
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card className="bg-gradient-to-br from-[#005B82] to-[#004a6b] text-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-white">Event Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl mb-1">15+</div>
                    <div className="text-xs text-white/80">Food Vendors</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl mb-1">20+</div>
                    <div className="text-xs text-white/80">Activities</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl mb-1">5</div>
                    <div className="text-xs text-white/80">Live Shows</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl mb-1">7 Hrs</div>
                    <div className="text-xs text-white/80">of Fun</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Events */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="mb-0">More Upcoming Events</h2>
            <Button variant="outline" className="gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out" onClick={() => onNavigate('home')}>
              View All Events
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedEvents.map((event) => (
              <Card key={event.id} className="group cursor-pointer border border-[#CCCCCC] hover:border-[#005B82] elevation-2 hover:elevation-3 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 text-center shadow-lg">
                    <div className="text-xs text-gray-600">{event.date.split(' ')[0]}</div>
                    <div className="text-xl text-[#005B82]">{event.date.split(' ')[1]}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 group-hover:text-[#005B82] transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}