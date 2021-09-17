import Button from '../../Button'
import styles from './Admin.module.scss'

const Popup = (props) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.popup}>
                <div className={styles.title}>
                    {!props.title && (
                        <h3>Заполните все поля!</h3>
                    )}
                    {props.title && (
                        <h3>{props.title}</h3>
                    )}
                </div>
                {props.type === 'DELETE' && (
                    <>
                        <Button
                            className='btn_primary'
                            title='Удалить'
                        />
                        <Button
                            className='btn_primary'
                            title='Обновить'
                        />
                    </>

                )}
                {props.type === 'CREATE' && (
                    <Button
                        className='btn_primary'
                        title='Создать'
                        onClick={props.onClick}
                    />
                )}
                <Button
                    className='btn_primary'
                    title='Закрыть'
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}

export default Popup