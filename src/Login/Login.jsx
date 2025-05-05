import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
    .then(result => {
      console.log(result)
      navigate(location?.state?.from || '/');
    })
    .catch((error) => {
      alert(error);
    });
  }

  return (
    <div className="hero bg-[#F8FAFC] ">
  <div className="hero flex justify-between lg:flex-row-reverse w-full ml-5 my-2 pl-5 gap-16">
    <div className="flex-2/4">
      
      <img className='rounded-ss-2xl object- w-full h-[80vh]' src="https://plus.unsplash.com/premium_photo-1674237276482-c2822fdfe7cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
    <div className="card flex-2/4 bg-[#D9DFC6] text-black w-full max-w-lg shrink-0 shadow-2xl">
      <div className="card-body space-y-5">
      <h1 className="text-5xl font-bold text-black">Login now!</h1>
        <form onSubmit={handlelogin} >
        <fieldset className="fieldset ">
          <label className="label">Email</label>
          <input name='email' type="email" className="input w-full text-black bg-white" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input w-full text-black bg-white" placeholder="Password" />
          <div><a className="link link-hover text-black">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p className='text-black'>Don't Have an Account? <Link to="/register"><a className='font-bold' href="">Register</a></Link></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login