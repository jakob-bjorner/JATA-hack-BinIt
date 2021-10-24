import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const[findBinsButtonColor,setFindBinsButtonColor] = useState();
    const[addBinsButtonColor,setAddBinsButtonColor] = useState();

    function changeFindButtonColor(){
        if(findBinsButtonColor == "#515F30") {
            setFindBinsButtonColor("#8BA352");
            setAddBinsButtonColor("#515F30");
        } else {
            setFindBinsButtonColor("#515F30");
            setAddBinsButtonColor("#8BA352");
        }
    }
    function changeAddButtonColor() {
        if(addBinsButtonColor == "#515F30") {
            setAddBinsButtonColor("#8BA352");
            setFindBinsButtonColor("#515F30");
        } else {
            setAddBinsButtonColor("#515F30");
            setFindBinsButtonColor("#8BA352");
        }
    }
    
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/findbins' > 
                    <button style={{backgroundColor : findBinsButtonColor}} className="find-bins-button" onClick={changeFindButtonColor}>
                    Find Bins
                    </button>
                </Link>
                <Link to='/addbins'> 
                    <button style={{backgroundColor : addBinsButtonColor}} className="add-bins-button" onClick={changeAddButtonColor}>
                    Add Bins
                    </button>
                </Link>
            </ul>
            
        </nav>
    );
    
}


export default Nav;