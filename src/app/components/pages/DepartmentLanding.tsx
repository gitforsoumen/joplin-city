import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Syringe, Baby, Dog, Microscope, Bell, Calendar, Mail, Phone, MapPin, FileText, Clock, ArrowRight, Newspaper, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const services = [
  {
    icon: Syringe,
    title: 'WIC Program',
    description: 'Women, Infants, and Children nutrition assistance',
    color: '#83A226',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Immunization clinics for children and adults',
    color: '#005B82',
  },
  {
    icon: Dog,
    title: 'Animal Control',
    description: 'Pet licensing, stray animals, and animal welfare',
    color: '#BF500B',
  },
  {
    icon: Microscope,
    title: 'Environmental Health',
    description: 'Food safety, water quality, and sanitation inspections',
    color: '#D1B10E',
  },
];

const news = [
  {
    id: 1,
    title: 'Free Flu Shot Clinics Begin October 15',
    date: 'Oct 1',
    category: 'Announcement',
    excerpt: 'Walk-in clinics available at three locations throughout the city.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwY2xpbmljfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'New WIC Office Hours Announced',
    date: 'Sep 28',
    category: 'Update',
    excerpt: 'Extended hours now available on Thursdays until 7pm.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTk0OTEzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Mosquito Control Update',
    date: 'Sep 25',
    category: 'Safety',
    excerpt: 'Fogging schedule and prevention tips for residents.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBoZWFsdGh8ZW58MXx8fHwxNzU5NDkxMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const upcomingEvents = [
  {
    title: 'Community Health Fair',
    date: 'Oct 10',
    time: '9:00 AM - 3:00 PM',
    location: 'Memorial Hall',
    description: 'Free health screenings and wellness information',
  },
  {
    title: 'Vaccination Clinic',
    date: 'Oct 15',
    time: '2:00 PM - 6:00 PM',
    location: 'Health Department',
    description: 'Walk-in flu shots and routine immunizations',
  },
  {
    title: 'WIC Nutrition Workshop',
    date: 'Oct 20',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center',
    description: 'Healthy eating tips for families',
  },
];

const staffMembers = [
  { name: 'Dr. Sarah Mitchell', role: 'Health Director', phone: '(417) 624-0820', email: 's.mitchell@joplinmo.org' },
  { name: 'John Davis', role: 'Environmental Health Manager', phone: '(417) 624-0821', email: 'j.davis@joplinmo.org' },
  { name: 'Lisa Thompson', role: 'WIC Coordinator', phone: '(417) 624-0822', email: 'l.thompson@joplinmo.org' },
  { name: 'Mike Roberts', role: 'Animal Control Supervisor', phone: '(417) 624-0823', email: 'm.roberts@joplinmo.org' },
];

interface DepartmentLandingProps {
  onNavigate: (page: string) => void;
}

export function DepartmentLanding({ onNavigate }: DepartmentLandingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#CCCCCC]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onNavigate('home')} className="cursor-pointer hover:text-[#005B82] transition-colors duration-150">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => onNavigate('departments')} className="cursor-pointer hover:text-[#005B82] transition-colors duration-150">
                  Departments
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Health Department</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section - Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FAFDFF] via-[#E8F6FF] to-[#E0F6FF]">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005B82] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#83A226] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Department Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center elevation-4 ripple">
                  <Syringe className="h-12 w-12 text-[#005B82]" />
                </div>
                <div>
                  <Badge className="bg-[#005B82] text-white border-0 mb-3 elevation-2">
                    City Department
                  </Badge>
                  <h1 className="text-[#005B82] mb-0" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>
                    Health Department
                  </h1>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Promoting health and wellness in our community through compassionate care, education, and prevention programs
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#005B82', fontWeight: 700 }}>15K+</div>
                  <div className="text-xs text-gray-600">Served Annually</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#83A226', fontWeight: 700 }}>24/7</div>
                  <div className="text-xs text-gray-600">Emergency Line</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#BF500B', fontWeight: 700 }}>4</div>
                  <div className="text-xs text-gray-600">Core Services</div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="flex flex-wrap gap-3">
                <Button 
                  variant="default" 
                  className="bg-[#005B82] hover:bg-[#004a6b] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150"
                >
                  <FileText className="h-4 w-4" />
                  Services
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                >
                  Programs
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                >
                  <Users className="h-4 w-4" />
                  Staff
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                >
                  Contact
                </Button>
              </nav>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden elevation-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Health Department Clinic"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 elevation-3">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-6 w-6 text-[#83A226]" />
                      <span style={{ fontSize: '16px', fontWeight: 600, color: '#005B82' }}>
                        Serving Joplin Since 1950
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Committed to protecting and promoting the health of all residents through quality services and education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#005B82] to-transparent" />
      </div>

      {/* Main Content - White Background */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Welcome Card */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                  <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Welcome</h2>
                </div>
                <Card className="border-2 border-[#CCCCCC] elevation-3 hover:elevation-4 hover:border-[#005B82] transition-all duration-200 ripple">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                      The Joplin Health Department provides essential public health services including immunizations,
                      vital records, environmental health inspections, and the WIC nutrition program. We are committed
                      to ensuring the health and safety of our community through education, prevention, and quality services.
                    </p>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                      Our dedicated team works to address public health concerns, respond to disease outbreaks, and
                      promote healthy lifestyles for all residents. Visit us to learn more about our programs and services.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Services Grid */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                  <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card
                      key={service.title}
                      className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] elevation-2 hover:elevation-4 transition-all duration-150 ripple"
                      onClick={() => {
                        if (service.title === 'Animal Control') {
                          onNavigate('animal-control');
                        }
                      }}
                    >
                      <CardContent className="p-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-150 elevation-2"
                          style={{ backgroundColor: service.color }}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="mb-2 group-hover:text-[#005B82] transition-colors" style={{ fontSize: '18px', fontWeight: 600 }}>
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-[#005B82] group-hover:gap-3 transition-all" style={{ fontSize: '14px', fontWeight: 500 }}>
                          <span>Learn more</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Department News - Bento Box Single Row */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                    <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Department News</h2>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                {/* Bento Grid - Single Row Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Featured Story - Large Card (6 columns) */}
                  <Card 
                    className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] overflow-hidden elevation-2 hover:elevation-4 transition-all duration-200 ripple md:col-span-6 relative h-[400px]"
                  >
                    <ImageWithFallback
                      src={news[0].image}
                      alt={news[0].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-[#005B82] text-white border-0 elevation-3">
                        <Newspaper className="h-3 w-3 mr-1" />
                        {news[0].category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge variant="outline" className="border-white/80 bg-white/90 backdrop-blur-sm text-gray-700 mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {news[0].date}
                      </Badge>
                      <h3 className="text-white mb-3 group-hover:text-blue-200 transition-colors leading-tight" style={{ fontSize: '24px', fontWeight: 600 }}>
                        {news[0].title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                        {news[0].excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all" style={{ fontSize: '14px', fontWeight: 500 }}>
                        <span>Read full article</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Card>

                  {/* Secondary Story 1 - Medium Card (3 columns) */}
                  <Card 
                    className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] overflow-hidden elevation-2 hover:elevation-4 transition-all duration-200 ripple md:col-span-3"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={news[1].image}
                        alt={news[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#83A226] text-white border-0 elevation-2">
                          <Newspaper className="h-3 w-3 mr-1" />
                          {news[1].category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="outline" className="border-white/80 bg-white/90 backdrop-blur-sm text-gray-700">
                          <Calendar className="h-3 w-3 mr-1" />
                          {news[1].date}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-3 group-hover:text-[#005B82] transition-colors leading-snug" style={{ fontSize: '16px', fontWeight: 600 }}>
                        {news[1].title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                        {news[1].excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[#005B82] group-hover:gap-3 transition-all" style={{ fontSize: '13px', fontWeight: 500 }}>
                        <span>Read more</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Secondary Story 2 - Medium Card (3 columns) */}
                  <Card 
                    className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] overflow-hidden elevation-2 hover:elevation-4 transition-all duration-200 ripple md:col-span-3"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={news[2].image}
                        alt={news[2].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#BF500B] text-white border-0 elevation-2">
                          <Newspaper className="h-3 w-3 mr-1" />
                          {news[2].category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="outline" className="border-white/80 bg-white/90 backdrop-blur-sm text-gray-700">
                          <Calendar className="h-3 w-3 mr-1" />
                          {news[2].date}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-3 group-hover:text-[#005B82] transition-colors leading-snug" style={{ fontSize: '16px', fontWeight: 600 }}>
                        {news[2].title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                        {news[2].excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[#005B82] group-hover:gap-3 transition-all" style={{ fontSize: '13px', fontWeight: 500 }}>
                        <span>Read more</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="border-2 border-[#005B82] elevation-4 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
                <CardHeader className="bg-[#005B82] text-white p-6">
                  <CardTitle className="text-white flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#005B82]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <MapPin className="h-5 w-5 text-[#005B82]" />
                    </div>
                    <div>
                      <p className="mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>321 E 4th Street</p>
                      <p className="text-gray-600" style={{ fontSize: '14px' }}>Joplin, MO 64801</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#005B82]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <Phone className="h-5 w-5 text-[#005B82]" />
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: 500 }}>(417) 624-0820</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#005B82]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <Mail className="h-5 w-5 text-[#005B82]" />
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: 500 }}>health@joplinmo.org</p>
                  </div>
                  <div className="pt-4 border-t border-[#005B82]/20">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#005B82]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                        <Clock className="h-5 w-5 text-[#005B82]" />
                      </div>
                      <div>
                        <p className="mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>Office Hours</p>
                        <p className="text-gray-600" style={{ fontSize: '14px' }}>Monday - Friday</p>
                        <p className="text-gray-600" style={{ fontSize: '14px' }}>8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#005B82] hover:bg-[#004a6b] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-2 border-[#CCCCCC] elevation-3 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#83A226] to-[#6d8621] text-white p-6">
                  <CardTitle className="text-white flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="group cursor-pointer p-4 rounded-xl border-2 border-[#CCCCCC] hover:border-[#83A226] hover:bg-green-50/30 transition-all duration-150 ripple"
                    >
                      <div className="flex gap-3 mb-3">
                        <div className="w-14 h-14 bg-[#83A226] rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0 elevation-2">
                          <div className="text-xs uppercase leading-none" style={{ fontSize: '10px' }}>
                            {event.date.split(' ')[0]}
                          </div>
                          <div className="text-2xl leading-none mt-1" style={{ fontWeight: 700 }}>
                            {event.date.split(' ')[1]}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 group-hover:text-[#83A226] transition-colors leading-snug" style={{ fontSize: '14px', fontWeight: 600 }}>
                            {event.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1 ml-17" style={{ fontSize: '12px' }}>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 border-[#83A226] text-[#83A226] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    <Calendar className="h-4 w-4" />
                    View Full Calendar
                  </Button>
                </CardContent>
              </Card>

              {/* Email Alerts */}
              <Card className="border-2 border-[#CCCCCC] elevation-3 bg-gradient-to-br from-orange-50/30 to-white overflow-hidden">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    <Bell className="h-5 w-5 text-[#BF500B]" />
                    Email Alerts
                  </CardTitle>
                  <CardDescription style={{ fontSize: '14px' }}>Subscribe to health department updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 px-6 pb-6">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="border-2 border-[#CCCCCC] focus:border-[#BF500B] h-12"
                    style={{ fontSize: '14px' }}
                  />
                  <Button className="w-full bg-[#BF500B] hover:bg-[#9f4009] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150">
                    <Bell className="h-4 w-4" />
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#005B82] to-transparent" />

      {/* Staff Directory Section - Light Gray Background */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-16 bg-[#005B82] rounded-full" />
            <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Staff Directory</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((staff) => (
              <Card 
                key={staff.name}
                className="group border-2 border-[#CCCCCC] hover:border-[#005B82] elevation-3 hover:elevation-4 transition-all duration-150 bg-white ripple"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#005B82] to-[#003952] rounded-full flex items-center justify-center mx-auto mb-5 elevation-3 group-hover:scale-110 transition-transform duration-150">
                    <span className="text-white text-2xl" style={{ fontWeight: 700 }}>
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="mb-2 group-hover:text-[#005B82] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {staff.name}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontSize: '14px' }}>{staff.role}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-[#005B82]">
                      <Phone className="h-4 w-4" />
                      <span style={{ fontSize: '12px', fontWeight: 500 }}>{staff.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Mail className="h-3 w-3" />
                      <span style={{ fontSize: '12px' }}>{staff.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#005B82] to-transparent" />

      {/* Forms & Documents Section - Gradient Background */}
      <section className="bg-gradient-to-br from-[#FAFDFF] via-[#E8F6FF] to-[#E0F6FF] py-[70px] px-[0px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-16 bg-[#005B82] rounded-full" />
            <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Forms & Documents</h2>
          </div>
          <Card className="border-2 border-[#CCCCCC] elevation-4 bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/30 border-b-2 border-[#CCCCCC] p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#005B82] rounded-xl flex items-center justify-center elevation-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle style={{ fontSize: '20px', fontWeight: 700 }}>Download Forms</CardTitle>
                  <CardDescription style={{ fontSize: '14px' }}>Complete forms online or download PDF versions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Birth Certificate Request', type: 'PDF • Fillable', color: '#005B82' },
                  { name: 'Death Certificate Request', type: 'PDF • Fillable', color: '#005B82' },
                  { name: 'WIC Application', type: 'PDF • Online', color: '#83A226' },
                  { name: 'Food Handler Permit', type: 'PDF • Fillable', color: '#D1B10E' },
                  { name: 'Animal License Application', type: 'PDF • Online', color: '#BF500B' },
                  { name: 'Nuisance Complaint Form', type: 'PDF • Fillable', color: '#BF500B' },
                ].map((form) => (
                  <button
                    key={form.name}
                    className="group text-left border-2 border-[#CCCCCC] hover:border-[#005B82] rounded-xl p-5 transition-all duration-150 hover:bg-gray-50 elevation-1 hover:elevation-3 ripple"
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-150 elevation-1"
                        style={{ backgroundColor: `${form.color}15` }}
                      >
                        <FileText className="h-5 w-5" style={{ color: form.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 group-hover:text-[#005B82] transition-colors leading-snug" style={{ fontSize: '14px', fontWeight: 600 }}>
                          {form.name}
                        </p>
                        <span className="text-gray-600" style={{ fontSize: '12px' }}>{form.type}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#005B82] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
