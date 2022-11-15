import React from 'react'

    import {
        NavigationContainer,
        NavLinks,
        NavLink,
     
      } from './navigation.styles';
      
    function Navigation() {

      
        return (
        
            <NavigationContainer>
              <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/auth'>AUTH</NavLink>
      
                
              </NavLinks>
              
            </NavigationContainer>
          
        
        );
      };
      
      
      export default Navigation;