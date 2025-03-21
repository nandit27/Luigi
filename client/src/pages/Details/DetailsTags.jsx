// Tags component for the details page
import React from 'react';
import { Link } from 'react-router-dom';

const DetailsTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Link 
          key={index}
          to={`/datasets?category=${tag}`}
          className="px-4 py-2 bg-white/5 text-[#32CD32] rounded-full text-sm
            border border-white/10 hover:border-[#32CD32]/30 hover:bg-[#32CD32]/10
            transition-all duration-300"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default DetailsTags;