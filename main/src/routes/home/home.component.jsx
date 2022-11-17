import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component.jsx';

import {HomeTitle} from './home.component.styles.jsx';
const Home = () => {

  return (

  
    <div>
        <HomeTitle> ALPHA AUTO PARTS </HomeTitle>
       <Outlet />
        <Directory />
        
    </div>
 
  );
};

export default Home;

