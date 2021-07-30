import React, { useRef, useState, useEffect } from 'react';
import LeftSide from '../signIn/LeftSide';
import RightSide from './RightSide';

const SignUp = () => {
  const divHeight = useRef();
  const [height, setHeight] = useState('');

  useEffect(() => {
    setHeight(divHeight.current.offsetHeight);
  }, []);
  return (
    <div className="lg:flex"  ref={divHeight}>
      <LeftSide header={text.header} para={text.para} add="" />
      <div className="lg:flex-grow lg:w-2/4">
        <RightSide height={height} />
      </div>
    </div>
  );
};

export default SignUp;

const text = {
  header: 'Sign Up',
  para: 'Create an account to serve your services.',
};
