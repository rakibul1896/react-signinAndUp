import React, { useState } from 'react';

const Input = ({ type, placeholder, logo }) => {
  const [value, setValue] = useState('');

  return (
    <div className="xl:w-47% flex text-inputLogo focus-within:text-buttonColor border-b-2 focus-within:border-buttonColor pt-12 relative">
      <span class="material-icons mr-3 text-xl">{logo}</span>
      <input
        type={type}
        value={value}
        className="w-full outline-none bg-transparent mb-2 z-10"
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        className={
          value
            ? 'text-headerPara absolute left-8 value'
            : 'text-headerPara absolute left-8 top-12 floating-label transition-all duration-200'
        }
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
