import { ADMIN_ROUTE, CONTENT_ADMIN, EVENTS_ROUTE, EVENT_ADMIN, EVENT_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, CATEGORIES_ADMIN, CONTENT_ROUTE } from "../../utils/routesConsts"
import AUTH from '../pages/Auth/index.js'
import ADMIN from '../pages/Admin'
import CONTENT_ADMIN_COMPONENT from '../pages/Admin/Content'
import CATEGORIES from '../pages/Admin/Categories'
import EVENTS from '../pages/Events'
import EVENT from '../pages/Events/Card'
import EVENTPANEL from "../pages/Admin/Events/eventPanel"
import CONTENT from '../pages/Content'

export const authRoutes = [
    
]

export const publicRoutes = [
    {
        path: SIGNUP_ROUTE,
        component: AUTH
    },
    {
        path: LOGIN_ROUTE,
        component: AUTH
    },
    {
        path: EVENTS_ROUTE,
        component: EVENTS
    },
    {
        path: EVENT_ROUTE + '/:id',
        component: EVENT
    },
    {
        path: CONTENT_ROUTE,
        component: CONTENT
    },
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        component: ADMIN
    },
    {
        path: CONTENT_ADMIN,
        component: CONTENT_ADMIN_COMPONENT
    },
    {
        path: EVENT_ADMIN,
        component: EVENTPANEL
    },
    {
        path: CATEGORIES_ADMIN,
        component: CATEGORIES
    }
]