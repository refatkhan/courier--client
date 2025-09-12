import React from 'react'
import { useForm } from "react-hook-form"
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useAuth();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>

            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email"
                                {...register('email', { required: true })}
                                className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                {...register('password', { required: true, minLength: 8 })}
                                className="input" placeholder="Password" />
                            {errors.password?.type === "required" && (
                                <p role="alert"> password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p role="alert"> minimun 8 digit are required</p>
                            )}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Register Now</button>
                        </fieldset>
                        <p><small >Already have an account ? <Link className='btn btn-ghost' to='/login'>Login</Link></small></p>
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    )
}
