import styles from './Auth.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import signup1 from 'images/signup1.svg'
import signup1Mobile from 'images/signup1-mobile.svg'
import signup2 from 'images/signup2.svg'
import { login, registration } from 'actions/userActions'
import { useEffect, useState } from 'react'
import Button from '../../Button'
import { LOGIN_ROUTE } from 'routes/Paths'
import { InputAdornment, TextField } from "@material-ui/core"
import { ReactComponent as EmailIcon } from 'images/email.svg'
import { ReactComponent as PasswordIcon } from 'images/password.svg'

console.log(fetch('/test'));

const SignUp = () => {

    const [requestPending, setRequestPending] = useState(false)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })
    const [validationError, setValidationError] = useState({
        email: null,
        password: null,
        confirm_password: null
    })

    function validateForm(form) {
        let newValidationError = { ...validationError }

        if (form.email !== '' && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) {
            console.log('test');
            newValidationError = { ...newValidationError, email: 'Invalid email address' }

        }
        else {
            newValidationError = { ...newValidationError, email: null }
        }
        if (form.password !== '' && form.password.length < 8) {
            newValidationError = { ...newValidationError, password: 'Passwords must be at least 8 characters long' }
        }
        else {
            newValidationError = { ...newValidationError, password: null }

        }

        if (!isLogin && form.confirm_password !== '' && form.password !== form.confirm_password) {
            newValidationError = { ...newValidationError, confirm_password: "Password doesn't match" }
        }
        else {
            newValidationError = { ...newValidationError, confirm_password: null }
        }
        setValidationError(newValidationError)

    }

    useEffect(() => {
        validateForm(form)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])

    function handleChange(event) {
        const newForm = { ...form, [event.target.name]: event.target.value };
        validateForm(newForm)
        setForm(newForm)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        switch (isLogin) {
            case true:
                try {
                    setRequestPending(true);
                    await login(form);
                } catch (error) {
                    console.log(error);
                    if (error.message === 'User not found' || error.message === 'Invalid credentials') {
                        setValidationError({ ...validationError, email: 'Wrong email or password' })
                        setRequestPending(false);
                    } else {
                        setValidationError({ ...validationError, email: 'Unknown error' })
                        setRequestPending(false);
                        throw error
                    }
                }
                break;
            case false:
                try {
                    setRequestPending(true);
                    await registration(form);
                } catch (error) {
                    console.log(error);
                    if (error.message === 'This email was registered earlier') {
                        setValidationError({ ...validationError, email: 'User already exists' })
                        setRequestPending(false);
                    } else {
                        setValidationError({ ...validationError, email: 'Unknown error' })
                        setRequestPending(false);
                        throw error
                    }
                }
                break;
            default:
                return;
        }
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signup__container}>
                <img className={styles.img1} src={window.innerWidth < 420 ? signup1Mobile : signup1} alt='Img' />
                <img className={styles.img2} src={signup2} alt='Img' />
                <div className={styles.form}>
                    <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__desc}>
                            <span>{isLogin ? 'Don\'t have ' : 'Have'} an account?</span>
                            <NavLink className={styles.link} to={isLogin ? 'signup' : 'login'}> {isLogin ? 'Sign up' : 'Log in'}</NavLink>
                        </div>
                        <TextField
                            required
                            error={validationError.email !== null}
                            helperText={validationError.email || ' '}
                            type='email'
                            name='email'
                            value={form.email}
                            autoComplete='on'
                            placeholder='Your email adress'
                            onChange={handleChange}
                            fullWidth
                            margin='dense'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <EmailIcon style={{ width: '30px' }} />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            required
                            error={validationError.password !== null}
                            helperText={validationError.password || ' '}
                            type='password'
                            name='password'
                            value={form.password}
                            autoComplete='on'
                            placeholder='Password'
                            onChange={handleChange}
                            fullWidth
                            margin='dense'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PasswordIcon style={{ width: '30px' }} />
                                    </InputAdornment>
                                )
                            }}
                        />
                        {!isLogin &&
                            <TextField
                                required
                                error={validationError.confirm_password !== null}
                                helperText={validationError.confirm_password || ' '}
                                type='password'
                                name='confirm_password'
                                value={form.confirm_password}
                                autoComplete='on'
                                placeholder='Confirm password'
                                onChange={handleChange}
                                fullWidth
                                margin='dense'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <PasswordIcon style={{ width: '30px' }} />
                                        </InputAdornment>
                                    )
                                }}
                            />

                        }
                        {!isLogin &&
                            <div className={styles.terms}>
                                <input required id='terms' type='checkbox' />
                                <label htmlFor='terms'></label>
                                <div className={styles.terms__desc}>
                                    I agree to the <NavLink className={styles.link} to={`signin`}>Terms of Services</NavLink> <br /> and <NavLink className={styles.link} to={`signin`}>Privacy Policy</NavLink>
                                </div>
                            </div>
                        }
                        <Button
                            disabled={validationError.email !== null || validationError.password !== null || validationError.confirm_password !== null || requestPending}
                            className='btn_auth'
                            title={isLogin ? 'login' : 'Sign up'}
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp