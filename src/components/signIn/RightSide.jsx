import React from 'react';
import SignButton from './SignButton';
import Bottom from './Bottom';
import Form from './Form';
import { Link } from 'react-router-dom';

const RightSide = () => {
  return (
    <div className="h-full bg-aliceBlue">
      <div className="relative w-10/12 md:w-9/12 xl:w-10/12 desktop:w-9/12 mx-auto">
        <Link to="/sign_up">
          <SignButton>Sign up</SignButton>
        </Link>
      </div>
      <div className="flex justify-center items-center h-full pt-28">
        <div className="w-10/12 md:w-9/12 xl:w-10/12 desktop:w-9/12">
          <div className="lg:w-auto xl:w-8/12 2xl:w-60% desktop:w-2/4">
            <Form />
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
