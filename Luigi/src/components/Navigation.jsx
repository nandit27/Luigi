import React, { useState } from "react";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["HOME", "MODELS", "DATASETS", "ABOUT", "FAQ"];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <header className="px-0 py-2.5 w-full bg-neutral-900">
        <nav className="flex justify-between items-center px-3 py-0 mx-auto my-0 max-w-[1140px] max-md:max-w-full max-sm:max-w-screen-sm">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf39f326dac61e47f6251305cc3868b0b3f531a"
            alt="Logo"
            className="shrink-0 h-[75px] w-[75px]"
          />

          <div className="flex gap-12 px-6 pt-3 pb-3 max-md:gap-8 max-md:px-4 max-md:py-3 max-sm:hidden">
            {navItems.map((item) => (
              <NavLink key={item}>{item}</NavLink>
            ))}
          </div>

          <MobileMenuButton onClick={toggleMobileMenu} />

          {isMobileMenuOpen && (
            <div className="hidden max-sm:block absolute top-[90px] left-0 right-0 bg-neutral-900 p-4 z-50">
              {navItems.map((item) => (
                <div key={item} className="py-2">
                  <NavLink>{item}</NavLink>
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
