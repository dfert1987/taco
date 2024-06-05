import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TacoLogo from '../assets/images/tacologowhite.png';
import '../styles/mainStyle.css';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    };

    return (
        <div className='bg-lettuce border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img
                        src={TacoLogo}
                        alt='logo'
                        className='h-24 cursor-pointer drop-shadow-md pb-2'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className='flex space-x-10 text-white font-bebas text-3xl'>
                        <li
                            className={`navShadow cursor-pointer ${
                                pathMatchRoute('/') && 'text-shellDark'
                            }`}
                            onClick={() => navigate('/')}>
                            Home
                        </li>
                        <li
                            className={`navShadow cursor-pointer ${
                                pathMatchRoute('/map') && 'text-shellDark'
                            }`}
                            onClick={() => navigate('/map')}>
                            Map
                        </li>
                        <li
                            className={`navShadow cursor-pointer ${
                                pathMatchRoute('/sign-in') && 'text-shellDark'
                            }`}
                            onClick={() => navigate('/sign-in')}>
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
