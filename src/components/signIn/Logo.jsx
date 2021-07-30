import React from 'react';
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <div className='lg:w-44 2xl:w-52 desktop:w-auto lg:ml-8 2xl:ml-20 desktop:ml-32'>
            <img src={logo} alt="Manuscripts" />
        </div>
    )
}

export default Logo
