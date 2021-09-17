import { useState } from 'react'
import Button from '../../../Button'
import styles from '../Admin.module.scss'
import CreateContentPage from './createContent'

const ContentPanel = () => {
    const tabsData = [
        {
            title: 'Create',
        },
        {
            title: 'Update/Delete',
        },
    ]
    const [tabActive, setTabActive] = useState('Create')
    return (
        <>
            <div className={styles.admin}>
                <h1>Контент</h1>
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
                    {tabActive === 'Create' && (
                        <>
                            <h2>Создание события</h2>
                            <CreateContentPage />
                        </>
                    )}
                    {tabActive === 'Update/Delete' && (
                        <>
                            <h2>Обновление/удаление события</h2>
                            <label>Введите ID</label>
                            <input />
                            <label>Введите название</label>
                            <input type='search' />
                            <Button 
                                className='btn_primary'
                                title='Удалить'
                            />
                            <div>
                                *Вывод событий*
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default ContentPanel