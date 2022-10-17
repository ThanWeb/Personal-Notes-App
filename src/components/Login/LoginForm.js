import React from "react";

function LoginForm() {

    return (
        <form className='login-form'>
            <input type="email" placeholder='EmailL' />
            <input type="password" placeholder='Password' />
            <button>Masuk</button>
        </form>
    );
}

export default LoginForm;