import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">NaijaCourier</h2>
            <p className="text-sm">
              Fast and reliable logistics solution for delivering packages
              interstate and intrastate.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/track-package" className="hover:text-white">
                  Track Package
                </Link>
              </li>

              <li>
                <span className="hover:text-white">Services</span>
              </li>

              <li>
                <span className="hover:text-white">Contact</span>
              </li>
            </ul>
          </div>
          <div>
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
              <li>Email: support@naijacourier.com</li>
              <li>Phone: +234 810 098 7235</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} NaijaCourier. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
