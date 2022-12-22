import React, { useState } from 'react'
import { Logo } from '../components'
import Wrapper from './../assets/wrappers/SharedLayout';

const initialstate = {
    name: "",
    email: "",
    password: "",
    isMember: false
}

const Register = () => {
    const [values, setValues] = useState(initialstate)

    const handleChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const {name, email, password, isMember} = values
    }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>{values.isMember ? "Login" : "Register"}</h3>

            <div className='form-row'>
                <label htmlFor='email' className='form-label'>email</label>
                <input type="email" name='name' onChange={handleChange} className="form-input" />  
            </div>

            <div className='form-row'>
                <label htmlFor='password' className='form-label'>password</label>
                <input type="password" name='password' onChange={handleChange} className="form-input" />  
            </div>
            <button type='submit' className='btn btn-block'>
                Register
            </button>

        </form> 
    </Wrapper>
  )
}

export default Register