import React, { useState } from "react";
import './Home.css';
import AccountCard from "./AccountCard";
import RegistrationForm from "./RegistrationForm";
const Home = () => {
const [name, useName] = useState("");
const [city, useCity] = useState("");
const [email, useEmail] = useState("");
const [password, usePassword] = useState("");
const [acc, useAcc] = useState(false);
    
    const HandleChangeEmail = (e) => {
        useEmail(e.target.value);
    };

    const HandleChangeName = (e) => {
        useName(e.target.value);
    };
    
    const HandleChangeCity = (e) => {
        useCity(e.target.value);
    };

    const HandleChangePass = (e) => {
        usePassword(e.target.value);
    };

    const checkPass = (pass) => {
        const beginWithoutDigit = /^\D.*$/;
        const withoutSpecialChars = /^[^-() /]*$/;
        const containsLetters = /^.*[a-zA-Z]+.*$/;

        if (beginWithoutDigit.test(pass) && withoutSpecialChars.test(pass) && containsLetters.test(pass)) {
            return true
        } else {
            return false
        }
    };

    const OnSubmitForm = () => {
        useAcc(true);
    };

    return (
        <div className="block">
            {acc ? (
                <AccountCard name={name} city={city} email={email} />) : (
                <RegistrationForm
                    handleChangePass={HandleChangePass}
                    handleChangeCity={HandleChangeCity}
                    handleChangeName={HandleChangeName}
                    handleChangeEmail={HandleChangeEmail}
                    onSubmitForm={OnSubmitForm}    
                    name={name}
                    city={city}
                    password={password}
                    email={email}
                />)}
           
        </div>
    );
};

export default Home;
