import React from "react";
import Classes from "./form.module.css"

const Form = () =>{
    return(
        <form>
            <div className={Classes.formControl}>
                <label for="fname">First Name</label>
                <input type="text" id="fname"/>
            </div>
            <div className={Classes.formControl}>
                <label for="lname">Last Name</label>
                <input type="text" id="lname"/>
            </div>
            <div className={Classes.formControl}>
                <label for="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div className={Classes.formControl}>
                <label for="password">Password</label>
                <input type="password" id="password"/>
            </div>
            <div className={Classes.formControl}>
                <label for="cPassword">Confirm Password</label>
                <input type="password" id="cPassword"/>
            </div>
            <button type="submit">Create account</button>
        </form>
    )
}
export default Form