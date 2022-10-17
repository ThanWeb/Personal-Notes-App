import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Register/RegisterForm';

function RegisterPage() {
    return (
        <section className='register-page'>
            <h2>Register Page</h2>
            <RegisterForm />
            <p>Back to <Link to="/">Login</Link></p>
        </section>
    );
}
 
export default RegisterPage;