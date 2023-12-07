'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { LoginUser } from './loginService';
import { useAppDispatch } from '@/redux/hook/hook';
import { AdminState } from '@/redux/actions/userSlice';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch()
    const router = useRouter()
    const handleLogin = async () => {
        // Add your login logic here
        const payload = {
            email: email,
            password: password
        }
        const res = await LoginUser(payload)
        if (res) {
            console.log(res, "res")
            dispatch(AdminState(true))
            router.push("/home/user")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black">
            <div className="card p-12 bg-base-100 shadow-xl">
                <h2 className="text-2xl font-normal mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold">Email:</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold">Password:</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={() => handleLogin()} className="btn btn-active btn-primary w-80 ">
                        Login
                    </button>
                    <div className='text-blue-400 text-sm text-right pt-1 hover:text-black'>
                        <Link href={"/signup"}>Create Account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login
