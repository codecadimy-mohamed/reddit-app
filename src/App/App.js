import styles from "./App.css";
import SearchBar from '../features/searchBar/SearchBar';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={ <SearchBar /> }/>
));
function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
