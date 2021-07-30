import React, { useState } from 'react';

import SubmitButton from './SubmitButton';

const Form = () => {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState('');
  const [valueOne, setValueOne] = useState('');

  return (
    <div className="mb-8">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="">
          <div className="flex text-inputLogo focus-within:text-buttonColor border-b-2 focus-within:border-buttonColor pt-12 relative">
            <span class="material-icons mr-3 text-xl">mail_outline</span>
            <input
              type="text"
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
              Email
            </label>
          </div>

          <div className=" flex text-inputLogo focus-within:text-buttonColor border-b-2 focus-within:border-buttonColor pt-12 relative">
            <span class="material-icons w-4 text-base mr-4">lock</span>
            <input
              type={visible ? 'Password' : 'text'}
              value={valueOne}
              onChange={(e) => setValueOne(e.target.value)}
              className="w-full outline-none bg-transparent mb-2 z-10"
            />
            <span
              className="material-icons w-14 text-center text-inputLogo  text-xl cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {visible ? 'visibility' : 'visibility_off'}
            </span>
            <label
              className={
                valueOne
                  ? 'text-headerPara absolute left-8 value'
                  : 'text-headerPara absolute left-8 top-12 floating-label transition-all duration-200'
              }
            >
              Password
            </label>
          </div>

          <SubmitButton>Sign up</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
