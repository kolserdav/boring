import { useState } from "react"
import step_1 from '../images/step_1.png'
import step_2 from '../images/step_2.png'
import step_3 from '../images/step_3.png'
import step_4 from '../images/step_4.png'
import step_1_desk from '../images/step_1_desktop.png'
import step_2_desk from '../images/step_2_desktop.png'
import step_3_desk from '../images/step_3_desktop.png'
import step_4_desk from '../images/step_4_desktop.png'
import close from '../images/close.svg'
import Button from "./Button"

const Tutorial = () => {

    const [step, setStep] = useState(1)
    let contentDesc1
    let contentDesc2
    let contentImg
    let contentImgDesktop
    switch (step) {
        case 2:
            contentDesc1 = 'Get personalized'
            contentDesc2 = 'seggestions'
            contentImg = step_2
            contentImgDesktop = step_2_desk
            break
        case 3:
            contentDesc1 = 'Save for later'
            contentDesc2 = ''
            contentImg = step_3
            contentImgDesktop = step_3_desk
            break
        case 4:
            contentDesc1 = 'Plan your'
            contentDesc2 = 'holiday'
            contentImg = step_4
            contentImgDesktop = step_4_desk
            break
        default:
            contentDesc1 = 'Choose things'
            contentDesc2 = 'you like'
            contentImg = step_1
            contentImgDesktop = step_1_desk
    }
    if (step < 5) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
    return (
        <>
            {step < 5 &&
                <div className="bg__tutorial">
                    <div className="tutorial">
                        <div className="tutorial__content">
                            <img className="content__close-img" src={close} alt='close' onClick={() => setStep(5)} />
                            {step === 1 &&
                                <div className="content__title">
                                    Tutorial
                                </div>
                            }
                            < div className="content__step">
                                Step {step}
                            </div>
                            <div className="content__desc">
                                {contentDesc1}
                                <br />
                                {contentDesc2}
                            </div>
                            <div className="content-img">
                                <img src={window.innerWidth < 420 ? contentImg : contentImgDesktop} alt="step" />
                            </div>
                        </div>
                        <div className="dots">
                            <div className={step === 1 ? 'active' : 'dot'}></div>
                            <div className={step === 2 ? 'active' : 'dot'}></div>
                            <div className={step === 3 ? 'active' : 'dot'}></div>
                            <div className={step === 4 ? 'active' : 'dot'}></div>
                        </div>
                        {step > 1 &&
                            <Button
                                button_className='btn_primary btn_tutorial'
                                button_type=''
                                onClick={() => {
                                    setStep(step - 1)
                                }}
                                button_title='Prev'
                            />
                        }

                        <Button
                            button_className='btn_primary btn_tutorial'
                            button_type=''
                            onClick={() => {
                                setStep(step + 1)
                            }}
                            button_title='Next'
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default Tutorial