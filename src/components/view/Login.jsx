import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({ email: "", password: "" })

    useEffect(() => {

        localStorage.getItem("isLogin")
        ? navigate("/cards")
        :null
    }, [])

    function handLogin(e) {

        e.preventDefault()

        const savedUser = JSON.parse(localStorage.getItem("user"))

        !savedUser
            ? alert("Please Signup First")
            : savedUser.email !== loginData.email
                ? alert("Invalid Email") 
            
            : savedUser.password !== loginData.password
                ? alert("Invalid Password")

                : (alert("Login Successfully"), localStorage.setItem("isLogin", true), navigate("/cards"))

    }
    return (
        <section className="px-4 bg-off-white min-h-screen flex items-center">
            <div className="max-w-147.5 mx-auto p-16 shadow-[0px_4px_17.4px0px#00000014] bg-white rounded-2xl">
                <div className="max-w-93.5 w-full text-center mx-auto ">
                    <h1 className="text-black font-bold text-[32px] leading-[120%]">
                        Welcome back!
                    </h1>
                    <p className="font-normal text-[16px] leading-[150%] text-charcoal-gray mt-2">
                        Log in below to access your account and keep things running
                        smoothly.
                    </p>
                </div>
                <form onSubmit={handLogin}>
                    <div className="flex flex-col gap-3 mt-6">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            className="bg-off-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            className="bg-off-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
                        />

                        <button className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-3 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300">
                            Log in
                        </button>
                    </div>
                </form>
                <h3 className="text-[16px] font-normal leading-[150%] text-center mt-5 text text-dark-gray">
                    Don’t have an account? <Link to="/" className='text-black font-semibold ml-2 underline'>Create account</Link>
                </h3>
            </div>
        </section>
    )
}

export default Login