import close__blue from '../images/close__blue.svg'
import add from '../images/add__blue.svg'
import close from '../images/close.svg'

const Categories = (props) => {
    return (
        <div className='blur'>
            <div className='categories'>
                <div className='catergories__container'>
                    <img className="content__close-img" src={close} alt='close' onClick={() => props.onClose()} />
                    <div className='content__container'>
                        <div className='content__side'>
                            <div className='categories__title'>
                                Yours categories
                            </div>
                            <div className='content__items'>

                                <div className='item item__fill'>
                                    <span className='txt'>Date</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Foo</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Bar</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Long text</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Long long text</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Long short long text</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                                <div className='item item__fill'>
                                    <span className='txt'>Text</span>
                                    <img src={close__blue} alt='close' />
                                </div>
                            </div>
                        </div>
                        <div className='content__side'>
                            <div className='categories__title'>
                                All categories
                            </div>
                            <div className='content__items'>
                                <div className='item item__outline'>
                                    <span className='txt'>Party</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Date</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Short long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Very very very long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Long text</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Views</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Art</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Bars</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Party</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Date</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Views</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Art</span>
                                    <img src={add} alt='add' />
                                </div>
                                <div className='item item__outline'>
                                    <span className='txt'>Bars</span>
                                    <img src={add} alt='add' />
                                </div>
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

export default Categories
