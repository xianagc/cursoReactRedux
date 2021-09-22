import { useState, useEffect } from 'react';
import {loginUser } from './actions';
import './login.css';
import { connect } from "react-redux";

const Login = (props) => {
    
    const {
        login,
        loading
    } = props;

    const [form, setForm] = useState({
        login: 'Prueba',
        password: 'abc123'
    })

    const updateValue = (e, key) => {
        setForm({
                ...form,
                [key]: e.target.value
        })
    };

    return (
        <div className="login"> <span> Iniciar sesión </span>
            {loading &&
                <div className="loading">Accediendo...</div>
            }
            <form onSubmit={(e) => {
                login(form.login, form.password);
                e.stopPropagation();
                e.preventDefault();
                return false;
            }}>
                    
                <label className="texto"> Usuario: </label> 
                <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
                <label className="texto"> Contraseña: </label> 
                <input type="text" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')} />
                <button>Login</button>
            </form>
        </div>
    )
}
 
export default connect(
    store => ({
        loading: store.login.loading,
    }),
    dispatch => ({
        login : (login, password) => dispatch(loginUser(login, password))
    })
)(Login);