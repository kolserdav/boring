import styles from '../Admin.module.scss'
import uploadImg from '../../../../images/upload.svg'
import { useEffect, useState } from 'react'
import { GetCategories } from '../../../../action/categoriesActions'
import Select from 'react-select'
import Button from '../../../Button'
import { CreateContent } from '../../../../action/contentAction'

const CreateContentPage = () => {
    const [picture, setPicture] = useState()
    const [file, setFile] = useState()
    const fileHandle = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setPicture(e.target.files[0])
    }
    const [options, setOptions] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedChild, setSelectedChild] = useState([])
    const [selectedMain, setSelectedMain] = useState([])
    const [categoriesSelectedMain, setCategoriesSelectedMain] = useState([])
    const [categoriesSelectedChild, setCategoriesSelectedChild] = useState([])
    useEffect(() => {
        GetCategories()
            .then(data => {
                setCategories(data)
            })
    }, [isFetching])
    useEffect(() => {
        setOptions(categories.map((item) => ({
            id: item._id,
            value: item.title,
            label: item.title,
        })))
        setIsFetching(false)
    }, [categories, isFetching])
    const onSelectMain = (value, { action, removedValue }) => {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = options.filter(v => v.isFixed);
                break;
            default:
        }
        setSelectedMain(value)
    }
    const onSelectChild = (value, { action, removedValue }) => {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = options.filter(v => v.isFixed);
                break;
            default:
        }
        setSelectedChild(value)
    }
    const addData = () => {
        setCategoriesSelectedMain(selectedMain.id)
        setCategoriesSelectedChild(selectedChild.map((item) => ({
            _id: item.id
        })))
        const formData = new FormData()
        formData.append('title', title)
        formData.append('picture', picture)
        formData.append('categoriesMain', JSON.stringify(categoriesSelectedMain))
        formData.append('categoriesChild', JSON.stringify(categoriesSelectedChild))
        CreateContent(formData)
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
                        <label>Выберите главную категорию</label>
                        <Select
                            value={selectedMain}
                            onChange={onSelectMain}
                            name="categories"
                            options={options}
                            className={`basic-multi-select ${styles.select}`}
                        />
                        <label>Выберите дочернюю категорию</label>
                        <Select
                            value={selectedChild}
                            onChange={onSelectChild}
                            isMulti
                            name="categories"
                            options={options}
                            className={`basic-multi-select ${styles.select}`}
                        />
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

export default CreateContentPage