import React from "react";
import Classes from "./form.module.css";
import useInput from "../hooks";

const Form = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    isInvalid: firstNameIsInValid,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(value => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInValid,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    isInvalid: emailIsInValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: password,
    isValid: passwordIsValid,
    isInvalid: passwordIsInValid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim().length > 6);
  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    isInvalid: confirmPasswordIsInValid,
    changeHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordReset,
  } = useInput((value) => value === password);

  let fromIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    fromIsValid = true;
  }

  const fNameinputClass = firstNameIsInValid ? `${Classes.formControl} ${Classes.invalid}` : Classes.formControl
  const lNameinputClass = lastNameIsInValid ? `${Classes.formControl} ${Classes.invalid}` : Classes.formControl
  const emailinputClass = emailIsInValid ? `${Classes.formControl} ${Classes.invalid}` : Classes.formControl
  const passwordinputClass = passwordIsInValid ? `${Classes.formControl} ${Classes.invalid}` : Classes.formControl
  const cPasswordinputClass = confirmPasswordIsInValid ? `${Classes.formControl} ${Classes.invalid}` : Classes.formControl

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        firstNameReset()
        lastNameReset()
        emailReset()
        passwordReset()
        confirmPasswordReset()
    }}>
        {console.log(firstName, lastName, email, password, confirmPassword)}
      <div className={fNameinputClass}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameIsInValid && <p className={Classes.errorText}>input is invalid</p>}
      </div>
      <div className={lNameinputClass}>
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameIsInValid && <p className={Classes.errorText}>input is invalid</p>}
      </div>
      <div className={emailinputClass}>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInValid && <p className={Classes.errorText}>input a valid Email</p>}
      </div>
      <div className={passwordinputClass}>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordIsInValid && <p className={Classes.errorText}>password must be greater than 7 character</p>}
      </div>
      <div className={cPasswordinputClass}>
        <label for="cPassword">Confirm Password</label>
        <input type="password" id="cPassword" 
        value={confirmPassword}
        onChange={confirmPasswordChangeHandler}
        onBlur={confirmPasswordBlurHandler}/>
        {confirmPasswordIsInValid && <p className={Classes.errorText}>password doesn't match</p>}
      </div>

      <button type="submit" disabled={!fromIsValid}>Create account</button>
    </form>
  );
};
export default Form;
