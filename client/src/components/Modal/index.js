import styles from './Modal.module.scss'
import close from 'images/close.svg'
import { useEffect } from 'react'

export default function Modal({ closeHandler, children }) {

  function handleKey(event) {
    if (event.key === 'Escape') closeHandler()
  }

  function handleClick(event) {
    if (event.target === event.currentTarget) {
      closeHandler()
    }
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (

    < div
      className={styles.blur}
      tabIndex='0'
      onKeyDown={event => handleKey(event)}
      onClick={event => handleClick(event)}
      onScroll={event => event.preventDefault()}
    >
      <div className={styles.popup}>
        <img className={styles.closeImg} src={close} alt='close' onClick={closeHandler} />
        {children}
      </div>
    </div >
  )
}