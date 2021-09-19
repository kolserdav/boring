import styles from './Content.module.scss'
import closeImg from '../../../images/close_2.svg'
import likeImg from '../../../images/like.svg'
import { useEffect, useState } from 'react'
import { GetContents } from '../../../actions/contentAction'
import Loader from '../../Loader'
import { addCategories, GetCategory } from '../../../actions/categoriesActions'
import { SERVER_URI } from '../../../config'


const Content = (props) => {
    const [loading, setLoading] = useState(true)
    const [isFethcingCategory, setIsFetchingCategory] = useState(false)
    const [step, setStep] = useState(0)
    const [content, setContent] = useState([])
    const [childCategories, setChildCategories] = useState([])

    function handleClick(event) {
        if (event.target.dataset.action === 'like') {
            addCategories(childCategories.map(category => category._id))
        }
        if (step + 1 < content.length) {
            setStep(step + 1)
        }
    }

    useEffect(() => {
        GetContents()
            .then(
                res => setContent(res.data)
            )
            .finally(() => {
                setIsFetchingCategory(true)
                setLoading(false)
            })
    }, [])


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
                            <img src={closeImg} alt='close' onClick={handleClick} />
                        </div>
                        <div className={styles.action}>
                            <img data-action='like' onClick={handleClick} src={likeImg} alt='like' />
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
        </div>
    )
}

export default Content