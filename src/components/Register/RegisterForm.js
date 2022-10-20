import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function RegisterForm({ register }) {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onConfirmChange = (event) => {
        setConfirm(event.target.value);
    }

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