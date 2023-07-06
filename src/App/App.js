import SearchPage from "../Components/searchPage/SearchPage";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import TopPosts from "../features/topPosts/TopPosts";

const appRouter = createBrowserRouter(createRoutesFromChildren(
  <Route path='/search' element={ <SearchPage /> }>
    <Route index element={ <TopPosts /> } />
  </Route>
));
function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;