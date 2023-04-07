import React from "react";
import {Link}from "react-router-dom"






function Navigation(){
    return(
    <div className="navigation">
        <header>
            <div className="links">
                <Link to='/about'><h2>About</h2> </Link>
                <Link to='/portfolio'><h2>Portfolio</h2></Link>
                <Link to='/contact'><h2>Contact</h2></Link>
                <Link to='/resume'><h2>Resume</h2></Link>
            </div>
            
        </header>
    </div>    
    )
}

export default Navigation;
