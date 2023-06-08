import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/signup.png';

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // updateUserProfile(data.name, data.photoURL)
                //     .then(() => {
                //         console.log('Updated profile');
                //         const savedUser = { name: data.name, email: data.email }
                //         fetch('http://localhost:5000/users', {
                //             method: 'POST',
                //             headers: {
                //                 'Content-Type': 'application/json'
                //             },
                //             body: JSON.stringify(savedUser)
                //         })
                //             .then(res => res.json())
                //             .then(data => {
                //                 if (data.insertedId) {
                //                     reset();
                //                     Swal.fire({
                //                         position: 'top-end',
                //                         icon: 'success',
                //                         title: 'User Created successfully',
                //                         showConfirmButton: false,
                //                         timer: 1500
                //                     });
                //                     navigate('/');
                //                 }
                //             })

                //         // reset();
                //         // Swal.fire({
                //         //     title: 'User created successfully',
                //         //     text: 'Modal with a custom image.',
                //         //     imageUrl: 'https://unsplash.it/400/200',
                //         //     imageWidth: 400,
                //         //     imageHeight: 200,
                //         //     imageAlt: 'Custom image',
                //         // })
                //         // navigate('/');
                //     })
                //     .catch(error => console.log(error))
            })
    }

    return (
        <div style={{backgroundImage: `url(https://img.freepik.com/free-photo/blurred-blue-sky-sea-well-use-as-blur-backdrop-ocean-concept-blurry-pastel-colored-sunshine-dust-scratched_1258-238.jpg?w=1380&t=st=1686238611~exp=1686239211~hmac=a0fb91d0ca21e46073716d53412635367cdfda71f8950e81e91f96c4b45eadbc)`}}  className="hero min-h-screen bg-base-200">
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
                            <input className="btn bg-slate-200" type="submit" value='sign up' />
                        </div>
                    </form>
                    <p className='text-center text-sm my-4'>Already have an account?<span className='underline ms-2 font-bold text-violet-500'><Link to='/login'>Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;