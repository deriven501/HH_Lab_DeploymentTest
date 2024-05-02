import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import '../../Assets/background.css';
import { Link } from 'react-router-dom';
import BANNER from '../../Assets/HHLogo.png'

class Landing extends Component {
    render() {
        return (
            <>
                <div className='bg'>
                    
                    <div class="container border border-5 border-dark bg-dark shadow-lg text-light w-25 mt-5 pt-3">
                        <img src={BANNER} class="w-100" alt="..."/>
                        <h1 class="text-center fs-1">Legion Army Builder</h1>
                        <hr/>
                    </div>
                    
                    <div class="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                        <div class="d-flex justify-content-center pt-2">
                            <Link to="/Login">
                                <button color="primary">Log-in</button>
                            </Link>
                        </div>  
                        <br/>
                        <div class="d-flex justify-content-center pt-2">
                            <Link to="/Faction_Setting">
                                <button color="primary">
                                    Create List without account
                                </button>
                            </Link> 
                        </div>  

                        <p class="text-light text-center">Note: You cannot save your list without an account</p>
                        <hr/>
                    </div>
                </div>

            
            </>
            
        );
    }
}

export default Landing;


