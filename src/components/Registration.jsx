/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Context/AuthContext";
import Swal from "sweetalert2";



const Registration = () => {
    const {creatUser} =useContext(FirebaseContext);
   
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')

    const handleRegister =(e)=>{
        e.preventDefault();
        const field= e.target;
        const userName=field.name.value;
        const email=field.email.value;
        const password=field.password.value;
        console.log(userName)

        if(password.length <6 ){
            setError(Swal.fire({
                icon: 'error',
            
                text: 'Password should be at least 6 character!'
                
              }))
            
            return
        }
       else if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{6,}$/.test(password)){
        setError(Swal.fire({
            icon: 'error',
        
            text: "password should have uppercase,lowercase,special charecter,and number"
            
          }))
              
                 return
        }
        else{
            setSuccess(Swal.fire(
                'Good job!',
                'User created',
                'success'
              ))
        }


        // create user email and password
        creatUser(email,password)
        .then(result=>{
            setSuccess(Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              ))
           e.target.reset()
        })
        .catch((error) => {
      
            const errorMessage = error.message;
           setError(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${errorMessage}`,
           
          }))
            // ..
          })
    }

    

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form 
            onSubmit={handleRegister}
            className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Enter name here..." className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="Enter email here..." className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="Enter password here..." className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Registration</button>
              </div>
              <label className="label">
              <p>Have an account? 
                  <Link className="font-bold" to='/login'>
              Login
              </Link></p>
                </label>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;