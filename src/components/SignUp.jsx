import { useState } from 'react'
import './SignUp.css'

export default function SignUp () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log( {email, password, confirmpassword})
    }

    return (
        <div className='signup-body'>
            <div className='home-image-container'>
                <img className='home-image' src = './src/assets/home-bg.png' ></img>
            </div>
            <div className='form-container'>
                <div>
                    <h1 className='form-title'>Sign Up</h1>
                </div>
                <form className='form-contents' onSubmit={onSubmit}>
                    <input type='email' value={email} placeholder='Enter your email...' onChange={(e) => {setEmail(e.target.value)}} />
                    <br />
                    <br />
                    <input type='password' value={password} placeholder='Enter your password...' onChange={(e) => {setPassword(e.target.value)}} />
                    <br />
                    <br />
                    <input type='password' value={confirmpassword} placeholder='Confirm your password...' onChange={(e) => {setConfirmPassword(e.target.value)}} />
                    <br />
                    <br />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}