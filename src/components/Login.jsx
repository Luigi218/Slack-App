import { useState } from 'react'
import './Login.css'

export default function Login () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log( {email, password})
    }

    return (
        <div className='login-body'>
            <div className='home-image-container'>
                <img className='home-image' src = './src/assets/home-bg.png' ></img>
            </div>
            <div className='form-container'>
                <div>
                    <h1 className='form-title'>Login</h1>
                </div>
                <form className='form-contents' onSubmit={onSubmit}>
                    <input type='email' value={email} placeholder='Enter your email...' onChange={(e) => {setEmail(e.target.value)}} />
                    <br />
                    <br />
                    <input type='password' value={password} placeholder='Enter your password...' onChange={(e) => {setPassword(e.target.value)}} />
                    <br />
                    <br />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <span>Sign up here!</span></p>
            </div>
        </div>
    )
}