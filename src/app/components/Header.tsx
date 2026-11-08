import image_1beaa56460293997bbb2e031087af17597681df8 from 'figma:asset/1beaa56460293997bbb2e031087af17597681df8.png';
import { Search, Menu, X, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { EnhancedSearchDropdown } from './EnhancedSearchDropdown';
import { useState } from 'react';
import colorLogo from 'figma:asset/3c952994a95a2893f8856716a49f5e361fe63bc5.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: 'services' },
    { label: 'Departments', href: 'departments' },
    { label: 'Government', href: 'government' },
    { label: 'Residents', href: 'residents' },
    { label: 'Business', href: 'business' },
    { label: 'About', href: 'about' },
  ];

  return (
    <>
      {/* Enhanced Search Dropdown */}
      <EnhancedSearchDropdown 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={onNavigate}
      />

      {/* Alert Banner */}
      <div className="bg-[#BF500B] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 justify-center text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>City offices will be closed Monday, October 6 for the holiday</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={image_1beaa56460293997bbb2e031087af17597681df8} 
                alt="City of Joplin, Missouri" 
                className="h-16 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onNavigate(item.href)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all ${
                    currentPage === item.href
                      ? 'text-[#005B82] bg-blue-50'
                      : 'text-gray-700 hover:text-[#005B82] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hover:bg-gray-100"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    onNavigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.href
                      ? 'bg-blue-50 text-[#005B82] border border-[#005B82]/20'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#005B82] border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
