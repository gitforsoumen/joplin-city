import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Dog, Phone, Mail, MapPin, Upload, AlertTriangle, Heart, BookOpen, Shield, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

const resources = [
  {
    icon: Heart,
    title: 'Spay/Neuter Assistance',
    description: 'Low-cost spay and neuter programs available for qualified residents.',
    color: '#BF500B',
  },
  {
    icon: BookOpen,
    title: 'Pet Care Education',
    description: 'Learn about responsible pet ownership and animal welfare.',
    color: '#83A226',
  },
  {
    icon: Shield,
    title: 'Lost Pet Registry',
    description: 'Report lost or found pets to help reunite animals with owners.',
    color: '#005B82',
  },
];

const relatedPages = [
  {
    title: 'Nuisance Complaints',
    description: 'Report barking dogs, animal waste, or other pet-related nuisances',
    icon: AlertTriangle,
    color: '#BF500B',
  },
  {
    title: 'Wildlife Education',
    description: 'Learn about local wildlife and how to safely coexist',
    icon: BookOpen,
    color: '#83A226',
  },
  {
    title: 'Pet Licensing',
    description: 'Register your pet and get required licenses and tags',
    icon: Shield,
    color: '#005B82',
  },
];

interface AnimalControlProps {
  onNavigate: (page: string) => void;
}

