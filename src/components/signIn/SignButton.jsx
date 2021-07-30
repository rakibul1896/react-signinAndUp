import React from 'react';

const SignButton = ({ children }) => {
  return (
    <div>
      <button className="absolute right-0 text-xs md:text-base text-white font-bold px-4 py-2 md:px-8 md:py-3 mt-6 bg-buttonColor rounded-3xl font-gilroyBold">
        {children}
      </button>
    </div>
  );
};

export default SignButton;
