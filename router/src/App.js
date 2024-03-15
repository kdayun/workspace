import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/login';
import MyPage from './pages/MyPages';

// route는 routes 안에서 사용
function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profiles/:username" element={<Profile />}/>
      </Route>
      
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />}/>
      </Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='mypage' element={<MyPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
