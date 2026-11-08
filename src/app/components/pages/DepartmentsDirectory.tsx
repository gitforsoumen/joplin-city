import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Search, Building2, Shield, Heart, Leaf, Users, Briefcase, Scale, FileText, Phone, Mail, MapPin, ChevronRight, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { EnhancedSearchDropdown } from '../EnhancedSearchDropdown';
import { useState } from 'react';

interface DepartmentsDirectoryProps {
  onNavigate: (page: string) => void;
}

const departments = [
  {
    id: 1,
    name: 'Health Department',
    icon: Heart,
    category: 'Community Services',
    categoryColor: 'bg-[#83A226]',
    description: 'Environmental health, immunizations, vital records, and public health programs.',
    phone: '(417) 624-0820',
    email: 'health@joplinmo.org',
    services: ['Immunizations', 'Vital Records', 'Food Safety', 'Health Programs'],
    page: 'health-department',
  },
  {
    id: 2,
    name: 'Animal Control',
    icon: Heart,
    category: 'Public Safety',
    categoryColor: 'bg-[#BF500B]',
    description: 'Animal welfare, adoption services, licensing, and stray animal control.',
    phone: '(417) 623-3875',
    email: 'animalcontrol@joplinmo.org',
    services: ['Pet Adoption', 'Licensing', 'Lost & Found', 'Animal Welfare'],
    page: 'animal-control',
  },
  {
    id: 3,
    name: 'Public Works',
    icon: Building2,
    category: 'Infrastructure',
    categoryColor: 'bg-[#005B82]',
    description: 'Street maintenance, water & sewer services, engineering, and infrastructure projects.',
    phone: '(417) 624-0820',
    email: 'publicworks@joplinmo.org',
    services: ['Water & Sewer', 'Street Maintenance', 'Engineering', 'Infrastructure'],
    page: 'departments',
  },
  {
    id: 4,
    name: 'Police Department',
    icon: Shield,
    category: 'Public Safety',
    categoryColor: 'bg-[#BF500B]',
    description: 'Law enforcement, emergency response, crime prevention, and community policing.',
    phone: '(417) 623-3131',
    email: 'police@joplinmo.org',
    services: ['Emergency Response', 'Crime Prevention', 'Community Programs', 'Records'],
    page: 'departments',
  },
  {
    id: 5,
    name: 'Fire Department',
    icon: Shield,
    category: 'Public Safety',
    categoryColor: 'bg-[#BF500B]',
    description: 'Fire suppression, emergency medical services, fire prevention, and education.',
    phone: '(417) 624-0820',
    email: 'fire@joplinmo.org',
    services: ['Fire Suppression', 'EMS', 'Fire Prevention', 'Safety Education'],
    page: 'departments',
  },
  {
    id: 6,
    name: 'Parks & Recreation',
    icon: Leaf,
    category: 'Community Services',
    categoryColor: 'bg-[#83A226]',
    description: 'Parks, recreational facilities, programs, events, and community activities.',
    phone: '(417) 624-0820',
    email: 'parks@joplinmo.org',
    services: ['Parks Management', 'Recreation Programs', 'Events', 'Facilities'],
    page: 'departments',
  },
  {
    id: 7,
    name: 'Planning & Development',
    icon: Building2,
    category: 'Infrastructure',
    categoryColor: 'bg-[#005B82]',
    description: 'Zoning, building permits, code enforcement, and community development.',
    phone: '(417) 624-0820',
    email: 'planning@joplinmo.org',
    services: ['Building Permits', 'Zoning', 'Code Enforcement', 'Development'],
    page: 'departments',
  },
  {
    id: 8,
    name: 'Finance Department',
    icon: Briefcase,
    category: 'Government Operations',
    categoryColor: 'bg-[#D1B10E]',
    description: 'Budget, accounting, payroll, purchasing, and financial management.',
    phone: '(417) 624-0820',
    email: 'finance@joplinmo.org',
    services: ['Budget', 'Accounting', 'Payroll', 'Purchasing'],
    page: 'departments',
  },
];

