import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

import { LOGIN_ROUTE, SIGNUP_ROUTE, EVENTS_ROUTE, EVENT_ROUTE, CONTENT_ROUTE, ADMIN_EVENTS, ADMIN_ROUTE, ADMIN_CONTENT, ADMIN_CATEGORIES } from "./Paths"

import Auth from '../components/pages/Auth/index.js'
import Events from '../components/pages/Events'
import Event from '../components/pages/Events/Card'
import Content from '../components/pages/Content'

import Admin from '../components/pages/Admin'
import AdminEvents from "../components/pages/Admin/Events/eventPanel"
import AdminContent from '../components/pages/Admin/Content'
import Categories from '../components/pages/Admin/Categories'

import NotFound from "../components/404";



export default function Router() {
    const { isAuth, role } = useSelector(state => state.user)
    return (
        <Switch>
            <Route exact path={[SIGNUP_ROUTE, LOGIN_ROUTE]}>
                {isAuth ? <Redirect to='/' /> : <Auth />}
            </Route>
            <Route exact path={EVENTS_ROUTE}>
                <Events />
            </Route>
            <Route exact path={`${EVENT_ROUTE}/:id`}>
                <Event />
            </Route>
            <Route exact path={CONTENT_ROUTE}>
                <Content />
            </Route>
            {role === 'ADMIN' &&
                <>
                    <Route exact path={ADMIN_ROUTE}>
                        <Admin />
                    </Route>
                    <Route exact path={ADMIN_EVENTS}>
                        <AdminEvents />
                    </Route>
                    <Route exact path={ADMIN_CONTENT}>
                        <AdminContent />
                    </Route>
                    <Route exact path={ADMIN_CATEGORIES}>
                        <Categories />
                    </Route>
                </>
            }
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>

    )
}