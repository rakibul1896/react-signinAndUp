import React from 'react';
import { useHistory } from 'react-router';

const Text = ({ header, para, add }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push('/sign_up');
  };
  return (
    <div className="lg:w-100 xl:w-104 mx-auto lg:mt-16 2xl:mt-14 desktop:mt-20">
      <h1 className="w-9/12 font-bold lg:text-3xl 2xl:text-4xl mb-3">
        {header}
      </h1>
      <p className="w-8/12 text-headerPara lg:text-base 2xl:text-xl ">
        {para}

        <span
          className=" lg:text-lg 2xl:text-2xl text-buttonColor ml-3 cursor-pointer"
          onClick={handleOnClick}
        >
          {add}
        </span>
      </p>
    </div>
  );
};

export default Text;
