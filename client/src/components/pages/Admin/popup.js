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
                            button_className='btn_primary'
                            button_title='Удалить'
                        />
                        <Button
                            button_className='btn_primary'
                            button_title='Обновить'
                        />
                    </>

                )}
                {props.type === 'CREATE' && (
                    <Button
                        button_className='btn_primary'
                        button_title='Создать'
                        onClick={props.onClick}
                    />
                )}
                <Button
                    button_className='btn_primary'
                    button_title='Закрыть'
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}

export default Popup