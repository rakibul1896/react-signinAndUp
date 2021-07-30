import React, { useState } from 'react';
import { inputArray } from './InputArray';
import Input from './Input';
import SubmitButton from '../signIn/SubmitButton';

const Form = () => {
  const [visible, setVisible] = useState(true);
  const [visibleRe, setVisibleRe] = useState(true);
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');

  return (
    <div className="mb-8">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='xl:flex flex-wrap justify-between'>
          {inputArray.map((val) => {
            return (
              <Input
                type={val.type}
                placeholder={val.placeholder}
                logo={val.logo}
              />
            );
          })}

          <div className="xl:w-47% flex text-inputLogo focus-within:text-buttonColor border-b-2 focus-within:border-buttonColor pt-12 relative">
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

          <div className="xl:w-47% flex text-inputLogo focus-within:text-buttonColor border-b-2 focus-within:border-buttonColor pt-12 relative">
            <span class="material-icons w-4 text-base mr-4">lock</span>
            <input
              type={visibleRe ? 'Password' : 'text'}
              value={valueTwo}
              onChange={(e) => setValueTwo(e.target.value)}
              className="w-full outline-none bg-transparent mb-2 z-10"
            />
            <span
              className="material-icons w-14 text-center text-inputLogo text-xl cursor-pointer"
              onClick={() => setVisibleRe(!visibleRe)}
            >
              {visibleRe ? 'visibility' : 'visibility_off'}
            </span>
            <label
              className={
                valueTwo
                  ? 'text-headerPara absolute left-8 value'
                  : 'text-headerPara absolute left-8 top-12 floating-label transition-all duration-200'
              }
            >
              Confirm Password
            </label>
          </div>

          <SubmitButton>Sign up</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
