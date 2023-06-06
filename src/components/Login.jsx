import { useState } from 'react'
import './Login.css'

export default function Login () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log( {email, password})
    

    const response = await fetch ('http://206.189.91.54/api/v1/auth/sign_in', {
            method: 'POST',
            body: {
                email: email,
                password: password,
            }
        })
    
    const body = await response.json()
    console.log(body)
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