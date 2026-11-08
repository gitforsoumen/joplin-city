import image_1beaa56460293997bbb2e031087af17597681df8 from 'figma:asset/1beaa56460293997bbb2e031087af17597681df8.png';
import { Search, Building2, Users, Phone, FileText, Heart, Briefcase, MapPin, Clock, CreditCard, Shield, Leaf, Scale } from 'lucide-react';
import { Input } from './ui/input';
import { useState, useRef, useEffect } from 'react';
import colorLogo from 'figma:asset/3c952994a95a2893f8856716a49f5e361fe63bc5.png';

interface EnhancedSearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const searchSuggestions = [
  { 
    category: 'Services',
    categoryColor: 'text-[#005B82]',
    iconBg: 'bg-[#005B82]/10',
    iconHoverBg: 'group-hover:bg-[#005B82]',
    hoverBg: 'hover:bg-[#E0F6FF]',
    items: [
      { label: 'Pay Water Bill', icon: CreditCard, href: 'services', description: 'Make online payments' },
      { label: 'Apply for Permits', icon: FileText, href: 'services', description: 'Building & zoning permits' },
      { label: 'Trash & Recycling', icon: MapPin, href: 'services', description: 'Schedule & information' },
      { label: 'Report an Issue', icon: Phone, href: 'services', description: 'Submit service requests' },
    ]
  },
  {
    category: 'Departments',
    categoryColor: 'text-[#83A226]',
    iconBg: 'bg-[#83A226]/10',
    iconHoverBg: 'group-hover:bg-[#83A226]',
    hoverBg: 'hover:bg-[#f0f7e6]',
    items: [
      { label: 'Health Department', icon: Heart, href: 'health-department', description: 'Public health services' },
      { label: 'Animal Control', icon: Heart, href: 'animal-control', description: 'Pet services & adoption' },
      { label: 'Public Works', icon: Building2, href: 'departments', description: 'Infrastructure services' },
      { label: 'Police Department', icon: Shield, href: 'departments', description: 'Law enforcement' },
      { label: 'Parks & Recreation', icon: Leaf, href: 'departments', description: 'Parks & programs' },
    ]
  },
  {
    category: 'Information',
    categoryColor: 'text-[#BF500B]',
    iconBg: 'bg-[#BF500B]/10',
    iconHoverBg: 'group-hover:bg-[#BF500B]',
    hoverBg: 'hover:bg-[#fff5f0]',
    items: [
      { label: 'City Jobs & Careers', icon: Briefcase, href: 'business', description: 'Employment opportunities' },
      { label: 'Meeting Agendas', icon: FileText, href: 'government', description: 'Council meetings' },
      { label: 'Office Hours', icon: Clock, href: 'about', description: 'Visit us in person' },
      { label: 'Contact Us', icon: Phone, href: 'about', description: 'Get in touch' },
    ]
  }
];

export function EnhancedSearchDropdown({ isOpen, onClose, onNavigate }: EnhancedSearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when dropdown is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const filteredSuggestions = searchQuery.length > 0
    ? searchSuggestions.map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    : searchSuggestions;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/20 z-50 animate-in fade-in duration-200"
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div 
        ref={dropdownRef}
        className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl mx-auto px-4 animate-in slide-in-from-top-4 duration-200"
      >
        <div 
          className="bg-gradient-to-br from-[#FAFDFF] to-[#E0F6FF] rounded-2xl elevation-4 overflow-hidden"
          style={{ 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)'
          }}
        >
          {/* Header with Logo */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-[#005B82]/10 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#005B82]" style={{ fontSize: '16px', fontWeight: 500 }}>
                  Search Services
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close search"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#005B82]/50" />
              <Input
                type="search"
                placeholder="Search for services, departments, or information..."
                className="pl-12 pr-4 h-12 bg-white border-2 border-[#005B82]/20 focus:border-[#005B82] rounded-lg transition-all"
                style={{ 
                  fontSize: '14px',
                  fontFamily: 'var(--font-family-base)',
                  fontWeight: 400
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="px-6 py-6">
            {filteredSuggestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredSuggestions.map((category) => (
                  <div key={category.category}>
                    {/* Section Header */}
                    <div className="flex items-center gap-2 mb-4 px-2">
                      <div className={`w-1 h-6 rounded-full ${category.categoryColor.replace('text-', 'bg-')}`} />
                      <h3 
                        className={category.categoryColor}
                        style={{ 
                          fontSize: '16px',
                          fontFamily: 'var(--font-family-base)',
                          fontWeight: 500,
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {category.category}
                      </h3>
                    </div>

                    {/* Items */}
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            onNavigate(item.href);
                            onClose();
                            setSearchQuery('');
                          }}
                          className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left group ripple ${category.hoverBg}`}
                          style={{
                            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          {/* Icon */}
                          <div 
                            className={`w-12 h-12 rounded-xl ${category.iconBg} ${category.iconHoverBg} flex items-center justify-center flex-shrink-0 transition-all duration-200`}
                            style={{
                              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          >
                            <item.icon 
                              className={`h-6 w-6 ${category.categoryColor} group-hover:text-white transition-colors duration-200`}
                              strokeWidth={2}
                            />
                          </div>
                          
                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <div 
                              className="text-[#333333] group-hover:text-[#005B82] transition-colors mb-1"
                              style={{ 
                                fontSize: '14px',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 500,
                                lineHeight: 1.4
                              }}
                            >
                              {item.label}
                            </div>
                            <div 
                              className="text-gray-600"
                              style={{ 
                                fontSize: '12px',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 400,
                                lineHeight: 1.4
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-1" style={{ fontSize: '16px', fontWeight: 500 }}>
                  No results found for "{searchQuery}"
                </p>
                <p className="text-gray-500" style={{ fontSize: '14px' }}>
                  Try searching for services, departments, or general information
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-white/60 backdrop-blur-sm border-t border-[#005B82]/10 px-6 py-3">
            <div className="flex items-center justify-between text-gray-600">
              <span style={{ fontSize: '12px' }}>
                Press <kbd className="px-2 py-1 bg-white rounded border text-xs">ESC</kbd> to close
              </span>
              <span style={{ fontSize: '12px' }}>
                <span className="text-[#005B82] font-medium">{filteredSuggestions.reduce((acc, cat) => acc + cat.items.length, 0)}</span> results
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
