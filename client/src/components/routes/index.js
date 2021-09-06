import {
    Switch,
    Route
} from "react-router-dom";
import { adminRoutes, publicRoutes } from "./routes";
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import NotFound from "../404";

const AppRouter = () => {
    const token = useSelector(state => state.user.token)
    let decode
    let role
    console.log(token)
    if (token) {
        decode = jwt_decode(token)
        role = (decode.role)
    }
    return (
        <Switch>
            {publicRoutes.map(({ path, component }) =>
                <Route key={path} path={path} component={component} exact />
            )}
            {role === 'ADMIN' &&
                (
                    adminRoutes.map(({ path, component }) =>
                        <Route key={path} path={path} component={component} exact />
                    )
                )
            }
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default AppRouter