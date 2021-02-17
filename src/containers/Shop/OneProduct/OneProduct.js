import React from 'react';
import classes from './OneProduct.css';
import {Link} from 'react-router-dom';
// import {Button} from 'react-bootstrap';

const oneProduct=(props)=>{
    let dealOfTheDay=null;
    if(props.dealOfTheDay){
        dealOfTheDay=<p style={{color:"white",fontSize:"11px",padding:"6px",
                      backgroundColor:"#B12704",display:"inline"}}>Deal Of the DAY</p>
    }

    return(
    <div className={classes.Product}>
        <img className={classes.imgg} src={props.imageId} alt="MyShopLogo"/>
        <div className={classes.Text}>
            <p>{props.prodName}</p>
                {dealOfTheDay}
            <p><b style={{color:"#B12704",fontWeight:"bold"}}>{props.newPrice}</b>
                <small style={{color:"#565959"}}><del> {props.oldPrice}</del></small>
                <small>Save {props.oldPrice-props.newPrice}(13%)</small><br/></p>
                   <small  style={{color:"#565959"}}>10% off with AU Bank Debit Cards<br/>
                        Get it by Wednesday, January 13<br/>FREE Delivery by Amazon</small><br/>  
        </div>
        
        <div className={classes.Disp}>
            <div className={classes.Tex}>
                {/* {console.log(props.prodId)} */}
                <Link to={props.toHere}>            
                        <button 
                            onClick={props.showProdDetails}>Product Details</button></Link>
                        {/* <Alert style={{color:"black"}} varients="dark">snjkda</Alert> */}
                <button >Add to Your Cart Instantly</button>
                <button >Remove from Your Cart Instantly</button>
                <p>No of This Item In The Cart:</p>
            </div>
        </div>
    </div>
    )
};


export default oneProduct;