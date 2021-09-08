import styles from './Signup.module.scss'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import signup1 from '../../../images/signup1.svg'
import signup1Mobile from '../../../images/signup1-mobile.svg'
import signup2 from '../../../images/signup2.svg'
import { Login, Registration } from '../../../action/userAction'
import { useState } from 'react'
import Button from '../../Button'
import { LOGIN_ROUTE } from '../../../utils/routesConsts'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../reducer/userReducer'

const SignUp = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    return (
        <div className={styles.signup}>
            <div className={styles.signup__container}>
                <img className={styles.img1} src={window.innerWidth < 420 ? signup1Mobile : signup1} alt='Img' />
                <img className={styles.img2} src={signup2} alt='Img' />
                <div className={styles.form}>
                    <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
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
                    <div className={styles.form__input}>
                        <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Your email adress' />
                        <svg className={styles.email} width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5749 0.376953H2.82899C2.0787 0.376953 1.35913 0.675007 0.828592 1.20555C0.298053 1.73608 0 2.45565 0 3.20594L0 19.2369C0 19.9872 0.298053 20.7067 0.828592 21.2373C1.35913 21.7678 2.0787 22.0659 2.82899 22.0659H23.5749C24.3252 22.0659 25.0448 21.7678 25.5753 21.2373C26.1059 20.7067 26.4039 19.9872 26.4039 19.2369V3.20594C26.4039 2.45565 26.1059 1.73608 25.5753 1.20555C25.0448 0.675007 24.3252 0.376953 23.5749 0.376953ZM23.3599 8.19062L15.8423 12.7076C15.0472 13.1852 14.1371 13.4376 13.2095 13.4376C12.2819 13.4376 11.3718 13.1852 10.5767 12.7076L3.05154 8.18119C2.89032 8.08657 2.74946 7.96093 2.6371 7.81154C2.52474 7.66215 2.4431 7.49197 2.39691 7.31083C2.35072 7.1297 2.34089 6.94121 2.36799 6.75625C2.39508 6.57129 2.45857 6.39354 2.55479 6.23327C2.651 6.073 2.77802 5.93339 2.92852 5.82251C3.07901 5.71163 3.24999 5.63168 3.43158 5.58728C3.61316 5.54288 3.80174 5.53492 3.98642 5.56384C4.1711 5.59277 4.34821 5.65801 4.50752 5.75581L12.0251 10.2784C12.3801 10.4931 12.7871 10.6065 13.202 10.6065C13.6168 10.6065 14.0238 10.4931 14.3788 10.2784L21.9039 5.76335C22.0632 5.66556 22.2404 5.60031 22.425 5.57139C22.6097 5.54246 22.7983 5.55043 22.9799 5.59483C23.1615 5.63923 23.3324 5.71918 23.4829 5.83006C23.6334 5.94094 23.7605 6.08055 23.8567 6.24082C23.9529 6.40109 24.0164 6.57884 24.0435 6.76379C24.0706 6.94875 24.0607 7.13724 24.0145 7.31838C23.9684 7.49951 23.8867 7.66969 23.7744 7.81909C23.662 7.96848 23.5211 8.09412 23.3599 8.18874V8.19062Z" fill="#DADADA" />
                        </svg>
                    </div>
                    <div className={styles.form__input}>
                        <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                        <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.689 10.5383V8.49014C19.689 6.23926 18.7949 4.08057 17.2033 2.48895C15.6116 0.897334 13.453 0.00317383 11.2021 0.00317383C8.95118 0.00317383 6.79249 0.897334 5.20087 2.48895C3.60926 4.08057 2.7151 6.23926 2.7151 8.49014V10.5383C2.1636 10.7333 1.6861 11.0945 1.34835 11.572C1.01059 12.0496 0.829185 12.6202 0.829102 13.2051V23.5781C0.829102 24.3284 1.12716 25.048 1.65769 25.5785C2.18823 26.109 2.9078 26.4071 3.65809 26.4071H18.746C19.4963 26.4071 20.2159 26.109 20.7464 25.5785C21.277 25.048 21.575 24.3284 21.575 23.5781V13.2051C21.5749 12.6202 21.3935 12.0496 21.0558 11.572C20.718 11.0945 20.2405 10.7333 19.689 10.5383ZM11.2021 20.7491C10.7358 20.7491 10.28 20.6108 9.89231 20.3518C9.50463 20.0928 9.20246 19.7246 9.02403 19.2938C8.84559 18.863 8.79891 18.389 8.88987 17.9317C8.98084 17.4744 9.20537 17.0543 9.53507 16.7246C9.86477 16.3949 10.2848 16.1704 10.7421 16.0794C11.1995 15.9885 11.6735 16.0351 12.1042 16.2136C12.535 16.392 12.9032 16.6942 13.1622 17.0819C13.4213 17.4695 13.5596 17.9253 13.5596 18.3916C13.5596 19.0169 13.3112 19.6165 12.8691 20.0586C12.4269 20.5007 11.8273 20.7491 11.2021 20.7491ZM15.917 10.3761H6.48708V8.49014C6.48708 7.23965 6.98384 6.04038 7.86807 5.15615C8.7523 4.27192 9.95157 3.77516 11.2021 3.77516C12.4526 3.77516 13.6518 4.27192 14.5361 5.15615C15.4203 6.04038 15.917 7.23965 15.917 8.49014V10.3761Z" fill="#DADADA" />
                        </svg>
                    </div>
                    {!isLogin &&
                        <div className={styles.terms}>
                            <input id='terms' type='checkbox' />
                            <label htmlFor='terms'></label>
                            <div className={styles.terms__desc}>
                                I agree to the <NavLink className={styles.link} to={`signin`}>Terms of Services</NavLink> <br /> and <NavLink className={styles.link} to={`signin`}>Privacy Policy</NavLink>
                            </div>
                        </div>
                    }
                    {!isLogin &&
                        <Button
                            button_className='btn_auth'
                            button_title='Sign up'
                            onClick={() => {
                                if (email && password) {
                                    Registration(email, password).then(data => {
                                        dispatch(setUser(data))
                                    })
                                    history.push('/')
                                }
                            }}
                        />
                    }
                    {isLogin &&
                        <Button
                            button_className='btn_auth'
                            button_title='Log in'
                            onClick={() => {
                                if (email && password) {
                                    Login(email, password).then(data => {
                                        dispatch(setUser(data))
                                    })
                                    history.push('/')
                                }
                            }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default SignUp