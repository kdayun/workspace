import { useCallback, useState } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";


const App = () => {

  return (
    <Routes>
      <Route path = "/" element={<NewsPage/>}></Route>
      <Route path = "/:category" element={<NewsPage/>}></Route>
    </Routes>
    );
}

export default App;

// d4afc9a6375b45428629a986c78a0eab