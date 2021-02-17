import React,{Component} from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

// import {Route} from 'react-router-dom';
// <Route path="/" exact component={Layout}/>


class NavigationItems extends Component{
    state={
        contentOfToolbar:[["Categories","/1"],
                          ["Returns","/2"],
                          ["Home","/"],
                          ["Cart Status","/4"],
                          ["","/5"]],
        contentOfSidebar:["Option1","Option2","Option3","Option4"],
        func:"this.props.clicking"
        // ingredients:{
        //     salad:0,
        //     bacon:0,
        //     cheese:0,
        //     meat:0
        // },
      }
    
    
    abc=()=>{
        console.log("workks")
    }
    def=()=>{
        console.log("def")
    }


    render(){
            let attachedClasses=classes.NavigationItems;
            if(this.props.xyz){
            attachedClasses=classes.NavigationItemsA;
            /* console.log("navitems"); */}
            
            let navvItems=(<ul className={attachedClasses}>
                        {this.state.contentOfToolbar.map((a,index)=>{
                            if(a[0]==="Categories"){
                                //console.log(typeof(this.state.func))
                                return ( 
                                    <NavigationItem /* active */ /* toHere="/" */  
                                    clicked={this.props.clicking}
                                    key={index}
                                    cssChanges={this.props.xyz}>{a[0]}</NavigationItem>) }
                            else{
                                return ( 
                                    <NavigationItem /* active */ toHere={a[1]}  
                                    // clicked={this.props.clicking}
                                    key={index}
                                    cssChanges={this.props.xyz}>{a[0]}</NavigationItem>)

                            }
                            
                            })}
                            </ul>)
                        if(this.props.side){
                        navvItems=(<ul className={attachedClasses}>
                        {this.state.contentOfSidebar.map((a,index)=>{
                            return ( 
                                <NavigationItem /* active */ toHere="/" 
                                clicked={this.props.clicking}
                                key={index}
                                cssChanges={this.props.xyz}>{a}</NavigationItem>)
                            })}
                            </ul>)}
           
    
        return(
            <div>
            {navvItems}
            </div>
        )
    }
}
        

export default NavigationItems;




// <ul className={attachedClasses}>
            // <NavigationItem /* active */ toHere="/"  clicked={this.props.clicking}
            //     cssChanges={this.props.xyz}>Categories</NavigationItem>
            // <NavigationItem clicked={this.abc} toHere="/"
            //     cssChanges={this.props.xyz}>Search</NavigationItem>
            // <NavigationItem clicked={this.def} toHere="/"
            //     cssChanges={this.props.xyz}>Return & Orders</NavigationItem> 
            // </ul>
