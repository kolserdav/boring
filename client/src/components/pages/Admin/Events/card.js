import styles from './Events.module.scss'
import plus from '../../../../images/plus.svg'
import locationImg from '../../../../images/location.svg'
import closeImg from '../../../../images/close_2.svg'
const Card = (props) => {
    return (
        <div className={styles.cardBg}>
            <div className={styles.eventCard}>
                <div className={styles.card__img}>
                    <img src={props.file} alt={props.title} />
                </div>
                <div className={styles.card__content}>
                    <div>
                        <div className={styles.card__head}>
                            <div className={styles.card__header}>
                                <div className={styles.card__title} id='title'>
                                    {props.title}
                                </div>
                                <div className={styles.card__location} >
                                    <img src={locationImg} alt='Location' />
                                    <a href={props.locationUri} id='location'>
                                        {props.location}
                                    </a>
                                </div>
                            </div>
                            <div className={styles.card__save}>
                                <button>
                                    <img src={plus} alt='add' />
                                    <span >Save</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.tab}>
                            {
                                props.categories.map((data) => (
                                    <div key={data.title} className={styles.tab__item}>
                                        {data.label}
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.card__desc} id='description'>
                            {props.description}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.actions__icon}>
                            <img src={closeImg} alt='Close' onClick={props.onClose} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card