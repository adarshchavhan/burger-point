import React from 'react'
import { RiGoogleFill } from 'react-icons/ri'

const Login = () => {

  const handleGoogleLogin = () => {
    window.open(`${import.meta.env.VITE_BASE_URL}/auth/google`, '_self')
  }

  return (
    <div className="login__page">
          <button onClick={handleGoogleLogin}><RiGoogleFill />Continue with Google</button>
    </div>
  )
}

export default Login
