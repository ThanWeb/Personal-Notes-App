import React from "react";

function RegisterForm() {

    return (
        <form className='register-form'>
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" autoComplete='current-password' />
            <button>Register</button>
        </form>
    );
}

export default RegisterForm;