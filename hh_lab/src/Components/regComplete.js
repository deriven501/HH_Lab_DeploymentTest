import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import '../Assets/background.css'
import { Link } from 'react-router-dom';

const regComplete = () => {
    return (
            <>
                <div className='bg'>
                    
                    <div class="container border border-5 border-dark bg-dark shadow-lg text-light w-25 mt-5 pt-3">
                        <h1 class="text-center fs-1">Registration Complete!</h1>
                        <hr/>
                    </div>
                    
                    <div class="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                        <div class="d-flex justify-content-center pt-2">
                            <Link to="/Login">
                                <Button color="primary">Log-in</Button>
                            </Link>
                        </div>  
                        <br/>
                        <div class="d-flex justify-content-center pt-2">
                            <Link to="/">
                                <Button color="primary">
                                    Back to front page
                                </Button>
                            </Link> 
                        </div>  
                        <hr/>
                    </div>
                </div>

            
            </>
            
        );
}

export default regComplete;