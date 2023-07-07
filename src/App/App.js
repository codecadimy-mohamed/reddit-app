import SearchPage from "../Components/searchPage/SearchPage";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import TopPosts from "../features/topPosts/TopPosts";
import Root from "../Components/Root/Root";
import HomePage from "../Components/HomePage/HomePage";

const appRouter = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Root />}>
    <Route index element={<HomePage />}/>
    <Route path='search' element={<SearchPage />}>
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