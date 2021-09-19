import styles from './Events.module.scss'
import bookmarkImg from '../../../images/bookmark.svg'
import filterImg from '../../../images/filter.svg'
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react'
import Tutorial from '../../Tutorial'
import Filter from '../Filter'
import { useHistory } from 'react-router-dom'
import { GetEvents } from '../../../actions/eventAction'
import { GetCategories } from '../../../actions/categoriesActions'
import { useSelector } from 'react-redux'
import { SERVER_URI } from '../../../config'
import { checkAuth, getSelectedCategories } from '../../../store/authSlice'



const Events = () => {
    function scrollHandler(e) {
        // if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        //     setFetching(true)
        // }
    }

    const history = useHistory()
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        400: 2
    }
    const isAuth = useSelector(checkAuth)
    const [filterVisible, setFilterVisible] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [eventsData, setEventsData] = useState([])
    const [categoriesData, setCategoriesData] = useState([])
    const selectedCategories = useSelector(getSelectedCategories)

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

    useEffect(() => {
        if (fetching) {
            GetEvents(currentPage)
                .then(res => {
                    setEventsData([...eventsData, ...res.data])
                    setCurrentPage(prevState => prevState + 20)
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => setFetching(false))
        }
    })


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
                            setFilterVisible(true)
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
                        {eventsData.map((item, index) => (
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
            {filterVisible === true && (
                <Filter
                    allCategories={categoriesData}
                    selectedCategoriesIds={selectedCategories.map(categoryObj => categoryObj.id)}
                    onClose={() => {
                        setFilterVisible(false)
                    }}
                />
            )}
        </>
    )
}

export default Events