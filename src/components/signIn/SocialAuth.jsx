import React from 'react'

const SocialAuth = () => {
    return (
        <div className='flex justify-between mt-6'>
            <button className="text-authFacebook  px-4 py-2 md:px-10 md:py-5 border-authBorder border-2 rounded-lg">Facebook</button>
            <button className="text-authGoogle px-4 py-2 md:px-10 md:py-5 border-authBorder border-2 rounded-lg">Google</button>
        </div>
    )
}

export default SocialAuth
