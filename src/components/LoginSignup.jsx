import React, { useState } from 'react'
import user_icon from '../assets/user-icon.png'
import email_icon from '../assets/email-icon.png'
import password_icon from '../assets/password-icon.png'
import notebook_icon from '../assets/notebook-icon.png'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleSubmit() {
        if (!username) return setError('Please enter username');
        if (!email) return setError('Please enter email');
        if (!password) return setError('Please enter password');
        setError('');
        navigate('/main');
    }
    return (
        <div className='bg-gradient-to-b from-white to-cyan-500 flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-10'>
            <div className="header flex justify-between -mt-14 w-[100vw] pl-10 pr-10">
                <div className="heading flex">
                    <img src={notebook_icon} alt="" className='h-9 w-9' />
                    <div className='uppercase font-bold text-cyan-700 text-[1.5rem]'>NoteSaver</div>
                </div>
                <div className="user">
                    <img src={user_icon} alt="" className='h-10 w-10 border border-gray-800 rounded-full hover:cursor-pointer' />
                </div>
            </div>
            <div className='box h-[75%] w-[70%] md:w-[30%] shadow-2xl rounded-4xl bg-white'>
                <div className='header rounded-2xl text-black flex justify-center p-5'>
                    <div className='text-cyan-700 font-bold text-[1.5rem] text-center border-b-2 w-30 max-h-fit'>{action}</div>
                </div>
                <div className='inputs flex flex-col gap-6 p-5'>
                    {action === "Login" ? <div></div> :
                        <div className='input flex h-14 border items-center bg-gray-200 rounded-2xl'>
                            <img src={user_icon} alt="" className='h-12 w-12' />
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='h-10 border border-black w-72 text-black border-none outline-none' placeholder='Enter Name' />
                        </div>
                    }
                    <div className='input flex h-14 border items-center bg-gray-200 rounded-2xl'>
                        <img src={email_icon} alt="" className='h-12 w-12' />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='h-10 border border-black w-72 text-black border-none outline-none' placeholder='Enter email id' />
                    </div>
                    <div className='input flex h-14 border items-center bg-gray-200 rounded-2xl'>
                        <img src={password_icon} alt="" className='h-12 w-12' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='h-10 border border-black w-72 text-black border-none outline-none' placeholder='Enter Password' />
                    </div>
                </div>
                {error && <div className="text-gray-900 text-sm pl-3 text-center">{error}</div>}
                <div className='submits flex gap-10 justify-center p-3'>
                    <div className={`w-32 h-10 rounded-2xl flex items-center justify-center hover:cursor-pointer shadow-xl ${action === "Login" ? "bg-gray-400" : "bg-cyan-600"}`} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={`w-32 h-10 rounded-2xl flex items-center justify-center hover:cursor-pointer shadow-xl ${action === "Sign Up" ? "bg-gray-400" : "bg-cyan-600"}`} onClick={() => { setAction("Login") }}>Login</div>
                </div>
                <div className="submit flex items-center justify-center mt-3">
                    <div className='h-9 w-80 shadow-2xl border border-cyan-500 text-black hover:cursor-pointer flex items-center justify-center rounded-2xl' onClick={handleSubmit}>Submit data</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
