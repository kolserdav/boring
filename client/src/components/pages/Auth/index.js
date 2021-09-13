import styles from './Signup.module.scss'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import signup1 from '../../../images/signup1.svg'
import signup1Mobile from '../../../images/signup1-mobile.svg'
import signup2 from '../../../images/signup2.svg'
import { login, registration } from '../../../action/userActions'
import { useState } from 'react'
import Button from '../../Button'
import { LOGIN_ROUTE } from '../../../Routes/Paths'
import { useDispatch } from 'react-redux'
import { setUser } from '../Auth/authSlice'
import { InputAdornment, TextField } from "@material-ui/core"
import { ReactComponent as EmailIcon } from '../../../images/email.svg'
import { ReactComponent as PasswordIcon } from '../../../images/password.svg'
const SignUp = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userExists, setUserExists] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    function handleChange(event) {
        const target = event.target
        switch (target.name) {
            case ('email'):
                setEmail(target.value)
                if (userExists) {
                    setUserExists(false)
                }
                break;

            case ('password'):
                setPassword(target.value)
                break;

            default: return;
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (email && password) {
            switch (isLogin) {
                case true:
                    login(email, password)
                        .then(data => {
                            console.log(data)
                            dispatch(setUser(data))
                            history.push('/');
                        })
                        .catch(error => {
                            if (error.message.includes('404')) console.log('no such user')
                            else throw error
                        })
                    break;
                case false:
                    registration(email, password)
                        .then(data => {
                            if (!data) {
                                throw new Error('user already exists')
                            }
                            dispatch(setUser(data))
                            history.push('/');
                        })
                        .catch(error => {
                            setUserExists(true)
                            console.log(error.message)
                        })
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
                            {isLogin
                                ?
                                <>
                                    <span>Don't have an account?</span>
                                    <NavLink className={styles.link} to={`signup`}> Sign up</NavLink>
                                </>
                                :
                                <>
                                    <span>Have an account?</span>
                                    <NavLink className={styles.link} to={`login`}> Log in</NavLink>
                                </>
                            }
                        </div>

                        <TextField
                            error={userExists}
                            helperText={userExists ? 'User already exists' : null}
                            required
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

                        <div className={styles.form__input}>
                            <input onChange={handleChange} value={email} name='email' type='email' placeholder='Your email adress' />
                            <EmailIcon />
                        </div>
                        <div className={styles.form__input}>
                            <input onChange={handleChange} value={password} name='password' type='password' placeholder='Password' />
                            <PasswordIcon />
                        </div>
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
                            button_className='btn_auth'
                            button_title={isLogin ? 'login' : 'Sign up'}
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp