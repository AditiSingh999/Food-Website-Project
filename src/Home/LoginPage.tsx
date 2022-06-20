import { PrimaryButton, TextField, values } from '@fluentui/react';
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const navigate=useNavigate()
    return(
        <React.Fragment>
            <Formik
              initialValues={{
                Email: '',
                Password: ''
              }}
              onSubmit={(values) => axios.post('https://localhost:7084/api/Users/authenticate', values).then((res) => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token);
                const token = localStorage.getItem('token');
                if(token){
                    navigate('/welcome')
                }
              })}
            >
                {(props) => {
                    return(
                        <form onSubmit={props.handleSubmit} className="modelFormik">
                            <h5>Please Log In Here</h5>
                           <TextField styles={{fieldGroup: {border: 'none', borderBottom: '2px solid #27ae60'}}} name="Email" value={props.values.Email} onChange={props.handleChange} label='Email:' />
                           <TextField styles={{fieldGroup: {border: 'none', borderBottom: '2px solid #27ae60'}}} name="Password" value={props.values.Password} onChange={props.handleChange} label='Password:' /> 
                           <PrimaryButton type='submit' className='submitButton' text="Submit"/>
                        </form>
                    )
                }}
            </Formik>
        </React.Fragment>
    )
}