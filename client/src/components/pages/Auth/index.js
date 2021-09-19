import styles from './Auth.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import signup1 from '../../../images/signup1.svg'
import signup1Mobile from '../../../images/signup1-mobile.svg'
import signup2 from '../../../images/signup2.svg'
import { login, registration } from '../../../actions/userActions'
import { useState } from 'react'
import Button from '../../Button'
import { LOGIN_ROUTE } from '../../../routes/Paths'
import { InputAdornment, TextField } from "@material-ui/core"
import { ReactComponent as EmailIcon } from '../../../images/email.svg'
import { ReactComponent as PasswordIcon } from '../../../images/password.svg'
const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [requestPending, setRequestPending] = useState(false)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    function handleChange(event) {
        const target = event.target
        switch (target.name) {
            case ('email'):
                setEmail(target.value)
                if (emailError !== null) {
                    setEmailError(null)
                }
                break;

            case ('password'):
                if (passwordError !== null) {
                    setPasswordError(null)
                }
                setPassword(target.value)
                break;

            default: return;
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (email && password) {
            if (!isLogin && (password.length < 8)) {
                setPasswordError('Passwords must be at least 8 characters long')
                return
            }
            switch (isLogin) {
                case true:
                    try {
                        setRequestPending(true);
                        await login(email, password);
                    } catch (error) {
                        if (error.message === 'User not found') {
                            console.log('User not found')
                            setEmailError('Wrong email or password')
                            setRequestPending(false);
                        } else {
                            throw error
                        }
                    }
                    break;
                case false:
                    try {
                        setRequestPending(true);
                        await registration(email, password);
                    } catch (error) {
                        setEmailError('User already exists')
                        setRequestPending(false);
                    }
                    break;
                default:
                    return;
            }
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
                            error={emailError !== null}
                            helperText={emailError}
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Your email adress'
                            onChange={handleChange}
                            fullWidth
                            margin='normal'
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
                            error={passwordError !== null}
                            helperText={passwordError}
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={handleChange}
                            fullWidth
                            margin='normal'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PasswordIcon style={{ width: '30px' }} />
                                    </InputAdornment>
                                )
                            }}
                        />

                        {/* <div className={styles.form__input}>
                            <input onChange={handleChange} value={email} name='email' type='email' placeholder='Your email adress' />
                            <EmailIcon />
                        </div>
                        <div className={styles.form__input}>
                            <input onChange={handleChange} value={password} name='password' type='password' placeholder='Password' />
                            <PasswordIcon />
                        </div> */}
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
                            disabled={emailError !== null || passwordError !== null || requestPending}
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