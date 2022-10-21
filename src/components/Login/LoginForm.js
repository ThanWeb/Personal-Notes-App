import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginForm({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const onSubmitHandler = () => {
        login({email: email, password: password});
    }

    return (
        <form className='login-form' onSubmit={onSubmitHandler}>
            <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
            <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
            <button className='notes-button submit-button' type='submit'>
                <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/check_icon.png' alt='submit'/>
            </button>
        </form>
    );
}

LoginForm.propTypes = {
    login: PropTypes.func,
}

export default LoginForm;