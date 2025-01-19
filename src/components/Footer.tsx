export const Footer = () => {
  return (
    <footer className="py-12 relative z-10 bg-white border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">domuslab.io</h3>
            <p className="text-gray-600">Dream. Build. Launch.</p>
          </div>
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="mailto:hello@domuslab.io" 
                  className="hover:text-gray-900 transition-colors"
                >
                  hello@domuslab.io
                </a>
              </li>
              <li>
                <a 
                  href="https://cal.com/juan-luis-gv-swcapy/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} domuslab.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};