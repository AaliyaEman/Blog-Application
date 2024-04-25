import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './pages/Navbar';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
</Routes>
<div className='bg-white h-16 w-screen'>
<h1 className=' text-xl text-right pr-8 pt-4 text-bold'> Developer:Aaliya Eman </h1>

</div>
</BrowserRouter>

  );
}

export default App;