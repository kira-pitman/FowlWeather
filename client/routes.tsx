import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import Weather from './components/Weather'
import SearchBar from './components/SearchBar'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Weather />} />
    <Route />
  </Route>
)

export const router = createBrowserRouter(routes)