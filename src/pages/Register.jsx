import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Logo } from '../components'
import FormRow from '../components/FormRow';
import { loginUser, registerUser } from '../features/userSlice/userSlice';
import Wrapper from './../assets/wrappers/SharedLayout';


const initialstate = {
    name: "",
    email: "",
    password: "",
    isMember: false
}

const Register = () => {
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((store) => store.user)
    const [values, setValues] = useState(initialstate)

    console.log("VALUES", values)

    const handleChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const {name, email, password, isMember} = values
        if(!email || !password || (!name && !isMember)){
            toast.error("All fields are required")
            return
        }

        if(isMember){
            dispatch(loginUser({email, password}))
            toast.success("Login was Successul")
            return
        }
        dispatch(registerUser({name, email, password}))
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
                <button type='button' className='member-btn' onClick={toggleMember} disabled={isLoading}>
                    {!values.isMember ? "Login" : "Register"}
                </button>
            </p>
        </form> 
    </Wrapper>
  )
}

export default Register