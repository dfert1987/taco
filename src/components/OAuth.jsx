import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

function OAuth() {
    const navigate = useNavigate();

    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }
            navigate('/');
        } catch (error) {
            toast.error("Couldn't authorize with Google.");
        }
    };

    return (
        <button
            type='button'
            onClick={onGoogleClick}
            className='flex items-center justify-center w-full bg-salsa text-white px-7 py-2 uppercase text-sm font-medium hover:bg-warningHover active:bg-warning shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded'>
            <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
            Continue with Google
        </button>
    );
}

export default OAuth;
