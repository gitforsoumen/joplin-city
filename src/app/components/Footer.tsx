import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import whiteLogo from 'figma:asset/929787b5208cae2374e23fcb25c13853ad86ceda.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#005B82] via-[#004a6b] to-[#003a55] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <img 
            src={whiteLogo} 
            alt="City of Joplin, Missouri" 
            className="h-24 w-auto"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-white/90">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/70" />
                <span className="text-white/80">
                  602 S Main Street<br />
                  Joplin, MO 64801
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 flex-shrink-0 text-white/70" />
                <a href="tel:4176240820" className="text-white/80 hover:text-white transition-colors">
                  (417) 624-0820
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 flex-shrink-0 text-white/70" />
                <a href="mailto:info@joplinmo.org" className="text-white/80 hover:text-white transition-colors">
                  info@joplinmo.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Online Payments',
                'Council Agendas',
                'Public Records',
                'Employment',
                'Report an Issue'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white hover:underline transition-all underline-offset-4"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="mb-4 text-white/90">Follow Us</h4>
            <div className="flex gap-3 justify-center md:justify-end">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70">
            <span>© 2025 City of Joplin, Missouri. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/70">
            <a href="#" className="hover:text-white hover:underline transition-all underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white hover:underline transition-all underline-offset-4">
              Accessibility
            </a>
            <a href="#" className="hover:text-white hover:underline transition-all underline-offset-4">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
