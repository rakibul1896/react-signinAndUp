import React from 'react';
import SocialAuth from './SocialAuth';

const Bottom = () => {
  return (
    <div className="w-54.25 md:w-86.25 mx-auto mb-16">
      <div className="flex justify-between items-center">
        <div className="w-10 md:w-24 h-0.25 bg-authBorder"></div>
        <p className="text-center text-authBorder">or continue with</p>
        <div className="w-10 md:w-28 h-0.25 bg-authBorder"></div>
      </div>
      <SocialAuth />
    </div>
  );
};

export default Bottom;
