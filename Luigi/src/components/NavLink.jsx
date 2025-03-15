const NavLink = ({ children }) => {
    return (
      <a
        href="#"
        className="text-lg font-semibold leading-7 text-white uppercase cursor-pointer hover:text-gray-300 transition-colors"
      >
        {children}
      </a>
    );
  };
  
  export default NavLink;
  