import React from 'react';
import Logo from './Logo';
import Text from './Text';
import Image from './Image';

const LeftSide = ({ header, para, add }) => {
  return (
    <div className="lg:flex-grow lg:w-2/4 hidden lg:block">
      <Logo />
      <Text header={header} para={para} add={add} />
      <Image />
    </div>
  );
};

export default LeftSide;
