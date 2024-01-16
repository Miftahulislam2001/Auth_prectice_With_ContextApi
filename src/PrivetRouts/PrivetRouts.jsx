import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouts = ({ children }) => {
    const { user, loading} = useContext(AuthContext)

    if(loading){
        return <h4>Processing...</h4>
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true}>

    </Navigate>
};

export default PrivetRouts;