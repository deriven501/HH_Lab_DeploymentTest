import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button, Input, Label} from 'reactstrap';
import '../../Assets/background.css';
import { Link } from 'react-router-dom';
import LoyalIcon from '../../Assets/loyalist_icon.png'
import TraitorIcon from '../../Assets/traitor_icon.png'

const Faction_setting = () => {
    return (
        <>
            <div className='bg'>
                <div class="container w-50 pb-4 mb-5 bg-dark text-light shadow-lg">
                    
                    <h2 class="text-center pt-2">Army Settings</h2>
                    <hr/>
                    <h5 class="pt-2 text-center">Pick your army's allegiance:</h5>

                    <form method="post" > 
                        <div class="container px-4 mt-3"> 
                            <div class="row gx-5">
                                <div class="col">
                                    <div class="p-3 border bg-secondary text-center text-black">
                                        <img src={LoyalIcon} class="img-fluid" alt="..." width="250" height="200"/>
                                        <p class="mt-2">Loyalist</p>
                                        <input type="radio" id="factionSide" name="factionSide" value="1"/>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="p-3 border bg-secondary text-center text-black">
                                        <img src={TraitorIcon} class="img-fluid" alt="..." width="250" height="200"/>
                                        <p class="mt-2">Traitor</p>
                                        <input type="radio" id="factionSide" name="factionSide" value="0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="mb-3 mt-3">
                            <label for="armyName" class="form-label">Name of this army:</label>
                            <input type="text" class="form-control" id="armyName" placeholder="Enter name of your Army" name="armyName"/>
                        </div>

                        <div class="mb-3 mt-3">
                            <label for="forceType" class="form-label">Pick a force type for this army:</label>
                            <select class="form-select" aria-label="select force type" id="forceType" name="forceType">
                                <option selected>Pick an army type</option>
                                <option value="0">Space Marine Legion</option>
                            </select>
                        </div>

                        <div class="mb-3 mt-3">
                            <label for="factionChoice" class="form-label">Pick a faction this army belong to:</label>
                            <select class="form-select" aria-label="select a faction" id="factionChoice" name="factionChoice">
                                <option selected>Choose an army's faction</option>
                                <option value="0">Dark Angels</option>
                                <option value="1">Emperor's Children</option>
                                <option value="2">Iron Warriors</option>
                                <option value="3">White Scars</option>
                                <option value="4">Space Wolves</option>
                                <option value="5">Imperial Fists</option>
                                <option value="6">Night Lords</option>
                                <option value="7">Blood Angels</option>
                                <option value="8">Iron Hands</option>
                                <option value="9">World Eaters</option>
                                <option value="10">Ultramarines</option>
                                <option value="11">Death Guard</option>
                                <option value="12">Thousand Sons</option>
                                <option value="13">Sons of Horus</option>
                                <option value="14">Word Bearers</option>
                                <option value="15">Salamanders</option>
                                <option value="16">Raven Guard</option>
                                <option value="17">Alpha Legion</option>
                            </select>
                        </div>

                        <div class="mb-3 mt-3">
                            <label for="pointsValue" class="form-label">Army's Points Value:</label>
                            <input type="text" class="form-control" id="pointsValue" placeholder="Enter army's points value" name="pointsValue"/>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>

                    <div class="d-flex justify-content-center pt-3">
                            <Link to='/'><button type="button" color="primary">Go back to front page</button></Link>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Faction_setting;