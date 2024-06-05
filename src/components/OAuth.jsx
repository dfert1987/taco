import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function OAuth() {
    return (
        <button className='flex items-center justify-center w-full bg-salsa text-white px-7 py-2 uppercase text-sm font-medium hover:bg-warningHover active:bg-warning shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded'>
            <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
            Continue with Google
        </button>
    );
}

export default OAuth;