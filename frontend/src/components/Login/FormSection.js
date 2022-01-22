import React, { useContext, useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../Context/LoginContext'

const FormSection = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, setAuth] = useContext(LoginContext)

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }


    const onFinish = (event) => {
        event.preventDefault()
        axios.get('http://localhost:5000/api/login', {headers: {
            'username': username,
            'password' : password
        }})
        .then( res => {
            setAuth({authenticated: res.data.authenticated})
            localStorage.setItem('authenticated', JSON.stringify({authenticated: res.data.authenticated}))
        })
    }

    return (
        <div className='col-md-6'>
            <h4 className="login-text mb-3">Login</h4>
            <form onSubmit={onFinish}>
                <div className="form-group">
                    <i className="bi bi-person-fill"></i>
                    <label for="email"> Username </label>
                    <input type="text" name="email" className="form-control1" value={username} onChange={usernameHandler}/>
                </div>
                <div className="form-group">
                    <i className="bi bi-key-fill"></i>
                    <label for="password"> Password </label>
                    <input type="password" name="password" className="form-control1" value={password} onChange={passwordHandler}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
                    <label className="form-check-label" for="checkbox"> Remember me </label>
                </div>
                <button className="btn btn-block" type="submit" style={{ borderColor: "#003048fa" }}>Login</button>
            </form>
        </div>
    )
}

export default FormSection