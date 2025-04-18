import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-green-400" />
              <span className="font-bold text-xl">CommunityReach</span>
            </div>
            <p className="text-gray-300 mb-6">
              Making our community stronger together through compassion, service, and education.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="bg-gray-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                  aria-label={`Visit our ${social} page`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Programs', href: '#programs' },
                { name: 'Get Involved', href: '#get-involved' },
                { name: 'Donate', href: '#donate' },
                { name: 'Events', href: '#events' },
                { name: 'News', href: '#news' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  1234 Community Way<br />
                  Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-green-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@communityreach.org" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@communityreach.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: 10am - 2pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Support Us</h3>
            <p className="text-gray-300 mb-4">
              Your donation helps us continue our mission of strengthening the community.
            </p>
            <a 
              href="#donate" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md inline-block transition-colors mb-4"
            >
              Donate Now
            </a>
            <p className="text-sm text-gray-400">
              CommunityReach is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CommunityReach. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;