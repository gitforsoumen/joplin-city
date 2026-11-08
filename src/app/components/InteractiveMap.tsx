import { MapPin, Filter, ZoomIn, ZoomOut, Navigation, Phone, Clock, ExternalLink, Building2, Heart, Shield, Trees, Waves, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

interface MapLocation {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  x: number;
  y: number;
  color: string;
  icon: any;
}

const joplinLocations: MapLocation[] = [
  {
    id: 1,
    name: 'Joplin City Hall',
    category: 'Government',
    address: '602 S Main St, Joplin, MO 64801',
    phone: '(417) 624-0820',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    description: 'Main government building housing city administration, council chambers, and various departments.',
    x: 45,
    y: 40,
    color: '#005B82',
    icon: Building2,
  },
  {
    id: 2,
    name: 'Joplin Health Department',
    category: 'Health',
    address: '321 E 4th St, Joplin, MO 64801',
    phone: '(417) 625-5200',
    hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
    description: 'Public health services including immunizations, environmental health, and wellness programs.',
    x: 60,
    y: 35,
    color: '#83A226',
    icon: Heart,
  },
  {
    id: 3,
    name: 'Joplin Police Department',
    category: 'Safety',
    address: '303 E 3rd St, Joplin, MO 64801',
    phone: '(417) 623-3131',
    hours: '24/7',
    description: 'Law enforcement services, emergency response, and community safety programs.',
    x: 55,
    y: 32,
    color: '#BF500B',
    icon: Shield,
  },
  {
    id: 4,
    name: 'Joplin Animal Shelter',
    category: 'Service',
    address: '417 S Jackson Ave, Joplin, MO 64801',
    phone: '(417) 623-3642',
    hours: 'Tue-Fri: 12:00 PM - 5:00 PM, Sat: 10:00 AM - 3:00 PM',
    description: 'Animal control, adoption services, and pet licensing.',
    x: 35,
    y: 65,
    color: '#D1B10E',
    icon: Heart,
  },
  {
    id: 5,
    name: 'Cunningham Park',
    category: 'Recreation',
    address: '3925 E 7th St, Joplin, MO 64801',
    phone: '(417) 624-0820',
    hours: 'Daily: 6:00 AM - 10:00 PM',
    description: 'Large public park with sports facilities, walking trails, and picnic areas.',
    x: 70,
    y: 55,
    color: '#83A226',
    icon: Trees,
  },
  {
    id: 6,
    name: 'Joplin Public Library',
    category: 'Recreation',
    address: '300 S Main St, Joplin, MO 64801',
    phone: '(417) 623-7953',
    hours: 'Mon-Thu: 9:00 AM - 8:00 PM, Fri-Sat: 9:00 AM - 5:00 PM',
    description: 'Public library with books, digital resources, and community programs.',
    x: 43,
    y: 45,
    color: '#005B82',
    icon: Building2,
  },
  {
    id: 7,
    name: 'Joplin Wastewater Treatment',
    category: 'Service',
    address: '1501 S Joplin Ave, Joplin, MO 64801',
    phone: '(417) 624-0820',
    hours: 'Mon-Fri: 8:00 AM - 4:00 PM',
    description: 'Water treatment and environmental services for the city.',
    x: 25,
    y: 70,
    color: '#005B82',
    icon: Waves,
  },
  {
    id: 8,
    name: 'Memorial Hall',
    category: 'Recreation',
    address: '212 W 8th St, Joplin, MO 64801',
    phone: '(417) 624-0820',
    hours: 'Event-based',
    description: 'Historic event venue and community gathering space.',
    x: 40,
    y: 28,
    color: '#D1B10E',
    icon: Award,
  },
];

const categories = [
  { name: 'All', color: 'bg-gray-500', count: joplinLocations.length },
  { name: 'Government', color: 'bg-[#005B82]', count: joplinLocations.filter(l => l.category === 'Government').length },
  { name: 'Health', color: 'bg-[#83A226]', count: joplinLocations.filter(l => l.category === 'Health').length },
  { name: 'Safety', color: 'bg-[#BF500B]', count: joplinLocations.filter(l => l.category === 'Safety').length },
  { name: 'Service', color: 'bg-[#D1B10E]', count: joplinLocations.filter(l => l.category === 'Service').length },
  { name: 'Recreation', color: 'bg-[#83A226]', count: joplinLocations.filter(l => l.category === 'Recreation').length },
];

export function InteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [zoom, setZoom] = useState(1);

  const filteredLocations = selectedCategory === 'All'
    ? joplinLocations
    : joplinLocations.filter(loc => loc.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-[#005B82] border-[#005B82]">
            <MapPin className="h-3 w-3 mr-1" />
            Interactive City Map
          </Badge>
          <h2 className="mb-4 text-[40px]">Explore Joplin Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover city facilities, services, and recreational areas throughout Joplin, Missouri
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category.name);
                  setSelectedLocation(null);
                }}
                className={`gap-2 ${
                  selectedCategory === category.name
                    ? category.color + ' text-white hover:opacity-0'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${category.color}`} />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg border-2">
              {/* Map Controls */}
              <div className="bg-gradient-to-r from-[#005B82] to-[#004a6b] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  <span>Joplin, Missouri</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={() => setZoom(Math.max(zoom - 0.1, 0.8))}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-[600px] bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 overflow-hidden">
                {/* Map Base - Representing Joplin street grid */}
                <div
                  className="absolute inset-0 transition-transform duration-300"
                  style={{ transform: `scale(${zoom})` }}
                >
                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #00000020 1px, transparent 1px),
                        linear-gradient(to bottom, #00000020 1px, transparent 1px)
                      `,
                      backgroundSize: '50px 50px',
                    }}
                  />

                  {/* Main Roads (representing Route 66, Main St, Rangeline Rd) */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[45%] left-0 right-0 h-3 bg-gray-400/40" />
                    <div className="absolute top-[30%] left-0 right-0 h-2 bg-gray-300/30" />
                    <div className="absolute left-[45%] top-0 bottom-0 w-3 bg-gray-400/40" />
                    <div className="absolute left-[60%] top-0 bottom-0 w-2 bg-gray-300/30" />
                  </div>

                  {/* Location Markers */}
                  {filteredLocations.map((location) => (
                    <div
                      key={location.id}
                      className="absolute group cursor-pointer z-10"
                      style={{
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="relative">
                        {/* Pulse Animation */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: location.color }}
                        />
                        
                        {/* Pin */}
                        <div
                          className={`relative w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all duration-300 ${
                            selectedLocation?.id === location.id
                              ? 'scale-150 z-50'
                              : 'group-hover:scale-125'
                          }`}
                          style={{ backgroundColor: location.color }}
                        >
                          <location.icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Quick Tooltip */}
                        {selectedLocation?.id !== location.id && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-gray-900 text-white rounded-lg shadow-xl p-2 whitespace-nowrap text-xs">
                              {location.name}
                              <div className="w-2 h-2 bg-gray-900 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* City Label */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
                    <p className="text-sm mb-1">Joplin, Missouri</p>
                    <p className="text-xs text-gray-600">
                      Showing {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Details Panel */}
          <div className="lg:col-span-1">
            {selectedLocation ? (
              <Card className="shadow-lg sticky top-24 border-2">
                <CardHeader className="pb-3" style={{ backgroundColor: selectedLocation.color + '15' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                      style={{ backgroundColor: selectedLocation.color }}
                    >
                      <selectedLocation.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out" style={{ borderColor: selectedLocation.color, color: selectedLocation.color }}>
                      {selectedLocation.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{selectedLocation.name}</CardTitle>
                  <CardDescription>{selectedLocation.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="text-sm">{selectedLocation.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <a href={`tel:${selectedLocation.phone}`} className="text-sm text-[#005B82] hover:underline">
                          {selectedLocation.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Hours</p>
                        <p className="text-sm">{selectedLocation.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <Button className="w-full gap-2 text-white elevation-2 hover:elevation-3" style={{ backgroundColor: selectedLocation.color }}>
                      <ExternalLink className="h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                      More Information
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg border-2 border-dashed">
                <CardContent className="flex flex-col items-center justify-center h-[400px] text-center p-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-10 w-10 text-[#005B82]" />
                  </div>
                  <h3 className="mb-2">Select a Location</h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Click on any marker on the map to view detailed information about that facility
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Legend */}
        <Card className="mt-6 border-2">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-sm text-gray-600">Legend:</span>
              {categories.filter(c => c.name !== 'All').map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div className={`w-4 h-4 ${category.color} rounded-full shadow-sm`} />
                  <span className="text-sm text-gray-700">{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
