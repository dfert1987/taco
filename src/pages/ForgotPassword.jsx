import React, { useState } from 'react';
import OAuth from '../components/OAuth';
import { Link } from 'react-router-dom';

import TacoNight from '../assets/images/tacotrucknight.jpg';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const onChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section>
            <h1 className='text-6xl text-center mt-6 font-bold font-bebas text-salsa'>
                Forgot Password
            </h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img
                        src={TacoNight}
                        alt='Taco truck at night'
                        className='w-full rounded-2xl'
                    />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form>
                        <input
                            type='email'
                            className='mb-6 w-full px-4 py-2 text-darkGray bg-white border-lightGrey rounded transition ease-in-out'
                            id='email'
                            value={email}
                            onChange={onChange}
                            placeholder='Email Address'
                        />

                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <div className='flex'>
                                <p className='mb-6 mr-1'>
                                    Don't have an account?
                                </p>
                                <Link
                                    to='/sign-up'
                                    className='text-lettuce hover:text-salsa transition duration-200 ease-in-out ml-1'>
                                    Register
                                </Link>
                            </div>
                            <p>
                                <Link
                                    className='text-beef hover:text-salsa transition duration-200 ease-in-out '
                                    to='/sign-in'>
                                    Back to Sign In
                                </Link>
                            </p>
                        </div>
                        <button
                            className='w-full bg-lettuce text-white font-medium uppercase rounded shadow-md hover:bg-darkLettuce hover:shadow-lg active:bg-darkestLettuce transition duration-150 ease-in-out px-7 py-2'
                            type='submit'>
                            Send Email
                        </button>
                        <div className='items-center flex my-4 before:border-t before:flex-1 before:border-darkGray after:border-t after:flex-1 after:border-darkGray'>
                            <p className='text-center font-semibold mx-4'>OR</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    );
}
