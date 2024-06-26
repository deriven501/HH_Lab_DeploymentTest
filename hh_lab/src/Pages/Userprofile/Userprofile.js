import React from 'react';
//import { useForm } from 'react-hook-form'
//import {Button} from 'reactstrap';
import '../../Assets/background.css';
import { Link } from 'react-router-dom';

const Userprofile = () => {
    return (
        <>
            <div className='bg'>
                <div className="container border border-5 border-dark border-top-0 w-50 pb-5 bg-dark text-light shadow-lg mt-5">
                    <div className="pt-3">
                        <Link to="/"><button color="primary" class="pt-5">Logout</button></Link>
                    </div>

                    <h2 className="text-center pt-1">Welcome User</h2>
                    <hr/>

                    <div class="d-flex justify-content-center pt-2">
                        <Link to="/Faction_Setting">
                            <button color="primary">
                                Create new list
                            </button>
                        </Link>
                    </div>  

                    <div class="d-flex justify-content-center pt-4">
                        <button color="primary" disabled>
                            Load existing list
                        </button>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Userprofile