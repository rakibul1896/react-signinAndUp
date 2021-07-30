import React from 'react';

const SubmitButton = ({ children }) => {
  return (
    <div className="mt-10 md:mt-16 mx-auto">
      <button
        type="submit"
        className=" text-white font-bold bg-buttonColor px-20 py-3 md:px-36 md:py-4 mx-auto block rounded-lg shadow-xl"
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
