import React,{Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedhandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>{
        // this.setState((prevState)=>{
        //     return {showSideDrawer:!prevState.showSideDrawer};
        // this.setState({showSideDrawer:true}) IMPP
        //TO MAKE THE BUTTON TOGGLBLE USE BELOW INSTEAD OF ABOVE
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
          });
    }
    render(){
        return(
            <div className={classes.Content}>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />          
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler}/>
            </div>
            
        )
    }
}

export default Layout;