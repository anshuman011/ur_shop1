import React,{Component} from 'react';
import classes from './SideDrawer.css';
//import Logo from '../Toolbar/Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import { MdCancel } from "react-icons/md";

class SideDrawer extends Component{
    
             
    render(){
        let attachedClasses=[classes.SideDrawer,classes.Close];
        if(this.props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];}
        
        const a =window.screen.availWidth;
        let navv=<NavigationItems side>ABC</NavigationItems>
        if(a>=500){
            // console.log("50000000")
            navv=<NavigationItems  side xyz></NavigationItems>}
        
        
        return(<div className={attachedClasses.join(' ')} >
        {/* <div className={classes.Logo}>
        <Logo/>
        </div> */}
        <MdCancel onClick={this.props.closed} style={{float:"right",marginTop:"-10px"}}/>
        <p style={{marginTop:"40px"}}>UR SHOPEEEE</p>
        <p style={{marginTop:"-15px",overflow:"hidden", opacity: "0.6"}}>________________________</p>
                {/*<div>
                     <div className={classes.NavigationI}>
                    <NavigationItems xyz={this.state.Toggle} />          
                </div>*/}
        {/* <button  onClick={this.props.closed} >Close</button> */}
        {navv}
        {/* <h1 onClick={this.forTogglingCss}>CSS changes</h1> */}
    </div>);
    }}

export default SideDrawer;
