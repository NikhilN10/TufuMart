const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h4 className="font-bold text-2xl mb-2">ProcureHub</h4>
          <p className="text-gray-300">
            Your trusted B2B procurement partner. Simplifying industrial supply
            with speed and transparency.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-xl mb-3">Contact</h4>
          <p className="text-gray-300 mb-2">📞 +91-9876543210</p>
          <p className="text-gray-300 mb-2">✉️ support@procurehub.com</p>
          <p className="text-gray-300">
            📍 Ground, Khata No - 53, Khesra No - 428, Churchu Road, Chano
            Overbridge, chano, Oreya, Hazaribag, Jharkhand, 825313
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} ProcureHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
