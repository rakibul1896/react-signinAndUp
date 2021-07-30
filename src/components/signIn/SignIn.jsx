import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const SignIn = () => {
  return (
    <div className="lg:flex">
      <LeftSide header={text.header} para={text.para} add={text.add} />
      <div className="lg:flex-grow lg:w-2/4 min-h-screen max-h-full">
        <RightSide />
      </div>
    </div>
  );
};

export default SignIn;

const text = {
  header: 'Sign In To Get The Fun Begin',
  para: 'If you don’t have an account you can',
  add: 'Sign Up',
};
