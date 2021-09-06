import { NavLink } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='header__admin'>
            <NavLink to={`admin/events`}>События</NavLink>
            <NavLink to={`admin/content`}>Контент</NavLink>
            <NavLink to={`admin/category`}>Категории</NavLink>
        </div>

    )
}

export default Admin