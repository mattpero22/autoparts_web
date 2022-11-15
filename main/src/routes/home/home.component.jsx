import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component.jsx';

import {HomeTitle} from './home.component.styles.jsx';
function Home() {

    
  return (

  
    <div>
        <HomeTitle> Welcome To Crown Clothing </HomeTitle>
       <Outlet />
        <Directory />
        
    </div>
 
  );
};

export default Home;