import { Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  if (loading) return <h2>Loading...</h2>;
  return user.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
