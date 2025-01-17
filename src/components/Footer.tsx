export const Footer = () => {
  return (
    <footer className="py-12 relative z-10 bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">domuslab.io</h3>
            <p className="text-slate-400">Dream. Build. Launch.</p>
          </div>
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>hello@domuslab.io</li>
              <li>
                <a 
                  href="https://cal.com/juan-luis-gv-swcapy/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} domuslab.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};