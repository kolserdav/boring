import styles from './Content.module.scss'
import closeImg from '../../../images/close_2.svg'
import likeImg from '../../../images/like.svg'
import { useEffect, useState } from 'react'
import { GetContents } from '../../../action/contentAction'
import Loader from '../../Loader'
import { GetCategory } from '../../../action/Category'
import {SERVER_URI} from '../../../config'
import { UserUpdate } from '../../../action/userAction'

const Content = (props) => {

    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState([])
    const [step, setStep] = useState(0)
    const [isFethcingCategory, setIsFetchingCategory] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (loading) {
            GetContents()
                .then(
                    res => setContent(res.data)
                )
                .finally(() => {
                    setIsFetchingCategory(true)
                    setLoading(false)
                })
        }
    }, [loading])

    let [childCategories, setChildCategories] = useState([])

    useEffect(() => {
        if (isFethcingCategory) {
            Promise.all(content[step].categoriesChild.map((item) => GetCategory(item._id)))
                .then(res => {
                    setChildCategories(res)
                })
        }
    }, [step, isFethcingCategory, content])

    if (loading) {
        return <Loader />
    }

    return (
        <div className={styles.cardBg}>
            <div className={styles.eventCard}>
                <div className={styles.card__img}>
                    <img className={styles.main__img} src={`${SERVER_URI}/content/${content[step].picture}`} alt={props.title} />
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <img src={closeImg} alt='close' onClick={() => {
                                if (step + 1 < content.length) {
                                    setStep(step + 1)
                                }
                            }} />
                        </div>
                        <div className={styles.action}>
                            <img onClick={() => {
                                if (step + 1 < content.length) {
                                    setCategories(content[step].categoriesChild)
                                    setStep(step + 1)
                                }
                                if (step+1 === content.length){
                                    UserUpdate(categories)
                                    .finally((res) => console.log(res))
                                }
                            }} src={likeImg} alt='like' />
                        </div>
                    </div>
                </div>
                <div className={styles.card__content}>
                    <div>
                        <div className={styles.pretitle}>Do you like?</div>
                        {content.length !== 0 && (
                            <>
                                <div key={content[step]._id}>
                                    <div className={styles.title}>{content[step].title}</div>
                                </div>
                                <div className={styles.keywords}>
                                    {content[step].categoriesChild.length === childCategories.length && childCategories.map((item) => (
                                        <div key={item._id} className={styles.keywords__item}>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className={styles.steps}>
                            {step + 1} of {content.length}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => console.log(categories)}>Test</button>
        </div>
    )
}

export default Content