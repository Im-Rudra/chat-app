import firebaseInit from '../firebase/firebase.config';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useFirebase = () => {
  // states
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  firebaseInit();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in func here
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  // sign out google func
  const signOutGoogle = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // onAuth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);

  return {
    signInWithGoogle,
    signOutGoogle,
    error,
    user,
    loading
  };
};

export default useFirebase;
