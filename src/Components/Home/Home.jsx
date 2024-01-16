import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    
    return (
        <div>
            <h2>This is Home Components : {user}</h2>
        </div>
    );
};

export default Home;