import styles from './Events.module.scss'
import bookmarkImg from 'images/bookmark.svg'
import filterImg from 'images/filter.svg'
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react'
import Filter from './Filter/index'
import { useHistory } from 'react-router-dom'
import { GetEvents } from 'actions/eventAction'
import { GetCategories, setAllCategoriesActive, toggleCategoryState } from 'actions/categoriesActions'
import { useSelector } from 'react-redux'
import { SERVER_URI } from 'config'
import { getSelectedCategories } from 'store/authSlice'



const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    400: 2
}

function CategoryButton(props) {
    const { active = true, imgId, title, color = '#fff', clickHandler = undefined } = props
    console.log(active);
    return (
        <div data-active={active} style={{ background: color }} className={`${styles.tab__item}`} onClick={clickHandler}>
            {imgId && <img className={styles.tab__itemImg} src={`${SERVER_URI}/categories/${imgId}`} alt={`${title}`} />}
            {title ? title : 'loading...'}
        </div>

    )
}


const Events = () => {
    const history = useHistory()

    const [filterVisible, setFilterVisible] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [eventsData, setEventsData] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const selectedCategories = useSelector(getSelectedCategories)

    useEffect(() => {
        GetCategories()
            .then(data => {
                setAllCategories(data)
            })
            .catch(error => {
                console.log(error);
            })
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

    const CategoryButtons = selectedCategories.map((selectedCategory) => {
        const categoryData = allCategories.find(item => item._id === selectedCategory.id);
        if (!categoryData) {
            return <CategoryButton key={selectedCategory.id} />
        }
        const { _id: id, picture, title, color } = categoryData
        return <CategoryButton key={id} active={selectedCategory.active} imgId={picture} title={title} color={color} clickHandler={() => toggleCategoryState(id)} />
    })

    return (
        <>
            <div id="events" className={styles.events}>
                <div id='tabs'>
                    <div id='tab' className={styles.tab}>
                        <CategoryButton title="All" clickHandler={setAllCategoriesActive} />
                        {CategoryButtons}
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
                        {eventsData.map(item => (
                            <div key={item._id} className={styles.event__card} onClick={() => {
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
                    allCategories={allCategories}
                    selectedCategoriesIds={selectedCategories.map(categoryObj => categoryObj.id)}
                    closeHandler={() => {
                        setFilterVisible(false)
                    }}
                />
            )}
        </>
    )
}

export default Events