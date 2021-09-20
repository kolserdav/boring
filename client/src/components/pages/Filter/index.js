import close__blue from '../../../images/close__blue.svg'
import add from '../../../images/add__blue.svg'
import close from '../../../images/close.svg'
import { addCategory, removeCategory } from '../../../actions/categoriesActions'

export default function Filer(props) {

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

    const { allCategories, selectedCategoriesIds } = props
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
                className='item'
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
                className='item'
                key={category._id}>
                <span className='txt'>{category.title}</span>
                <img src={add} alt='add' width='24px' height='24px' />
            </div>
        )
    })


    return (
        <div className='blur'>
            <div className='categories'>
                <div className='categories__container'>
                    <img className="content__close-img" src={close} alt='close' onClick={() => props.onClose()} />
                    <div className='content__container'>
                        <div className='content__side'>
                            <div className='categories__title'>
                                Yours categories
                            </div>
                            <div className='content__items selected__items'>
                                {renderedSelectedCategories}
                            </div>
                        </div>
                        <div className='content__side'>
                            <div className='categories__title'>
                                All categories
                            </div>
                            <div className='content__items'>
                                {renderedNotSelectedCategories}
                            </div>
                        </div>
                    </div>
                    <div className='categories__sort'>
                        <div className='categories__title'>
                            Sort by
                        </div>
                        <div className='sort__btns'>
                            <button className='btn btn__fill'>Date</button>
                            <button className='btn btn__outline'>Most popular</button>
                            <button className='btn btn__outline'>Closest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}