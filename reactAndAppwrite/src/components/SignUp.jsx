import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const signup = async (data) => {
        setError('');
        try{
            const userData = await authService.createAccount( data );
            if(userData) {
                const user = await authService.getCurrentUser();
                if(user) dispatch(login(user));
                navigate('/');
            }
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                { error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form action="" onSubmit={handleSubmit(signup)}>
                    <div className="space-y-5">
                        <Input label="Full Name: " type="text" placeholder="Enter your full name" 
                            {...register('name', { required: true })}
                            /> 
                        <Input label="Email: " placeholder="Enter your email" type="email" 
                            { ...register('email', { required: true, 
                                validate: {matchPatter: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) 
                                            || "Email address must be valid email address"} 
                            }) } />
                        <Input placeholder='Enter your password' label="Password: " type="password"
                            { ...register('password', { required: true })} 
                            />
                        <Button type="submit" className="w-full">Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
