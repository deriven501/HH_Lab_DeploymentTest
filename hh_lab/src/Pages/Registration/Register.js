//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button, Input, Label, Form } from 'reactstrap';
import '../../Assets/background.css';
import { Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect} from 'react';

const Register = () => {
    const [formData, setFormData] = useState({email: "",  username: "", password: "", confirmPassword: "", adminCode: ""});
    const [adminStat, setAdminStat] = useState(false)
    const [inputError, setInputError] = useState({});
    //const firstRender = useRef(true);
    const navigate = useNavigate();


    const handleChange = (e) => {
        e.preventDefault();        
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    }
    
    useEffect(() => {
        
        const realValidation = () => {
            const errorMsg = {};
            //console.log("current length of username: "+ formData.username.length)
            //console.log("current admin stat: "+ adminStat)
            if((formData.username.length) < 5) {
                errorMsg["username"] = "Username length must be at least 5 characters or more";
            }

            if(formData.password.length < 3) {
                errorMsg["password"] = "Password length must be at least 3 characters or more";
            }

            if(formData.adminCode.length !== 0) { 
                setAdminStat(true)
            } else {
                
                setAdminStat(false)
            }

            setInputError(errorMsg);


        }
       
        realValidation();
        
    }, [adminStat,formData.username, formData.adminCode, formData.password]) // Only re-run the effect if form data change

    const formValidation = () => {
        const errorMsg = {};
        let formIsValid = true;

        if(!formData.email) {
            formIsValid = false;
            errorMsg["email"] = "Email required";
        }

        if(!formData.username) {
            formIsValid = false;
            errorMsg["username"] = "Username required";
        }

        if(!formData.password) {
            formIsValid = false;
            errorMsg["password"] = "Password required";
        }

        if(formData.password !== formData.confirmPassword) {
            formIsValid = false;
            errorMsg["passMatch"] = "Password re-entered do not match";
        }

        setInputError(errorMsg)
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValidation()) {
            const username = formData.username
            const email = formData.email
            const password = formData.password
            const admin = adminStat

            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, admin}),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        // getting user email from response if successful.
                        //const { email = '', username = '' } = data.data.User;
                        //const userObj = {email:data.data.User.email, username: data.data.User.username}
                        // setting user to the redux store
                        //dispatch(login({ username, email}));
                        //localStorage.setItem('user', JSON.stringify(userObj));
                        console.log("Email: " + formData.email + ", Username: " + formData.username + ", Password: " + formData.password + ", admin: " + formData.adminCode + ", admin stat: " + adminStat);
                        navigate('/RegComplete', { replace: true });
                        console.log(data.data.User);
                    } else {
                        console.error(data.message);
                        alert(data.message);
                    }
                })
                .catch(err => { })
            
        } 
    } 

    return (
        <>
            <div className='bg'>
                <div className="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg mt-5">
                    <h2 className="text-center pt-1">Register New Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label for="userMail" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="userMail" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange}/>
                            {inputError["email"] && <div style={{ color: 'red' }}>{inputError["email"]}</div>}
                        </div>


                        <div className="mb-3">
                            <label for="username" className="form-label">User Name:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" value={formData.username} onChange={handleChange}/>
                            {inputError["username"] && <div style={{ color: 'red' }}>{inputError["username"]}</div>}
                        </div>

                        <div className="mb-3">
                            <label for="userPass" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="userPass" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange}/>
                            {inputError["password"] && <div style={{ color: 'red' }}>{inputError["password"]}</div>}
                        </div>

                        <div className="mb-3">
                            <label for="passCheck" className="form-label">Re-enter your password again:</label>
                            <input type="password" className="form-control" id="passCheck" placeholder="Enter password again" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                            {inputError["passMatch"] && <div style={{ color: 'red' }}>{inputError["passMatch"]}</div>}
                        </div>

                        <div className="mb-3">
                            <label for="adminPass" className="form-label">If you are sign up to be an admin also, please enter a special admin passcode:</label>
                            <input type="password" className="form-control" id="adminPass" placeholder="Enter admin passcode if provided" name="adminCode" value={formData.adminCode} onChange={handleChange} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" color="primary">Submit</button>
                        </div>
                    </form>
                        <hr/>
                    <div class="d-flex justify-content-center pt-3">
                            <Link to='/Login'><button type="button" color="primary">Go back to log-in page</button></Link>
                    </div>

                    <div class="d-flex justify-content-center pt-5">
                            <Link to='/'><button type="button" color="primary">Go back to front page</button></Link>
                    </div>
                </div>
            </div>
        </>    
    );
}


export default Register;
