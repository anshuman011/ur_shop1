import React from 'react';
import {Link} from 'react-router-dom';
import classes  from './NavigationItem.css';


const navigationItem=(props)=>{
    let attachedClasses=classes.NavigationItem;
    if(props.cssChanges){
    attachedClasses=classes.NavigationItemA;
    /* console.log("navitem"); */}
        
    return(
    <li className={attachedClasses}>
        <Link onClick={props.clicked}  
            to={props.toHere} className={props.active?classes.active : null}>{props.children}</Link>
    </li>)
}

export default navigationItem;
