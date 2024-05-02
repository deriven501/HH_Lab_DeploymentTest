import React from 'react';
import { useForm } from 'react-hook-form'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'reactstrap';
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import '../../Assets/background.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const onSubmit= (e) => {
        //data.preventDefault();
        //console.log(data)
        const email = e.email
        const password = e.password
        //console.log(email)
        //console.log(password)
        if (email !== "" && password !== "") {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        console.log("in this success part");
                        console.log(data.data.User);
                        const { email = '', username = ''} = data.data.User;
                        //const userObj = {email:data.data.user.email, username: data.data.user.username, consume: data.data.user.consume, wishlist: data.data.user.wishlist}
                        
                        dispatch(login({username, email}));
                        //localStorage.setItem('user', JSON.stringify(userObj));
                        navigate("/Userprofile", { replace: true });
                        console.log(data.data.User);
                    } else {
                        console.error(data.message);
                        alert(data.message);
                    }
                })
                .catch(err => {})
        }
        else {
            alert("Incorrect username or password");
        }
    };

    return (
        <>
            <div className='bg'>
                <div className="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg mt-5">
                    <div className="pt-3">
                        <Link to="/"><button color="primary" class="pt-5">Back</button></Link>
                    </div>
                    <h2 className="text-center pt-1">Log-In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 mt-3">
                            <label for="email">Email:</label>
                            <input className="form-control" type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p style={{color:"red"}}>Email is required and must be valid</p>}
                        </div>
                        
                        <div className="mb-3">
                            <label>Password:</label>
                            <input className="form-control" type="password:" {...register("password", { required: true })} />
                            {errors.password && <p style={{color:"red"}}>Password is required</p>}
                        </div>
                        
                        <div className="d-flex justify-content-center">
                            <button type="submit" color="primary">Submit</button>
                        </div>             
                    </form>
                    <hr />
                    <h3 className="text-center">No account?</h3>
                    <div className="d-flex justify-content-center">
                        <Link to="/Register"><button type="submit" color="primary" id="registration" >Register</button></Link>
                    </div>
                </div>

            </div>

        </>
    );

}

export default Login;
