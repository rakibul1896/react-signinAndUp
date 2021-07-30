import React from 'react';
import manWithPc from '../../images/manWithPc.png';

const Image = () => {
    return (
        <div className='lg:mt-32  mb-16 desktop:mt-40 flex justify-center'>
            <img src={manWithPc} alt="Man with a Laptop." className='w-60%'/>
        </div>
    )
}

export default Image
