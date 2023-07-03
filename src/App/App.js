import styles from "./App.css";
import SearchPage from "../features/searchPage/SearchPage";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import QuickSearchResults from "../Components/QuickSearchResults/QuickSearchResults";

const appRouter = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={ <SearchPage /> }>
    <Route index element={ <QuickSearchResults /> } />
  </Route>
));
function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
