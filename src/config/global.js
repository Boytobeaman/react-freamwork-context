import Home from '../Home/'
import Test from '../Test/'
import Testb from '../Testb/'
import Login from '../Login/'

export const APP_URL_NAME = `/${process.env.REACT_APP_APP_URL_NAME}`
export const APP_NAME = `${process.env.REACT_APP_APP_NAME}`


export const routes = [
  {
    path: `${APP_URL_NAME}/`,
    component: Home,
    showText: "Home",
    exact: true,
    showInUI: true
  },
  {
    path: `${APP_URL_NAME}/test`,
    component: Test,
    showText: "Test",
    exact: true,
    showInUI: true
  },
  {
    path: `${APP_URL_NAME}/testb`,
    component: Testb,
    showText: "Testb",
    exact: true,
    showInUI: true
  },
  {
    path: `${APP_URL_NAME}/login`,
    component: Login,
    showText: "Login",
    exact: true,
    showInUI: false
  }
]