const categories = [
  { name: 'All Departments', color: 'bg-gray-600', count: 8 },
  { name: 'Public Safety', color: 'bg-[#BF500B]', count: 3 },
  { name: 'Community Services', color: 'bg-[#83A226]', count: 2 },
  { name: 'Infrastructure', color: 'bg-[#005B82]', count: 2 },
  { name: 'Government Operations', color: 'bg-[#D1B10E]', count: 1 },
];

export function DepartmentsDirectory({ onNavigate }: DepartmentsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Departments' || dept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Enhanced Search Dropdown */}
      <EnhancedSearchDropdown 
        isOpen={searchDropdownOpen}
        onClose={() => setSearchDropdownOpen(false)}
        onNavigate={onNavigate}
      />

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
                <BreadcrumbPage>Departments</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#005B82] via-[#004a6b] to-[#003d5c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#83A226] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Building2 className="h-5 w-5" />
              <span className="text-sm">City Departments Directory</span>
            </div>
            <h1 className="mb-6 text-white text-5xl">Serving the Community with Excellence</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the departments and services that keep Joplin running smoothly. From public safety to community programs, we're here to serve you.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div 
                onClick={() => setSearchDropdownOpen(true)}
                className="cursor-pointer"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                <Input
                  type="search"
                  placeholder="Search departments and services..."
                  className="pl-12 pr-4 h-14 text-lg bg-white border-0 rounded-lg shadow-xl cursor-pointer"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchDropdownOpen(true)}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === category.name
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <Badge className={`${selectedCategory === category.name ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'} border-0`}>
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl text-[#005B82] mb-1 font-bold">25+</div>
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-[#83A226] mb-1 font-bold">500+</div>
              <div className="text-sm text-gray-600">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-[#BF500B] mb-1 font-bold">150+</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-[#D1B10E] mb-1 font-bold">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="mb-2">
              {selectedCategory === 'All Departments' ? 'All Departments' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredDepartments.length} {filteredDepartments.length === 1 ? 'department' : 'departments'} found
            </p>
          </div>
        </div>

        {filteredDepartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => {
              const IconComponent = dept.icon;
              return (
                <Card key={dept.id} className="group elevation-2 hover:elevation-3 transition-all duration-300 overflow-hidden border border-[#CCCCCC] hover:border-[#005B82]">
                  <div className={`relative h-32 bg-gradient-to-br ${dept.categoryColor.replace('bg-', 'from-')} to-gray-800 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {dept.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className={`h-6 w-6 ${dept.categoryColor.replace('bg-', 'text-')}`} />
                      </div>
                      <h3 className="text-white mb-0 font-bold">{dept.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">
                      {dept.description}
                    </p>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {dept.services.slice(0, 3).map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                            {service}
                          </Badge>
                        ))}
                        {dept.services.length > 3 && (
                          <Badge variant="outline" className="text-xs border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                            +{dept.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4 text-[#005B82]" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4 text-[#005B82]" />
                        <span className="truncate">{dept.email}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => onNavigate(dept.page)}
                      className="w-full bg-[#005B82] hover:bg-[#004a6b] text-white group/btn"
                    >
                      Visit Department
                      <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="mb-2">No departments found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                variant="outline"
                className="gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Departments');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 border-t pt-[0px] pr-[0px] pb-[70px] pl-[0px]">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#005B82]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#005B82] rounded-lg flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4">Can't Find What You Need?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help direct you to the right department or service.
                </p>
                <Button className="w-full bg-[#005B82] hover:bg-[#004a6b] text-white">
                  Contact City Hall
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#83A226]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#83A226] rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4">Visit Us in Person</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Joplin City Hall</strong>
                </p>
                <p className="text-gray-600 mb-6">
                  602 S Main St<br />
                  Joplin, MO 64801
                </p>
                <Button variant="outline" className="w-full gap-2 border-[#83A226] text-[#83A226] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}