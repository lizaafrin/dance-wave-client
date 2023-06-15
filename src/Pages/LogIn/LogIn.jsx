import React from 'react';
import loginImg from '../../assets/login.png';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import bg from '../../assets/bg.jpg';
import Swal from 'sweetalert2';
import google from '../../assets/google.png'

const LogIn = () => {
    const [hidepass, setHidePass] = useState(true)
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleHideBtn = () => {
        setHidePass(current => !current);
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'User login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL, role: 'student'}
                fetch('https://dancewave-server-side.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User Signed In Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, {replace: true});
                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>Dance Wave | LogIn</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${bg})` }} className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left w-1/2">
                        <img className='w-full' src={loginImg} alt=""/>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600"> Email is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${hidepass ? 'password' : 'text'}`}
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    name="password" placeholder="password" className="input input-bordered"
                                />
                                {hidepass ?
                                    <button onClick={handleHideBtn} >
                                        <FaRegEye className='absolute right-4 top-12'></FaRegEye>
                                    </button>
                                    :
                                    <button onClick={handleHideBtn} >
                                        <FaEyeSlash className='absolute right-4 top-12'></FaEyeSlash>
                                    </button>
                                }
                                {errors.password?.type === 'required' && <p className="text-red-600">Please provide password </p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be six characters </p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters </p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, one special character and one number </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {/* <label>
                                    <button onClick={handleHideBtn} >
                                        <FaEyeSlash className='absolute right-4 top-12'></FaEyeSlash>
                                        <small>
                                            Show Password!
                                        </small>
                                    </button>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-slate-200" type="submit" value='LogIn' />
                            </div>
                        </form>
                        <div className="divider w-3/4 mx-auto">Or</div>
                        <button onClick={handleGoogleSignIn} className='w-fit mx-auto hover:scale-125' >
                            <img className='w-8 h-8' src={google} alt="" />
                        </button>
                        <p className='text-center text-sm my-4'>Don't have an account?<span className='underline ms-2 font-bold text-violet-500'><Link to='/signup'>SignUp</Link></span></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;