import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Forgot = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    function handForgot(e) {

        e.preventDefault()

        const savedUser = JSON.parse(localStorage.getItem("user"))

        email.trim() === ""
            ? alert("Please Fill Field")

            : savedUser.email !== email
                ? alert("Email Not Found")
                : (alert("Email Verified"), navigate("/reset"))
    }
    return (
        <section className="px-4 bg-off-white min-h-screen flex items-center">
            <div className="max-w-147.5 mx-auto p-16 shadow-[0px_4px_17.4px_0px_#00000014] w-full bg-white rounded-2xl">
                <div className="max-w-115.5 w-full text-center mx-auto ">
                    <h1 className="text-black font-bold text-[32px] leading-[120%]">
                        Forgot your password?
                    </h1>
                    <p className="font-normal text-[16px] leading-[150%] text-charcoal-gray mt-2">
                        Enter your email to reset your password.
                    </p>
                </div>
                <form onSubmit={handForgot}>
                    <div className="flex flex-col gap-3 mt-6">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-off-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
                        />


                        <button type='submit' className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-6 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300">
                            Reset password
                        </button>
                    </div>
                </form>
                <h3 className="text-[16px] font-normal leading-[150%] text-center mt-6 text text-dark-gray">
                    Go back to  <Link to="/login" className='text-black font-semibold ml-2 underline'>Log in</Link>
                </h3>
            </div>
        </section>
    )
}

export default Forgot