import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 md:px-10">
        {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"> */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Kay-Brooks</h2>
            <p className="text-sm">
              We help Nigerians in diaspora design, build, and invest in
              property back home with full transparency and trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3> */}
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/track-package" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <span className="hover:text-white">Services</span>
              </li>

              <li>
                <span className="hover:text-white">Projects</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>3D Architectural Design</li>
              <li>House Planning</li>
              <li>Building Construction</li>
              <li>Property Sales</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +234 703 677 6378
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Mail className="w-4 h-4" />
                </span>
                <span>support@kaybrooks.com</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <span className="hover:text-white">Help Center</span>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@kaybrooks.com</li>
              <li>Phone: +234 810 098 7235</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div> */}
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} KayBrooks. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
