import styles from './Events.module.scss'
import plus from '../../../images/plus.svg'
import locationImg from '../../../images/location.svg'
import closeImg from '../../../images/close_2.svg'
import { GetEvent } from '../../../action/eventAction'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GetCategory } from '../../../action/Category'
import Loader from '../../Loader'

const Card = () => {

    const history = useHistory()
    const [event, setEvent] = useState([])
    const [categories, setCategories] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [isFetchingEvent, setIsFetchingEvent] = useState(true)
    const [isFetchingCategory, setIsFetchingCategory] = useState(false)
    let categoriesArr = []
    useEffect(() => {
        if (isFetchingEvent) {
            GetEvent(id).then(res => setEvent(res.data)).finally(
                () => {
                    setIsFetchingEvent(false)
                    setIsFetchingCategory(true)
                }
            )
        }
        setTimeout(() => setLoading(false), 1000)
    })
    useEffect(() => {
        if (isFetchingCategory) {
            event.categories.forEach((item) => {
                GetCategory(item._id).then
                    (res => {
                        categoriesArr.push(res)
                    })
                    .finally(() => {
                        setIsFetchingCategory(false)
                        setCategories(categoriesArr)
                    })
            })
        }
    })
    if (loading) {
        return <Loader />
    }
    return (
        <div className={styles.cardBg}>
            <div className={styles.eventCard}>
                <div className={styles.card__img}>
                    <img src={`http://localhost:5000/events/${event.picture}`} alt={event.title} />
                </div>
                <div className={styles.card__content}>
                    <div>
                        <div className={styles.card__head}>
                            <div className={styles.card__header}>
                                <div className={styles.card__title}>
                                    {event.title}
                                </div>
                                <div className={styles.card__location}>
                                    <img src={locationImg} alt='Location' />
                                    <a href={`${event.locationUri}`}>{event.location}</a>
                                </div>
                            </div>
                            <div className={styles.card__save}>
                                <button>
                                    <img src={plus} alt='add' />
                                    <span onClick={() => console.log(categories)}>Save</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.tab}>
                            {categories.map((item) => (
                                <div className={styles.tab__item} style={{background: item.color}} key={item._id}>
                                    <img alt={item.title} src={`http://localhost:5000/categories/${item.picture}`} className={styles.tab__itemImg } />
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className={styles.card__desc}>
                            {event.description}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.actions__icon} onClick={() => {
                            history.goBack()
                        }}>
                            <img src={closeImg} alt='Close' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card