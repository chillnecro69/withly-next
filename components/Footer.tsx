import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:rotate-6 transition-transform">
                W
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Withly</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Never do things alone in your city. Discover social plans, meet new people, and explore Pune together.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Browse Plans</Link>
              </li>
              <li>
                <Link href="/create-plan" className="hover:text-primary transition-colors">Create a Plan</Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-primary transition-colors">Community</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/safety" className="hover:text-primary transition-colors">Safety Guidelines</Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@withly.in"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 dark:border-white/5 gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Withly Social. Made with ❤️ in Pune.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-primary">Twitter</a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
