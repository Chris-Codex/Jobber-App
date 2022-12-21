import React, { useState } from 'react'
import { Logo } from '../components'
import FormRow from '../components/FormRow';
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

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>{values.isMember ? "Login" : "Register"}</h3>

            {values.isMember ? (
                <>
                    <FormRow
                        type="email"
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="password"
                        name="password"
                        value={values.password}
                        handleChange={handleChange}
                    />
                </>
            ) : (
                <>
                    <FormRow
                        type="text"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="email"
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="password"
                        name="password"
                        value={values.password}
                        handleChange={handleChange}
                    />
                </>
            )}

            <button type='submit' className='btn btn-block'>
                {!values.isMember ? "Register" : "Login"}
            </button>
            <p>
                {values.isMember ? "Not a Member yet" : "Already a Member"}
                <button type='button' className='member-btn' onClick={toggleMember}>
                    {!values.isMember ? "Login" : "Register"}
                </button>
            </p>
        </form> 
    </Wrapper>
  )
}

export default Register