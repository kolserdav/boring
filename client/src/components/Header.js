import questionSvg from 'images/question.svg'
import menuSvg from 'images/menu.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from 'actions/userActions'
import Drawer from '@material-ui/core/Drawer';
import { Divider, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { useState } from 'react'

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const role = useSelector(state => state.user.role)
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className="header">
                <div className="question-img">
                    <img src={questionSvg} alt="question" />
                </div>
                <div className="burger-img">
                    <img onClick={handleDrawerOpen} src={menuSvg} alt='burger' />
                    <Drawer
                        anchor="right"
                        open={open}
                    >
                        <IconButton onClick={handleDrawerClose}>
                            close
                        </IconButton>
                        <Divider />
                        <List>
                            {!isAuth && (
                                <>
                                    <NavLink to={`/signup`}>
                                        <ListItem button>
                                            <ListItemText primary='Sign up' />
                                        </ListItem>
                                    </NavLink>
                                    <Divider />
                                </>
                            )}
                            <NavLink to={`/`}>
                                <ListItem button>
                                    <ListItemText primary='Events' />
                                </ListItem>
                            </NavLink>
                            <NavLink to={`/content`}>
                                <ListItem button>
                                    <ListItemText primary='Selection' />
                                </ListItem>
                            </NavLink>
                        </List>
                        {role.role === 'ADMIN' && (
                            <NavLink to={`/admin`}>
                                <ListItem button>
                                    <ListItemText primary='Admin' />
                                </ListItem>
                            </NavLink>
                        )}
                        {isAuth && (
                            <>
                                <Divider />
                                <ListItem onClick={logout} button>
                                    <ListItemText primary='Log out' />
                                </ListItem>
                            </>
                        )}
                    </Drawer>
                </div>
            </nav>
        </>
    )
}

export default Header
