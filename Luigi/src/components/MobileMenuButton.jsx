const MobileMenuButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="hidden text-2xl text-white max-sm:block hover:text-gray-300 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    );
  };
  
  export default MobileMenuButton;
  