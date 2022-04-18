import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'
const RequireAuth = ({children}) => {
    //check if user logged in
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();
    //loading
    if (loading) {
        return <Loading></Loading>
    }
    //If user not logged in redirect to login page
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth