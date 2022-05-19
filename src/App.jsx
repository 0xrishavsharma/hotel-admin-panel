import ReactDOM from 'react-dom';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Login from '../pages/Login/Login';
import Products from '../pages/Products/Products';
import New from '../pages/New/New';

import Single from '../pages/Single/Single';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route  path='users'>
          <Route index element={<List/>} />
          <Route path=':userId' element={<Single/>} />
          <Route path='new' element={<New />}/>
        </Route>
        <Route path='products'>
          <Route index element={<Products />}/>
          <Route path=':productId' element={<Single/>} />
          <Route path='new' element={<New/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
