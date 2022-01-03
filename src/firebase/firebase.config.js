import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDnzF9g9iDmuuwUjl4y5Kb9E3COuas6HxE',
  authDomain: 'chat-app-c8a91.firebaseapp.com',
  projectId: 'chat-app-c8a91',
  storageBucket: 'chat-app-c8a91.appspot.com',
  messagingSenderId: '649757784364',
  appId: '1:649757784364:web:c9f79ea887011e6e355489',
  measurementId: 'G-ND5333K0NL'
};

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;
