import SearchPage from "../Components/searchPage/SearchPage";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import TopPosts from "../features/topPosts/TopPosts";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";

const appRouter = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Main />}>
    <Route index element={<Home />}/>
    <Route path='/search' element={<SearchPage />}>
      <Route index element={<TopPosts />} />
    </Route>
  </Route>
));
function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;