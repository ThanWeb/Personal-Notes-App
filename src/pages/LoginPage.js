import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

function LoginPage() {
    return (
        <section className='login-page'>
            <h2>Login Page</h2>
            <LoginForm />
            <p>Doesn't have account? <Link to="/register">Register Here.</Link></p>
        </section>
    );
}
 
export default LoginPage;