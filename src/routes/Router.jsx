import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import paths from './paths' // PS aulas 25 e 26 trocou exportações para const em vez de default o que faz mudar o modo de importação, eu resolvi não mudar
import Page from '../components/Page'
import Loading from '../components/Loading'

const Home = lazy(() => import('../pages/Home')) //utilizing lazy to get Home page because it only imports a page once it's requested
const Login = lazy(() => import('../pages/Login'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const getRouteElement = (Component) => (
    <Suspense fallback={<Loading />}>
        <Page>
            <Component />
        </Page>
    </Suspense> // shows another component until a component is loaded. In this case, the Loading component
)

const routes = [ // objects array
    { path: paths.HOME, element: getRouteElement(Home) }, // paths.HOME is from "Router.jsx" to return its value, then getRouteElement is from above, receiving as a parameter the const Home created above
    { path: paths.LOGIN, element: getRouteElement(Login) },
    { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
]

export const Router = createBrowserRouter(routes) // what it's imported from react-router-dom and using the routes object array with the pages as a parameter

//PS: lazy loading asks for export default function, because it's importing for a constant