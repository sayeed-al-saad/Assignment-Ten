import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="hero bg-[#F8FAFC] ">
  <div className="hero flex justify-between lg:flex-row-reverse w-full ml-5 my-2 pl-8 gap-16">
    <div className="flex-2/4">
      
      <img className='rounded-ss-2xl object-centre w-full h-[80vh]' src="https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
    <div className="card flex-2/4 bg-[#D9DFC6] text-black w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body space-y-5">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <fieldset className="fieldset ">
          <label className="label">Name</label>
          <input type="text" className="input w-full text-black bg-white" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input w-full text-black bg-white" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full text-black bg-white" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
        <p>Already have an account? <Link to="/login"><a className='font-bold' href="">Login</a></Link></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register