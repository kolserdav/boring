import styles from '../Admin.module.scss'
import uploadImg from '../../../../images/upload.svg'
import { useEffect, useState } from 'react'
import { GetCategories } from '../../../../action/categoriesActions'
import Select from 'react-select'
import Button from '../../../Button'
import { CreateEvent } from '../../../../action/eventAction'
import Card from './card'

const CreateCard = () => {
    const [picture, setPicture] = useState()
    const [file, setFile] = useState()
    const fileHandle = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setPicture(e.target.files[0])
    }
    const [options, setOptions] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const [categories, setCategories] = useState([])
    const [selected, setSelected] = useState([])
    const [categoriesSelected, setCategoriesSelected] = useState([])
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
    useEffect(() => {
        setCategoriesSelected(selected.map((item) => ({
            _id: item.id
        })))
    }, [selected])
    const onSelect = (value, { action, removedValue }) => {
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
        setSelected(value)
    }
    const addData = (e) => {
        e.preventDefault()
        console.log(categoriesSelected)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('picture', picture)
        formData.append('description', description)
        formData.append('location', location)
        formData.append('locationUri', locationUri)
        formData.append('categories', JSON.stringify(categoriesSelected))
        CreateEvent(formData)
    }
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()
    const [locationUri, setLocationUri] = useState()
    const [preview, setPreview] = useState()
    return (
        <>
            {preview && (
                <Card
                    file={file}
                    title={title}
                    description={description}
                    location={location}
                    locationUri={locationUri}
                    onClose={() => {
                        setPreview(false)
                    }}
                    categories={selected}
                />
            )}
            {!preview && (
                <div className={styles.createEvent}>
                    <form onSubmit={addData}>
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
                            <label>Описание</label>
                            <input value={description} onChange={(e) => {
                                setDescription(e.target.value)
                            }} type="text" name='description' />
                            <label>Местоположение</label>
                            <input value={location} onChange={(e) => {
                                setLocation(e.target.value)
                            }} type="text" name='location' />
                            <label>Ссылка на местоположение <br />(пример: https://www.google.ru/maps/@53.6665446,52.4553138,15.75z)</label>
                            <input value={locationUri} onChange={(e) => {
                                setLocationUri(e.target.value)
                            }} type="text" name='locationUri' />
                            <label>Категории</label>
                            <Select
                                value={selected}
                                onChange={onSelect}
                                isMulti
                                name="categories"
                                options={options}
                                className={`basic-multi-select ${styles.select}`}
                            />
                            <Button
                                className='btn_primary'
                                title='Создать событие'
                                type='submit'
                            />
                            <Button
                                className='btn_primary ml-10'
                                title='Предпросмотр'
                                type='button'
                                onClick={() => {
                                    setPreview(true)
                                }}
                            />
                            <Button
                                className='btn_primary ml-10'
                                title='Test'
                                type='button'
                                onClick={() => {
                                    console.log(categoriesSelected)
                                }}
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default CreateCard