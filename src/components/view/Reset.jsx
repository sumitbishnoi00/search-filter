import React,{useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'

const Reset = () => {

    const navigate = useNavigate()

    const [passwordData, setPasswordData] = useState({newPassword: "", confirmPassword: ""})

    function handReset(e){

        e.preventDefault()

        const savedUsers = JSON.parse(localStorage.getItem("users")) || []

        const forgotEmail = localStorage.getItem("forgotEmail")

        passwordData.newPassword.trim() === "" ||
            passwordData.confirmPassword.trim() === ""

            ? alert("Please Fill All Fields")
            : passwordData.newPassword !== passwordData.confirmPassword
                ? alert("Passwords Do Not Match")
                
                : (() => {

                    const updatedUsers = savedUsers.map((item) => 

                        item.email === forgotEmail
                        ? {...item, password: passwordData.newPassword}
                        : item
                    )

                    localStorage.setItem("users", JSON.stringify(updatedUsers))

                    localStorage.removeItem("forgotEmail")

                    alert("Password Reset Successfully")

                    navigate("/login")
                })()
    }
    return (
        <section className="px-4 bg-off-white min-h-screen flex items-center">
            <div className="max-w-147.5 w-full mx-auto p-16 shadow-[0px_4px_17.4px_0px_#00000014] bg-white rounded-2xl">
                <div className="max-w-115.5 w-full text-center mx-auto ">
                    <h1 className="w-full text-black font-bold text-[32px] leading-[120%]">
                        Reset password
                    </h1>
                    <p className="w-full font-normal text-[16px] leading-[150%] text-charcoal-gray mt-2">
                        Please enter new passoword
                    </p>
                </div>
                <form onSubmit={handReset}>
                    <div className="flex flex-col gap-3 mt-6">
                        <input
                            type="password"
                            placeholder="New password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            className=" w-full bg-off-white text-dark-gray font-normal text-[16px] leading-[150%] p-3.5 rounded-lg outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                            className="bg-off-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
                        />


                        <button type='submit' className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-3 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300">
                            Submit
                        </button>
                    </div>
                </form>
                <h3 className="text-[16px] font-normal leading-[150%] text-center mt-6 text text-dark-gray">
                    Go back to  <Link to="/forgot" className='text-black font-semibold ml-2 underline'>Forgot Password</Link>
                </h3>
            </div>
        </section>
    )
}

export default Reset