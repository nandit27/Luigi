// Section component for the details page
import React from 'react';

const DetailsSection = ({ title, children }) => {
  return (
    <div className="mb-2">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="text-base">{children}</div>
    </div>
  );
};

export default DetailsSection;