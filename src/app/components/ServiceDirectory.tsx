import { FileText, Trash2, Bus, Award, Dog, Building2, Droplet, Hammer, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const services = [
  {
    icon: FileText,
    title: 'Permits & Licenses',
    description: 'Apply for building permits and business licenses',
    color: 'bg-[#005B82]',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#005B82]',
  },
  {
    icon: Trash2,
    title: 'Trash & Recycling',
    description: 'Schedule pickup and learn recycling guidelines',
    color: 'bg-[#83A226]',
    iconBg: 'bg-green-50',
    iconColor: 'text-[#83A226]',
  },
  {
    icon: Bus,
    title: 'Public Transit',
    description: 'View routes, schedules, and plan your trip',
    color: 'bg-[#BF500B]',
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#BF500B]',
  },
  {
    icon: Award,
    title: 'Birth Certificates',
    description: 'Request vital records and certificates',
    color: 'bg-[#D1B10E]',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-[#D1B10E]',
  },
  {
    icon: Dog,
    title: 'Animal Control',
    description: 'Report issues and learn about pet licensing',
    color: 'bg-[#005B82]',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#005B82]',
  },
  {
    icon: Building2,
    title: 'Property Records',
    description: 'Access property information and tax records',
    color: 'bg-[#83A226]',
    iconBg: 'bg-green-50',
    iconColor: 'text-[#83A226]',
  },
  {
    icon: Droplet,
    title: 'Water & Utilities',
    description: 'Manage your utility account and payments',
    color: 'bg-[#BF500B]',
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#BF500B]',
  },
  {
    icon: Hammer,
    title: 'Code Enforcement',
    description: 'Report code violations and property concerns',
    color: 'bg-[#D1B10E]',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-[#D1B10E]',
  },
];

interface ServiceDirectoryProps {
  onNavigate?: (page: string) => void;
}

export function ServiceDirectory({ onNavigate }: ServiceDirectoryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-[#005B82] border-[#005B82]">
            Popular Services
          </Badge>
          <h2 className="mb-4 text-[40px]">Service Directory</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick access to the most commonly used city services and resources
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              onClick={() => {
                if (service.title === 'Animal Control' && onNavigate) {
                  onNavigate('animal-control');
                }
              }}
              className="group cursor-pointer border border-[#CCCCCC] hover:border-[#005B82] transition-all duration-300 elevation-2 hover:elevation-3 overflow-hidden"
            >
              <CardContent className="p-6 relative">
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-2 text-lg group-hover:text-[#005B82] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Arrow Link */}
                  <div className="flex items-center gap-2 text-[#005B82] text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
