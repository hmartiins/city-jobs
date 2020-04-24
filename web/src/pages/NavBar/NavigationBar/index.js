import React, { Component } from 'react';

import SideDrawer from '../SideDrawer/sideDrawer';
import Backdrop from '../BackDrop/backdrop';
import Toolbar from '../Toolbar';

class NavigationBar extends Component{
  state = {
    sideDrawerOpen: false
  };
 
  drawerToggleHandleClick = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandle = () =>{
    this.setState({sideDrawerOpen: false});
  };
  render(){
    let backdrop;
  
    if(this.state.sideDrawerOpen){
      backdrop= <Backdrop click={this.backdropClickHandle} />
    }
    return(
    <div className="container">
      <Toolbar drawerClickHandle={this.drawerToggleHandleClick}/>
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
    </div>
  )};
};

export default NavigationBar;