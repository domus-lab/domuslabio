export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">domuslab.io</h3>
            <p className="text-slate-400">Dream. Build. Launch.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>MVP Development</li>
              <li>Web Applications</li>
              <li>Mobile Apps</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>About Us</li>
              <li>Projects</li>
              <li>Process</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>hello@domuslab.io</li>
              <li>Book a Call</li>
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