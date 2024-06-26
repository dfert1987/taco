import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import TacoNight from '../assets/images/tacostand.jpeg';
import { toast } from 'react-toastify';

export default function SignUp() {
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            updateProfile(auth.currentUser, {
                displayName: name,
            });

            const formDataCopy = { ...formData };
            const user = userCredential.user;
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();
            formDataCopy.avatar = '';
            formDataCopy.about = '';
            formDataCopy.age = 30;
            formDataCopy.locationState = 'TX';
            formDataCopy.locationCountry = 'USA';
            formDataCopy.locationCity = 'Austin';
            await setDoc(doc(db, 'users', user.uid), formDataCopy);

            toast.success(' ¡Órale! Welcome to Taco Cartographer!');
            navigate('/');
        } catch (error) {
            toast.error('Something went wrong.');
        }
    };

    return (
        <section>
            <h1 className='text-6xl text-center mt-6 font-bold font-bebas text-salsa'>
                Sign Up
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
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            className='mb-6 w-full px-4 py-2 text-darkGray bg-white border-lightGrey rounded transition ease-in-out'
                            id='name'
                            value={name}
                            onChange={onChange}
                            placeholder='Username'
                        />
                        <input
                            type='email'
                            className='mb-6 w-full px-4 py-2 text-darkGray bg-white border-lightGrey rounded transition ease-in-out'
                            id='email'
                            value={email}
                            onChange={onChange}
                            placeholder='Email Address'
                        />
                        <div className='relative mb-6'>
                            <input
                                type={showPass ? 'text' : 'password'}
                                className='w-full px-4 py-2 text-darkGray bg-white border-lightGrey rounded transition ease-in-out'
                                id='password'
                                value={password}
                                onChange={onChange}
                                placeholder='Password'
                            />
                            {showPass ? (
                                <FaEyeSlash
                                    className='absolute right-3 top-3 text-xl cursor-pointer'
                                    onClick={() =>
                                        setShowPass((prevState) => !prevState)
                                    }
                                />
                            ) : (
                                <FaEye
                                    className='absolute right-3 top-3 text-xl cursor-pointer'
                                    onClick={() =>
                                        setShowPass((prevState) => !prevState)
                                    }
                                />
                            )}
                        </div>
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <div className='flex'>
                                <p className='mb-6 mr-1'>Have an account?</p>
                                <Link
                                    to='/sign-in'
                                    className='text-lettuce hover:text-salsa transition duration-200 ease-in-out ml-1'>
                                    Sign In
                                </Link>
                            </div>
                            <p>
                                <Link
                                    className='text-beef hover:text-salsa transition duration-200 ease-in-out '
                                    to='/forgot-password'>
                                    Forgot password?
                                </Link>
                            </p>
                        </div>
                        <button
                            className='w-full bg-lettuce text-white font-medium uppercase rounded shadow-md hover:bg-darkLettuce hover:shadow-lg active:bg-darkestLettuce transition duration-150 ease-in-out px-7 py-2'
                            type='submit'>
                            Sign Up
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
