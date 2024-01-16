import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import  { AuthContext } from '../../Provider/AuthProvider';


const LogIn = () => {

const {signInUser} = useContext(AuthContext)

const handleSignIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result =>{
        console.log(result)
        form.reset()
    })
    .catch(error =>{
        console.log(error);
    })
}

    return (
        <section className='border rounded-xl p-[25px] mt-10 shadow-3xl mx-auto md:w-1/2'>
            <h2 className='text-center text-3xl'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="email" className='text-[17px]'>Email</label>
                    <input type="email"  name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="password" className='text-[17px]'>Password</label>
                    <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' required />
                </div>
                <p className='text-[#da4747]'></p>
                <p className='text-[#24a049]'></p>
                <button type='submit' className='bg-[#289199] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Login</button>
                <p className='mt-[8px] text-center'>New to Project ? <Link to="/register" className='text-[#1f81dd]'>Create New Account</Link><Link  className='text-[#1f81dd] ml-3'>Forget Password</Link></p>

                <div className='flex items-center justify-between mt-[25px] '>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                </div>
                <button  className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
                <button  className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[10px]'><AiFillGithub className='text-[32px]' /><span>Continue with Github</span></button>
            </form>
        </section>
    );
};

export default LogIn;