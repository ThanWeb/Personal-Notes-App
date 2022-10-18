import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
    
        if (!error) {
            loginSuccess(data);
        }
    }
    
    return (
        <section className='login-page'>
            <h2>Login Page</h2>
            <LoginForm login={onLogin}/>
            <p>Doesn't have account? <Link to="/register">Register Here.</Link></p>
        </section>
    );
}
 
export default LoginPage;