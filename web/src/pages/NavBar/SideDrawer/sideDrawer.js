import React from 'react';

import './stylesSD.css';

const sideDrawer = props => {
   let drawerClasses = 'sideDrawer';
   if(props.show){
      drawerClasses = 'sideDrawer open';
   }

    return(
      <nav className={drawerClasses}>
         <ul>
            <li><a href="/">Profile</a></li>   
            <li><a href="/">Home Page</a></li>   
         </ul>
      </nav>
    );
};

export default sideDrawer;