import React, { useState, useEffect } from 'react';
import SignButton from '../signIn/SignButton';
import ProfilePicture from './ProfilePicture';
import Form from './Form';
import Bottom from '../signIn/Bottom';
import { Link } from 'react-router-dom';

const RightSide = ({ height }) => {
  const [screen, setScreen] = useState(true);

  console.log(window.innerHeight);
  console.log(height);

  useEffect(() => {
    const windowHeight = window.innerHeight;

    const handleScreen = () => {
      if (height > windowHeight) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };

    handleScreen();
    window.addEventListener('resize', handleScreen);

    return () => {
      window.removeEventListener('resize', handleScreen);
    };
  });

  return (
    <div className={screen ? 'h-full bg-aliceBlue' : 'h-screen bg-aliceBlue'}>
      <div className="relative w-10/12 md:w-9/12 xl:w-10/12 desktop:w-182 mx-auto">
        <Link to="/">
          <SignButton>Sign in</SignButton>
        </Link>
      </div>
      <div className="flex justify-center items-center h-full pt-28">
        <div className="w-10/12 md:w-9/12 xl:w-10/12 desktop:w-182">
          <div className="">
            <ProfilePicture/>
            <Form />
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;


