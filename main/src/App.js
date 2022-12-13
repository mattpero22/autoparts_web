import { useEffect,useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Header from './components/header/header.component';
import SearchBox from "./components/search-box/search-box.component";

import { GlobalStyle } from './global.styles';

import { setCurrentUser } from './store/user/user.action';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import PartList from './components/part-list/part-list-component';

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value,setValue]

  const [parts, setParts] = useState([]);

  const [filteredParts, setFilteredParts] = useState(parts);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const newFilteredPart = parts.filter((part) => {
      return part.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredParts(newFilteredPart);
  }, [parts, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
   
    
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
       
   
      </Route>

  
    </Routes>
    
    
    
  );
};

export default App;