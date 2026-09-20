import { SOCIAL_LINKS } from "@/config/data";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="w-full bg-stone-950 border-t border-lime-300/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white text-sm tracking-widest flex  justify-center">
          <img src="/logo.png" alt="logo" loading="lazy" className="h-12 w-auto object-contain" />
          <div className="footer-logo-info ml-3">
            <p className="text-xl font-poppins">Sajin</p>
            <p className="text-xs text-lime-300">web developer</p>
          </div>
        </a>



        {/* Social */}
        <div className="text-white text-xl flex gap-3">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-lime-300 transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white/70 text-xs font-semibold text-center md:text-start md:ml-5 pt-4 border-t border-white/10 font-mono tracking-wider">
        © {new Date().getFullYear()} <a href="https://www.facebook.com/C.L.Sajin/" className="text-lime-300 cursor-auto">Sajin CL</a>. All Rights Reserved.
      </div>
      <div className="text-white/50 text-[10px]  text-center md:text-start md:ml-5 pt-1 pb-4 font-mono tracking-wider">
      Built with passion. Designed with purpose.
      </div>
    </motion.footer>
  );
};

export default Footer;
