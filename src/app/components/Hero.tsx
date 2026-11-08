import { CreditCard, AlertTriangle, Briefcase, Search, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const ctaButtons = [
    { icon: CreditCard, label: 'Pay Bills Online', color: 'bg-[#005B82] hover:bg-[#004a6b] text-white' },
    { icon: AlertTriangle, label: 'Report an Issue', color: 'bg-[#BF500B] hover:bg-[#9f4009] text-white' },
    { icon: Briefcase, label: 'Find City Jobs', color: 'bg-[#83A226] hover:bg-[#6d8621] text-white' },
  ];

  return (
    <div className="relative min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1664733865764-768873659f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXNzb3VyaSUyMGRvd250b3duJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc1OTUwNjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City of Joplin, Missouri"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm">Serving Joplin since 1873</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Together We Are
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Ready for Anything
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Access city services, stay informed about community events, and connect with your Joplin neighbors
          </p>

          {/* Quick Search Bar */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#005B82] to-[#83A226] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative flex items-center bg-white rounded-lg shadow-2xl p-2">
              <Search className="h-6 w-6 text-gray-400 ml-4" />
              <Input
                type="search"
                placeholder="What can we help you find today?"
                className="flex-1 border-0 bg-transparent px-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#005B82] hover:bg-[#004a6b] text-white px-6 gap-2">
                Search
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {ctaButtons.map((btn) => (
              <Button
                key={btn.label}
                size="lg"
                className={`${btn.color} gap-2 shadow-lg hover:shadow-xl transition-all duration-150 hover:-translate-y-1 [&_svg]:text-white`}
              >
                <btn.icon className="h-5 w-5" />
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
