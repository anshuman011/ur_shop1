import React from 'react';
import shopLogo from '../../../../assets/Images/logoo.jpg';
import classes from './Logo.css';

const logo =(props)=>(
    <div className={classes.Logo}>
        <img src={shopLogo} alt="MyShopLogo"/>
    </div>
);

export default logo;
