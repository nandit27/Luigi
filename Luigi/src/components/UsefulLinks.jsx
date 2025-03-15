const UsefulLinks = () => {
    const links = [
      { text: "MLH Code of Conduct", href: "#" },
      { text: "Sponsor Packet", href: "#" },
      { text: "Old Website", href: "#" },
      { text: "Application Form", href: "#" },
      { text: "Frequently Asked Questions", href: "#" },
    ];
  
    return (
      <section className="col-[4/7] max-md:col-[span_3]">
        <h2 className="mb-1.5 text-xl font-semibold text-white">Useful Links</h2>
        <div className="mb-6 h-1 bg-orange-400 w-[58px] max-sm:mx-auto max-sm:mt-1.5 max-sm:mb-6" />
        <nav className="flex flex-col gap-2.5 max-sm:items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg leading-7 text-white no-underline duration-[0.3s] transition-[color] hover:text-orange-400"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </section>
    );
  };

export default UsefulLinks;
  