import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDCC5OdZ9vwQ8x0AvqG4soG1ZLVNk7MO4g',
    authDomain: 'tacocart-42f47.firebaseapp.com',
    projectId: 'tacocart-42f47',
    storageBucket: 'tacocart-42f47.appspot.com',
    messagingSenderId: '20755691863',
    appId: '1:20755691863:web:5cab9c9654f9caac78a612',
    measurementId: 'G-LCWY8Z5K4Q',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
