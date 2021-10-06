import close__blue from 'images/close__blue.svg'
import add from 'images/add__blue.svg'
import { addCategory, removeCategory } from 'actions/categoriesActions'
import Modal from 'components/Modal'

import styles from './Filter.module.scss'

export default function Filer({ allCategories, selectedCategoriesIds, closeHandler }) {

    async function handleClick(event) {
        const target = event.currentTarget
        switch (target.dataset.action) {
            case 'selectCategory':
                addCategory(target.dataset.id);
                break
            case 'unselectCategory':
                removeCategory(target.dataset.id);
                break
            default:
                return
        }
    }

    const selectedCategories = []
    const notSelectedCategories = []
    allCategories.forEach(category => {
        if (selectedCategoriesIds.includes(category._id)) {
            selectedCategories.push(category)
        } else {
            notSelectedCategories.push(category)
        }
    });

    const renderedSelectedCategories = selectedCategories.map((category) => {
        return (
            <div
                onClick={handleClick}
                data-action='unselectCategory'
                data-id={category._id}
                className={`${styles.item} ${styles.selected}`}
                key={category._id}>
                <span className='txt'>{category.title}</span>
                <img src={close__blue} alt='close' width='24px' height='24px' />
            </div>
        )
    })
    const renderedNotSelectedCategories = notSelectedCategories.map((category) => {
        return (
            <div
                onClick={handleClick}
                data-action='selectCategory'
                data-id={category._id}
                className={styles.item}
                key={category._id}>
                <span className='txt'>{category.title}</span>
                <img src={add} alt='add' width='24px' height='24px' />
            </div>
        )
    })


    return (
        <Modal closeHandler={closeHandler}>
            <div className={styles.categories}>
                <div className={styles.content}>
                    <div className={styles.contentSide}>
                        <div className={styles.title}>
                            Yours categories
                        </div>
                        <div className={styles.items}>
                            {renderedSelectedCategories}
                        </div>
                    </div>
                    <div className={styles.contentSide}>
                        <div className={styles.title}>
                            All categories
                        </div>
                        <div className={styles.items}>
                            {renderedNotSelectedCategories}
                        </div>
                    </div>
                </div>
                <div className={styles.sortElem}>
                    <div className={styles.title}>
                        Sort by
                    </div>
                    <div className={styles.sortBtns}>
                        <button className={`${styles.btn} ${styles.btnSeleted}`}>Date</button>
                        <button className={styles.btn}>Most popular</button>
                        <button className={styles.btn}>Closest</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}