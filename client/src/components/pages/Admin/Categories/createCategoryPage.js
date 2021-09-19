import styles from '../Admin.module.scss'
import uploadImg from '../../../../images/upload.svg'
import Button from '../../../Button'
import { useState } from 'react'
import { CreateCategory } from '../../../../actions/categoriesActions'

const CreateCategoryPage = () => {
    const [picture, setPicture] = useState()
    const [file, setFile] = useState()
    const [color, setColor] = useState()
    const fileHandle = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setPicture(e.target.files[0])
    }
    const addData = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('picture', picture)
        formData.append('color', color)
        CreateCategory(formData)
    }
    const [title, setTitle] = useState()
    return (
        <>
            <div className={styles.createEvent}>
                <form>
                    <div className={styles.upload__img}>
                        <label htmlFor='imgUpload' aria-hidden={true}>
                            {!file && (
                                <>
                                    <span>Добавьте изображение</span>
                                    <img src={uploadImg} alt='upload' />
                                </>
                            )}
                            {file && (
                                <>
                                    <span>Изображение загружено</span>
                                    <img src={file} alt='upload' />
                                </>
                            )}
                        </label>
                        <input onChange={fileHandle} type='file' id='imgUpload' name='imgUpload' style={{ display: 'none' }} />
                    </div>
                    <div className={styles.form}>
                        <label>Название</label>
                        <input value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} type="text" name='title' />
                        <label>Цвет</label>
                        <input value={color} onChange={(e) => {
                            setColor(e.target.value)
                        }} type="text" name='title' />
                        <Button
                            className='btn_primary'
                            title='Создать событие'
                            type='button'
                            onClick={() => {
                                addData()
                            }}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateCategoryPage