import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import TempAv from '../assets/images/tacostand.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        about: auth.currentUser.info,
        locationState: auth.currentUser.locationState,
        locationCountry: auth.currentUser.locationCountry,
        locationCity: auth.currentUser.locationCity,
    });
    const [changeDetails, setChangeDetails] = useState(false);

    const { name, email, about, locationCity, locationCountry, locationState } =
        formData;

    const onLogout = () => {
        auth.signOut();
        navigate('/');
    };

    return (
        <>
            <section className='max-w-6xl mx-auto flex justify-center flex-col'>
                <h1 className='text-3xl text-center mt-6 font-bold'>
                    My Profile
                </h1>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='w-[50%] mx-auto mt-4 md:w-[30%] lg:w-[35%] mb-12 md:mb-6 rounded border-beef'>
                        <img
                            className='rounded border-salsa border-2 shadow-lg'
                            src={TempAv}
                            alt='avatar'
                        />
                    </div>
                    <div className='flex-col w-full md:w-[50%] mt-6 px-3'>
                        <form>
                            <div className='mb-4'>
                                <label
                                    class='block text-sm font-bold mb-1'
                                    for='name'>
                                    Username:
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    value={name}
                                    disabled
                                    className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-beef rounded transition ease-in-out'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    class='block text-sm font-bold mb-1'
                                    for='email'>
                                    Email:
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    value={email}
                                    disabled
                                    className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-salsa rounded transition ease-in-out'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    class='block text-sm font-bold mb-1'
                                    for='about'>
                                    About:
                                </label>
                                <textarea
                                    type='text'
                                    id='about'
                                    value={about}
                                    disabled
                                    className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-beef rounded transition ease-in-out'
                                />
                            </div>
                            <div className='flex justify-between'>
                                <div className='mb-4 mr-4'>
                                    <label
                                        class='block text-sm font-bold mb-1'
                                        for='locationCity'>
                                        City:
                                    </label>
                                    <input
                                        type='text'
                                        id='locationCity'
                                        value={locationCity}
                                        disabled
                                        className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-beef rounded transition ease-in-out'
                                    />
                                </div>
                                <div className='mb-4 mr-4'>
                                    <label
                                        class='block text-sm font-bold mb-1'
                                        for='locaitonState'>
                                        State:
                                    </label>
                                    <input
                                        type='text'
                                        id='locationCity'
                                        value={locationState}
                                        disabled
                                        className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-beef rounded transition ease-in-out'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        class='block text-sm font-bold mb-1'
                                        for='locationCountry'>
                                        Country:
                                    </label>
                                    <input
                                        type='text'
                                        id='locationCountry'
                                        value={locationCountry}
                                        disabled
                                        className='w-full px-4 py-2 text-xl text-darkGray bg-white border border-beef rounded transition ease-in-out'
                                    />
                                </div>
                            </div>
                            <div className='flex mb-6 justify-between whitespace-nowrap text-sm sm:text-lg'>
                                <p className='text-darkLettuce hover:text-lettuce transition ease-in-out duration-200 cursor-pointer'>
                                    Update Profile
                                </p>
                                <p
                                    onClick={onLogout}
                                    className='text-salsa hover:text-beef transition ease-in-out duration-200 cursor-pointer'>
                                    Sign Out
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
