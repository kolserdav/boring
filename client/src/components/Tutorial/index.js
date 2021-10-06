import { useState } from "react"
import step_0 from 'images/step_1.png'
import step_1 from 'images/step_2.png'
import step_2 from 'images/step_3.png'
import step_3 from 'images/step_4.png'
import step_0_desk from 'images/step_1_desktop.png'
import step_1_desk from 'images/step_2_desktop.png'
import step_2_desk from 'images/step_3_desktop.png'
import step_3_desk from 'images/step_4_desktop.png'
import Button from "../Button"
import Modal from "components/Modal"

import styles from './Tutorial.module.scss'

const steps = [
    {
        contentDesc1: 'Get personalized',
        contentDesc2: 'seggestions',
        contentImg: step_0,
        contentImgDesktop: step_0_desk,
    },
    {
        contentDesc1: 'Save for later',
        contentDesc2: '',
        contentImg: step_1,
        contentImgDesktop: step_1_desk,
    },
    {
        contentDesc1: 'Plan your',
        contentDesc2: 'holiday',
        contentImg: step_2,
        contentImgDesktop: step_2_desk,
    },
    {
        contentDesc1: 'Choose things',
        contentDesc2: 'you like',
        contentImg: step_3,
        contentImgDesktop: step_3_desk,
    }
]

export default function Tutorial({ closeHandler }) {
    const [step, setStep] = useState(0)


    return (
        <>
            {step < 4 &&
                <Modal closeHandler={closeHandler}>
                    <div className={styles.title}>
                        Tutorial
                    </div>
                    <div className={styles.step}>
                        Step {step + 1}
                    </div>
                    <div className={styles.desc}>
                        {steps[step].contentDesc1}
                        <br />
                        {steps[step].contentDesc2}
                    </div>
                    <img src={window.innerWidth < 420 ? steps[step].contentImg : steps[step].contentImgDesktop} alt={`step ${step + 1}`} />
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${step === 0 ? styles.active : ""}`}></div>
                        <div className={`${styles.dot} ${step === 1 ? styles.active : ""}`}></div>
                        <div className={`${styles.dot} ${step === 2 ? styles.active : ""}`}></div>
                        <div className={`${styles.dot} ${step === 3 ? styles.active : ""}`}></div>
                    </div>
                    {step > 0 &&
                        <Button
                            className='btn_primary btn_tutorial'
                            type=''
                            title='Prev'
                            onClick={() => {
                                setStep(step - 1)
                            }}
                        />
                    }

                    <Button
                        className='btn_primary btn_tutorial'
                        type=''
                        title='Next'
                        onClick={() => {
                            if ((step + 1) === steps.length) {
                                closeHandler()
                            } else {
                                setStep(step + 1)
                            }
                        }}
                    />
                </Modal>
            }
        </>
    )
}