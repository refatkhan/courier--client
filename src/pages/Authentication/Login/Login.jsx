import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true })} className="input" placeholder="Password" />
                    {
                        errors?.password?.type === 'required' && <p>Password Is Required</p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p><small >New this website ? <Link className='btn btn-ghost' to='/register'>Register</Link></small></p>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}
