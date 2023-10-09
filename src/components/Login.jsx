/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../Context/AuthContext";
import Swal from "sweetalert2";


const Login = () => {
    const {loginUser,googleSignUp}=useContext(FirebaseContext)
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const location=useLocation()
  const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const field= e.target;
        const email=field.email.value;
        const password=field.password.value;
        console.log(email,password)
    
        loginUser(email,password)
        .then(result=>{
            setSuccess(Swal.fire(
                'Good job!',
                'Successfully Login!',
               
              ))

              e.target.reset()
              navigate(location?.state?location.state : "/" )
              console.log(result)
        })
        .catch((error) => {
           
            const errorMessage = error.message;
            setError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errorMessage}`,
               
              }))
            console.log(errorMessage)
          });

    }

    const handlegoogleSignIn=()=>{
        googleSignUp()
        .then(result=>{
            setSuccess(Swal.fire(
                'Good job!',
                'Successfully Login!',
               
              ))
              navigate(location?.state?location.state : "/" )

            console.log(result.user)
        }) 
        .catch((error)=>{
            const errorMessage = error.message;
            setError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errorMessage}`,
               
              }))
        })
    }


    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handleLogin}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
        <p>First to our website? 
            <Link className="font-bold" to='/rgs'>
         Registration
        </Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button
          onClick={handlegoogleSignIn}
          className="btn text-lg mt-4"><i className="fa-brands fa-google text-2xl text-blue-600 "></i>Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;