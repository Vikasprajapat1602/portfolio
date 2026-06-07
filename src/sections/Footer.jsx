import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

/**
 * Footer Component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          {/* <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio</h3>
            <p className="text-slate-400">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div> */}

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Vikas Prajapat. Made with{' '}
              <FaHeart className="text-red-500 animate-pulse" /> by Portfolio.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
