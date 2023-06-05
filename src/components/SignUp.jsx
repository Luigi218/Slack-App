import './SignUp.css'

export default function SignUp () {
    return (
        <div className='signup-body'>
            <div className='home-image-container'>
                <img className='home-image' src = './src/assets/home-bg.png' ></img>
            </div>
            <div className='form-container'>
                <div>
                    <h1 className='form-title'>Sign Up</h1>
                </div>
                <form className='form-contents'>
                    <input type='email' placeholder='Enter your email...'/>
                    <br />
                    <br />
                    <input type='password' placeholder='Enter your password...' />
                    <br />
                    <br />
                    <input type='password' placeholder='Confirm your password...' />
                    <br />
                    <br />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}