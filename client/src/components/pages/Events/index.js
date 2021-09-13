import styles from './Events.module.scss'
import bookmarkImg from '../../../images/bookmark.svg'
import filterImg from '../../../images/filter.svg'
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react'
import Tutorial from '../../Tutorial'
import Categories from '../../Categories'
import { useHistory } from 'react-router-dom'
import { GetEvents } from '../../../action/eventAction'
import { GetCategories } from '../../../action/Category'
import { useSelector } from 'react-redux'
import { SERVER_URI } from '../../../config'

const Events = () => {
    const history = useHistory()
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        400: 2
    }
    const [categories, setCategories] = useState(false)
    const [overflow, setOverflow] = useState()
    const isAuth = useSelector(state => state.user.isAuth)
    let events = document.getElementById('events')

    if (overflow === true) {
        events.style.overflow = 'hidden'
    }
    if (overflow === false) {
        events.style.overflow = ''
    }

    const [fetching, setFetching] = useState(true)
    const [eventsDa, setEventsDa] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [categoriesData, setCategoriesData] = useState([])

    useEffect(() => {
        if (fetching) {
            GetEvents(currentPage)
                .then(res => {
                    setEventsDa([...eventsDa, ...res.data])
                    setCurrentPage(prevState => prevState + 20)
                })
                .finally(() => setFetching(false))
        }
    })

    useEffect(() => {
        GetCategories()
            .then(data => {
                setCategoriesData(data)
            })
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }
    return (
        <>
            {!isAuth &&
                <Tutorial />
            }
            <div id="events" className={styles.events}>
                <div id='tabs'>
                    <div id='tab' className={styles.tab}>
                        {categoriesData.map((data, index) => (
                            <div key={index} style={{ background: data.color }} className={`${styles.tab__item}`} >
                                <img className={styles.tab__itemImg} src={`${SERVER_URI}/categories/${data.picture}`} alt='tab-img' />
                                {data.title}
                            </div>
                        ))}
                        <div className={`${styles.tab__item} filter`} onClick={() => {
                            setCategories(true)
                        }}>
                            <img className={styles.tab__itemImg} src={filterImg} alt='tab-img' />
                            Filter
                        </div>
                    </div>
                </div>
                <div className={styles.events__content}>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className={styles.masonry__grid}
                        columnClassName={styles.masonry__grid__column}
                    >
                        {eventsDa.map((item, index) => (
                            <div key={index} className={styles.event__card} onClick={() => {
                                history.push(`/event/${item._id}`)
                            }}>
                                <div className={styles.bookmark}><img src={bookmarkImg} alt='bookmark' /></div>
                                <img className={styles.contentImg} src={`${SERVER_URI}/events/${item.picture}`} alt={item.title} />
                                <div className={styles.event__cardHedaer}>
                                    <div className={styles.cardHeader__title}>
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
            {categories === true && (
                <Categories
                    onClose={() => {
                        setOverflow(false)
                        setCategories(false)
                    }}
                    onOpen={() => {
                        setOverflow(true)
                    }}
                />
            )}
        </>
    )
}

export default Events