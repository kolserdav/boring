import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../Button'
import styles from './Admin.module.scss'
import { CATEGORIES_ADMIN, CONTENT_ADMIN, EVENT_ADMIN } from '../../../Routes/Paths'
import CreateEvent from './Events/createEvent'
import Content from './Content'
import Categories from './Categories'

const Panel = () => {
    const tabsData = [
        {
            title: 'Создать',
        },
        {
            title: 'Обновить/Удалить',
        },
    ]
    const location = useLocation()
    const [tabActive, setTabActive] = useState('Создать')
    const [title, setTitle] = useState()
    const [component, setComponent] = useState()
    useEffect(() => {
        if (!title) {
            switch (location.pathname) {
                case CATEGORIES_ADMIN:
                    setTitle('Категории')
                    setComponent(<Categories />)
                    break;
                case CONTENT_ADMIN:
                    setTitle('Контент')
                    setComponent(<Content />)
                    break;
                case EVENT_ADMIN:
                    setTitle('События')
                    setComponent(<CreateEvent />)
                    break;
                default:

                    break;
            }
        }
    }, [location.pathname, title])
    return (
        <>
            <div className={styles.admin}>
                <h1>{title}</h1>
                <div className={styles.tabs}>
                    {tabsData.map((item) => (
                        <div onClick={() => {
                            setTabActive(item.title)
                        }} key={item.title} className={`${styles.tab} ${item.title === tabActive ? styles.tabActive : ''}`}>
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className={styles.adminContainer}>
                    {tabActive === 'Создать' && (
                        <>
                            <h2>Создание</h2>
                            {component}
                        </>
                    )}
                    {tabActive === 'Обновить/Удалить' && (
                        <>
                            <h2>Обновление/удаление</h2>
                            <label>Введите ID</label>
                            <input />
                            <label>Введите название</label>
                            <input type='search' />
                            <Button
                                button_className='btn_primary'
                                button_title='Удалить'
                            />
                            <div>
                                *Вывод*
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Panel