import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { text: "MLH Code of Conduct", href: "#" },
    { text: "Sponsor Packet", href: "#" },
    { text: "Old Website", href: "#" },
    { text: "Application Form", href: "#" },
    { text: "Frequently Asked Questions", href: "#" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <footer className="relative flex flex-col items-center pt-24 w-full bg-[#171717] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-[#FF8142] rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF8142] rounded-full blur-[100px]"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 grid gap-8 px-5 py-0 mx-auto mb-24 w-full max-w-[1140px] 
        grid-cols-[1fr_1.5fr_1.5fr] max-md:grid-cols-1 max-md:gap-16">
        
        {/* Logo Section */}
        <motion.div {...fadeInUp} className="flex flex-col items-start max-md:items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf39f326dac61e47f6251305cc3868b0b3f531a"
            alt="Luigi Logo"
            className="w-16 h-16 mb-6 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Empowering developers with cutting-edge datasets and models for innovative solutions.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {['twitter', 'github', 'linkedin', 'discord'].map((platform) => (
              <a
                key={platform}
                href={`#${platform}`}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                  hover:bg-[#FF8142] transition-all duration-300 group"
              >
                <i className={`fab fa-${platform} text-white group-hover:scale-110 transition-transform duration-300`}></i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Useful Links Section */}
        <motion.div {...fadeInUp} className="max-md:text-center">
          <h2 className="text-xl font-semibold text-white mb-6 relative
            after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[58px] 
            after:h-1 after:bg-[#FF8142] max-md:after:left-1/2 max-md:after:-translate-x-1/2">
            Useful Links
          </h2>
          <nav className="flex flex-col gap-3 max-md:items-center">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ x: 5 }}
                className="text-lg text-neutral-300 no-underline transition-colors duration-300 
                  hover:text-[#FF8142] flex items-center gap-2 w-fit"
              >
                <span className="text-[#FF8142]">→</span>
                {link.text}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Contact Section */}
        <motion.div {...fadeInUp} className="max-md:text-center">
          <h2 className="text-xl font-semibold text-white mb-6 relative
            after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[58px] 
            after:h-1 after:bg-[#FF8142] max-md:after:left-1/2 max-md:after:-translate-x-1/2">
            Contact Us
          </h2>
          <div className="flex flex-col gap-6 max-md:items-center">
            <div className="group">
              <div className="text-sm font-semibold text-[#FF8142] uppercase mb-2">
                Location:
              </div>
              <address className="text-lg text-neutral-300 not-italic group-hover:text-white transition-colors duration-300">
                1200 E California Blvd,<br />
                Pasadena, CA 91125
              </address>
            </div>
            <div className="group">
              <div className="text-sm font-semibold text-[#FF8142] uppercase mb-2">
                Questions:
              </div>
              <a
                href="mailto:hacktech@caltech.edu"
                className="text-lg text-neutral-300 no-underline hover:text-[#FF8142] 
                  transition-colors duration-300 flex items-center gap-2 w-fit max-md:mx-auto"
              >
                <i className="far fa-envelope"></i>
                hacktech@caltech.edu
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 w-full py-6 bg-black/40 backdrop-blur-sm border-t border-white/10"
      >
        <p className="text-lg text-neutral-300 text-center">
          Made with 
          <span className="mx-2 text-[#FF8142] animate-pulse">♥</span> 
          by <a href="#" className="text-[#FF8142] hover:text-white transition-colors duration-300">
            Author
          </a>. © 2025 Luigi.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
