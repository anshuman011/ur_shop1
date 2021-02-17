import React,{Component} from 'react';
import classes from './Toolbar.css';
import Logo from './Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import NavigationItems from './NavigationItems/NavigationItems';



class Toolbar extends Component{
    
    
    render(){
        // console.log(Math.floor((Math.random() * 1) + 1))
        return(
            <header className={classes.Toolbar}>
            <DrawerToggle clicked={this.props.drawerToggleClicked}/>
            <Logo/>
            <nav>
            <NavigationItems clicking={this.props.drawerToggleClicked}/>
            </nav>
            </header>

        )
    }}


export default Toolbar;