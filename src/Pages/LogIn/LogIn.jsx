import React from 'react';
import loginImg from '../../assets/login.png';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { signInWithGoogle, signInWithGitHub, setUser, user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <>
            <Helmet>
                <title>Dance Wave | LogIn</title>
            </Helmet>
            <div style={{backgroundImage: `url(https://img.freepik.com/free-photo/blurred-blue-sky-sea-well-use-as-blur-backdrop-ocean-concept-blurry-pastel-colored-sunshine-dust-scratched_1258-238.jpg?w=1380&t=st=1686238611~exp=1686239211~hmac=a0fb91d0ca21e46073716d53412635367cdfda71f8950e81e91f96c4b45eadbc)`}} className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left w-1/2">
                        <img className='w-full' src={loginImg} alt="" srcset="" />
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Please provide password </p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be six characters </p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters </p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, one special character and one number </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-slate-200" type="submit" value='LogIn' />
                            </div>
                        </form>
                        <p className='text-center text-sm my-4'>Don't have an account?<span className='underline ms-2 font-bold text-violet-500'><Link to='/signup'>SignUp</Link></span></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;