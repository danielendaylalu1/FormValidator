import React from "react";
import classes from "./header.module.css"

const Header = ()=>{
    return(
        <div className={classes.header}>
            <h1>Sign Up</h1>
            <h3>Have an account ? <span>Log In</span></h3>
        </div>
    )
}

export default Header