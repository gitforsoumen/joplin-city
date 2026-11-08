import { CreditCard, FileText, Users, HandHeart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const quickLinks = [
  {
    icon: CreditCard,
    title: 'Online Payments',
    description: 'Pay bills and fees online',
    color: 'bg-[#005B82]',
    hoverColor: 'hover:bg-[#005B82]',
  },
  {
    icon: FileText,
    title: 'Council Agendas',
    description: 'View meeting agendas and minutes',
    color: 'bg-[#83A226]',
    hoverColor: 'hover:bg-[#83A226]',
  },
  {
    icon: Users,
    title: 'Public Records',
    description: 'Request public records and documents',
    color: 'bg-[#BF500B]',
    hoverColor: 'hover:bg-[#BF500B]',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Find volunteer opportunities',
    color: 'bg-[#D1B10E]',
    hoverColor: 'hover:bg-[#D1B10E]',
  },
];

export function QuickAccessLinks() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-[#005B82] border-[#005B82]">
            Quick Access
          </Badge>
          <h2 className="mb-4 text-[40px]">What We Offer</h2>
          <p className="text-gray-600">Frequently accessed city resources and services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Card
              key={link.title}
              className="group cursor-pointer border border-[#CCCCCC] hover:border-[#005B82] transition-all duration-300 elevation-2 hover:elevation-3 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col items-center text-center relative">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 ${link.hoverColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`${link.color} w-20 h-20 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="h-10 w-10 text-white" />
                  </div>
                  {/* Floating Arrow */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
                
                <div className="relative">
                  <h3 className="mb-2 text-lg group-hover:text-[#005B82] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
