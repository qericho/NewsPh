const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <h2 className="text-lg font-semibold text-white">NewsPH</h2>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} NewsPH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
