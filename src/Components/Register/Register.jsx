import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.init';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            console.log(result)
            form.reset()
        })
        .catch(error =>{
            console.log(error);
        })
    }
    

    return (
        <section className='border rounded-xl p-[17px] mx-auto md:w-1/2 mt-1 shadow-3xl'>
            <h2 className='text-center text-2xl'>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <div className='flex flex-col my-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className='border rounded p-2 text-base' autoComplete='off' placeholder='Name' />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
                </div>

                <p className='text-[#da4747]'></p>
                <p className='text-[#32bc40]'></p>

                <button type='submit' className='bg-[#289199] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Sign Up</button>
                <p className='mt-[8px] text-center'>Already have an account? <Link to="/login" className='text-[#1f32dd]'>Login</Link></p>


            </form>
        </section>
    );
};

export default Register;