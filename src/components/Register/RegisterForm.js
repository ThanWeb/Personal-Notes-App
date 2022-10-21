import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function RegisterForm({ register }) {
    const navigate = useNavigate();
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirm, onConfirmChange] = useInput('');

    const onSubmitHandler = () => {
        register({name: name, email: email, password: password});
        navigate('/');
    }

    return (
        <form className='register-form' onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Name" value={name} onChange={onNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
            <input type="password" placeholder="Confirm Password" value={confirm} onChange={onConfirmChange} />
            <button className='notes-button submit-button' type="submit">
                <img src='http://antekteknologi.my.id/wp-content/uploads/2022/10/check_icon.png' alt='submit'/>
            </button>
        </form>
    );
}

RegisterForm.propTypes = {
    register: PropTypes.func,
}

export default RegisterForm;