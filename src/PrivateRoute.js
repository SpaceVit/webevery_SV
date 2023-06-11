import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ redirectPath = '/', children }) {
  const rightStyle = JSON.parse(localStorage.getItem('thirdStyle'));
  if (!rightStyle) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
