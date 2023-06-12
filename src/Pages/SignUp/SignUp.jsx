import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/signup.png';
import bg from '../../assets/bg.jpg'
import Swal from "sweetalert2";
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import google from '../../assets/google.png'

const SignUp = () => {
    const [error, setError] = useState('');
    const [hidepass, setHidePass] = useState(true);
    const { handleSubmit, register, reset, formState: { errors }, watch } = useForm();

    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleHideBtn = () => {
        setHidePass(current => !current);
    }

    const onSubmit = data => {
        const name = data.name;
        const photoURL = data.photoURL;
        const email = data.email;
        const password = data.password;
        const confirmPass = data.confirm;
        console.log(data, error);
        if (password !== confirmPass) {
            setError("Your password did not match!");
            return;
        } else {
            createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const savedUser = { name: name, email: email, photoURL: photoURL, role: 'student' };
                        console.log(savedUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User Created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                        reset();
                    })
                    .catch(error => setError(error))
            })
        }
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL, role: 'student' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User Created successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
            })
    }

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-full' src={signupImg} alt="" srcset="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600"> Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })}
                                placeholder="photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                        </div>
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
                                name="password" placeholder="password" className="input form-control input-bordered" />
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={`${hidepass ? 'password' : 'text'}`}
                                {...register("confirm", {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })
                                }
                                name="confirm" placeholder="confirm password" className="input form-control input-bordered" />
                            {error && <p className="text-red-600">Your password did not match </p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-200" type="submit" value='sign up' />
                        </div>
                    </form>
                    <div className="divider w-3/4 mx-auto">Or</div>
                    <button onClick={handleGoogleSignIn} className='w-fit mx-auto hover:scale-125'>
                        <img className='w-8 h-8' src={google} alt="" />
                    </button>
                    {/* <hr className='w-1/2 border-violet-500 mx-auto' /> */}
                    <p className='text-center text-sm my-4'>Already have an account?<span className='underline ms-2 font-bold text-violet-500'><Link to='/login'>Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;