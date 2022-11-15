import {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component';

function App() {



return (
  <Routes>
    <Route path='/' element ={<Navigation/>} >
    <Route path ='/home' element ={<Home />} />
    <Route path='/shop/*' element ={<Shop />} />
    <Route path='auth' element ={<Authentication />} />
    </Route>
  </Routes>
  );
};

export default App;