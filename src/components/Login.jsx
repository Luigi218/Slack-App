import './Login.css'

export default function Login () {
    return (
        <div className='login-body'>
            <div className='home-image-container'>
                <img className='home-image' src = './src/assets/home-bg.png' ></img>
            </div>
            <div className='form-container'>
                <div>
                    <h1 className='form-title'>Login</h1>
                </div>
                <form className='form-contents'>
                    <input type='email' placeholder='Enter your email...'/>
                    <br />
                    <br />
                    <input type='password' placeholder='Enter your password...' />
                    <br />
                    <br />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <span>Sign up here!</span></p>
            </div>
        </div>
    )
}