import React, {useState} from 'react';
import camera from '../../images/camera.png';

const ProfilePicture = () => {
  const [imgSrc, setImgSrc] = useState(camera);
  const handleChoosePhoto = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = "image/x-png,image/gif,image/jpeg"
    input.addEventListener('change', ev => {
       const file = ev.target.files[0]
       const src = URL.createObjectURL(file)
       setImgSrc(src);
    })
    input.click()
 }

  return (
    <div className="flex justify-around lg:justify-start">
      <div className='lg:flex items-center mt-16 '>
        <div className="flex justify-center items-center w-28 h-28 bg-white border-border border-4 mx-auto  rounded-2xl overflow-hidden">
          <img src={imgSrc} alt="A camera" className="" onClick={handleChoosePhoto}/>
        </div>
        <p className='text-center lg:text-left text-profileColor p-4'>Upload <br/> Profile Picture</p>
      </div>
    </div>
  );
};

export default ProfilePicture;
