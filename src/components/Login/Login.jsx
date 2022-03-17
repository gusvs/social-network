import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />{' '}
        remember me
      </div>
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

export default Login
