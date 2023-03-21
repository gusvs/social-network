import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={'Password'} type={"password"} name={'password'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />{' '}
        remember me
      </div>
        { captchaUrl && <img alt='' src={captchaUrl} /> }
        { captchaUrl &&
            createField('Symbols from image', 'captcha', [required], Input, {})
        }
      { error && <div className={style.formSummaryError}>{error}</div>}
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
  )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
