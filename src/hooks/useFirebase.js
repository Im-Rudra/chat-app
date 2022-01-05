import firebaseInit from '../firebase/firebase.config';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFirebase = () => {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // firebase parameters
  firebaseInit();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // // fetch requests
  // const upgetUser = (data) => {
  //   const { displayName, email, photoURL } = data;
  //   const userDoc = { name: displayName, email, photoURL };
  //   const url = 'http://localhost:5000/upgetUser';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(userDoc)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.email) setDbUser(data);
  //     });
  // };

  // sign in func here
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        setUser(user);
        setError('');
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  // sign out google func
  const signOutGoogle = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  // onAuth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
        navigate('/chat');
      } else {
        setUser(null);
        navigate('/signup');
      }
      setLoading(false);
    });
    return () => unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