export function AnimalControl({ onNavigate }: AnimalControlProps) {
  const [issueType, setIssueType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

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
                <BreadcrumbLink onClick={() => onNavigate('health-department')} className="cursor-pointer hover:text-[#005B82] transition-colors duration-150">
                  Health Department
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Animal Control</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section - Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FAFDFF] via-[#E8F6FF] to-[#E0F6FF]">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BF500B] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#005B82] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Department Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center elevation-4 ripple">
                  <Dog className="h-12 w-12 text-[#BF500B]" />
                </div>
                <div>
                  <Badge className="bg-[#BF500B] text-white border-0 mb-3 elevation-2">
                    Health Department
                  </Badge>
                  <h1 className="text-[#005B82] mb-0" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>
                    Animal Control Services
                  </h1>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Protecting animals and promoting responsible pet ownership through education, enforcement, and compassionate care
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#005B82', fontWeight: 700 }}>250+</div>
                  <div className="text-xs text-gray-600">Rescued</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#83A226', fontWeight: 700 }}>180+</div>
                  <div className="text-xs text-gray-600">Adoptions</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center elevation-2 ripple">
                  <div className="text-2xl mb-1" style={{ color: '#BF500B', fontWeight: 700 }}>95%</div>
                  <div className="text-xs text-gray-600">Response</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-[#BF500B] hover:bg-[#9f4009] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150"
                >
                  Report an Issue
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                >
                  View Adoptable Pets
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                >
                  Pet Licensing
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden elevation-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721227319522-553452acea54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzU5NDg4MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Animal Shelter"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 elevation-3">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-6 w-6 text-[#BF500B]" />
                      <span style={{ fontSize: '16px', fontWeight: 600, color: '#005B82' }}>
                        Committed to Animal Welfare
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Professional care and compassion for all animals in our community
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
              {/* About Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                  <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>About Animal Control</h2>
                </div>
                <Card className="border-2 border-[#CCCCCC] elevation-3 hover:elevation-4 hover:border-[#005B82] transition-all duration-200 ripple">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="relative rounded-xl overflow-hidden elevation-2">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1721227319522-553452acea54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzU5NDg4MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Animal Shelter"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden elevation-2">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1642210006452-575a979767ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBhZG9wdGlvbiUyMGRvZ3N8ZW58MXx8fHwxNzU5ODI4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Pet Adoption"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                      The Animal Control division of the Joplin Health Department is responsible for enforcing
                      animal-related ordinances, responding to animal-related complaints, and promoting animal welfare
                      throughout the city. Our officers work to protect both animals and citizens while educating the
                      public about responsible pet ownership.
                    </p>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                      Services include responding to stray animal calls, investigating animal cruelty cases, enforcing
                      leash laws, and providing education on pet care and safety. We also operate an animal shelter
                      that houses stray and abandoned animals and facilitates adoptions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Report Form */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                  <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Report an Animal Issue</h2>
                </div>
                <Card className="border-2 border-[#CCCCCC] elevation-3 ripple">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-orange-50/30 border-b border-[#CCCCCC]">
                    <CardTitle style={{ fontSize: '18px', fontWeight: 600 }}>Submit a Report</CardTitle>
                    <CardDescription style={{ fontSize: '14px' }}>
                      Submit a report about stray animals, animal welfare concerns, or other issues
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    {formSubmitted ? (
                      <div className="bg-gradient-to-br from-[#83A226] to-[#6d8621] text-white p-8 rounded-xl text-center elevation-3">
                        <Dog className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>Report Submitted Successfully</h3>
                        <p className="text-sm leading-relaxed">
                          Your report has been received. An Animal Control Officer will respond within 24-48 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500 }}>Your Name *</Label>
                            <Input id="name" required className="h-12 border-2" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 500 }}>Phone Number *</Label>
                            <Input id="phone" type="tel" required className="h-12 border-2" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" style={{ fontSize: '14px', fontWeight: 500 }}>Email Address</Label>
                          <Input id="email" type="email" className="h-12 border-2" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="issue-type" style={{ fontSize: '14px', fontWeight: 500 }}>Issue Type *</Label>
                          <Select value={issueType} onValueChange={setIssueType} required>
                            <SelectTrigger id="issue-type" className="h-12 border-2">
                              <SelectValue placeholder="Select issue type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="stray">Stray Animal</SelectItem>
                              <SelectItem value="aggressive">Aggressive Animal</SelectItem>
                              <SelectItem value="welfare">Animal Welfare Concern</SelectItem>
                              <SelectItem value="barking">Excessive Barking</SelectItem>
                              <SelectItem value="bite">Animal Bite</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location" style={{ fontSize: '14px', fontWeight: 500 }}>Location *</Label>
                          <Input id="location" placeholder="Street address or nearest intersection" required className="h-12 border-2" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description" style={{ fontSize: '14px', fontWeight: 500 }}>Description *</Label>
                          <Textarea
                            id="description"
                            placeholder="Please provide details about the situation..."
                            rows={4}
                            required
                            className="border-2"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="photo" style={{ fontSize: '14px', fontWeight: 500 }}>Upload Photo (Optional)</Label>
                          <div className="border-2 border-dashed border-[#CCCCCC] rounded-xl p-8 text-center hover:border-[#BF500B] hover:bg-orange-50/20 transition-all duration-150 cursor-pointer ripple">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600" style={{ fontSize: '14px' }}>Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            type="submit" 
                            className="bg-[#BF500B] hover:bg-[#9f4009] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150"
                          >
                            Submit Report
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Resources */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-[#005B82] rounded-full" />
                  <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>Resources & Programs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resources.map((resource) => (
                    <Card 
                      key={resource.title}
                      className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] elevation-2 hover:elevation-4 transition-all duration-150 ripple"
                    >
                      <CardContent className="p-6">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-150 elevation-2"
                          style={{ backgroundColor: resource.color }}
                        >
                          <resource.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="mb-2 group-hover:text-[#005B82] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                          {resource.description}
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="border-2 border-[#BF500B] elevation-4 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#BF500B] to-[#9f4009] text-white p-6">
                  <CardTitle className="text-white flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    <Phone className="h-5 w-5" />
                    Contact Animal Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#BF500B]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <MapPin className="h-5 w-5 text-[#BF500B]" />
                    </div>
                    <div>
                      <p className="mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>Animal Shelter</p>
                      <p className="text-gray-600" style={{ fontSize: '14px' }}>555 Animal Lane</p>
                      <p className="text-gray-600" style={{ fontSize: '14px' }}>Joplin, MO 64801</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#BF500B]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <Phone className="h-5 w-5 text-[#BF500B]" />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 500 }}>(417) 624-0823</p>
                      <p className="text-xs text-gray-600">Emergency: (417) 624-0820</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#BF500B]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <Mail className="h-5 w-5 text-[#BF500B]" />
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: 500 }}>animalcontrol@joplinmo.org</p>
                  </div>
                  <div className="pt-4 border-t border-[#BF500B]/20">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#BF500B]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                        <Clock className="h-5 w-5 text-[#BF500B]" />
                      </div>
                      <div>
                        <p className="mb-1" style={{ fontSize: '14px', fontWeight: 500 }}>Office Hours</p>
                        <p className="text-gray-600" style={{ fontSize: '14px' }}>Mon - Fri: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600" style={{ fontSize: '14px' }}>Sat: 9:00 AM - 3:00 PM</p>
                        <p className="text-gray-600" style={{ fontSize: '14px' }}>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#BF500B] hover:bg-[#9f4009] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-2 border-[#CCCCCC] elevation-3">
                <CardHeader className="p-6">
                  <CardTitle style={{ fontSize: '18px', fontWeight: 600 }}>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-6 pb-6">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    View Adoptable Pets
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    License Your Pet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    Report Lost Pet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2 border-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out ripple"
                  >
                    Pet Care Guidelines
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="border-2 border-[#BF500B] elevation-3 bg-gradient-to-br from-orange-50/30 to-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-[#BF500B]/10 rounded-xl flex items-center justify-center flex-shrink-0 elevation-1">
                      <AlertTriangle className="h-6 w-6 text-[#BF500B]" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Emergency?</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                        For animal emergencies after hours, please contact Joplin Police Dispatch.
                      </p>
                      <Button className="w-full bg-[#BF500B] hover:bg-[#9f4009] text-white elevation-2 hover:elevation-3 ripple transition-all duration-150">
                        Call Emergency Line
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#005B82] to-transparent" />

      {/* Related Pages - Light Gray Background */}
      <section className="bg-[#F5F5F5] py-[70px] px-[0px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-16 bg-[#005B82] rounded-full" />
            <h2 className="mb-0" style={{ fontSize: '24px', fontWeight: 700 }}>You May Also Be Interested In</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPages.map((page) => (
              <Card 
                key={page.title} 
                className="group cursor-pointer border-2 border-[#CCCCCC] hover:border-[#005B82] elevation-3 hover:elevation-4 transition-all duration-150 bg-white ripple"
              >
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-150 elevation-2"
                    style={{ backgroundColor: `${page.color}15` }}
                  >
                    <page.icon className="h-7 w-7" style={{ color: page.color }} />
                  </div>
                  <h3 className="mb-2 group-hover:text-[#005B82] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {page.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {page.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#005B82] group-hover:gap-3 transition-all" style={{ fontSize: '14px', fontWeight: 500 }}>
                    <span>View page</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
