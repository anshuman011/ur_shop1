import React,{Component} from 'react';
import classes from './ProductDetails.css';
import OneProduct from '../OneProduct';
import axios from 'axios';

import img1 from '../../../../assets/Images/img1.jpg';
import img2 from '../../../../assets/Images/img2.jpg';
import img3 from '../../../../assets/Images/img3.jpg';
import img4 from '../../../../assets/Images/img4.jpg';


class ProdDetails extends Component{
    state={
        selectedProductId:null,
        //only below 2 using as of now
        productDetails:null, 
        imageOfflineId:[img1,img2,img3,img4,img3,img2,img4,img1],
            }

    componentDidMount(){
            setTimeout(()=>{
                axios.get('https://urshop-2ffd4-default-rtdb.firebaseio.com/prodDetailsOnline.json')
                     .then(response=>{this.setState({productDetails:response.data })})
                     .catch(error=>console.log(error))
                axios.get('https://urshop-2ffd4-default-rtdb.firebaseio.com/itemClicked.json')
                     .then(response=>{
                         this.setState({selectedProductId:Object.values(response.data)/* .slice(-1) */})
                        console.log(this.state.selectedProductId)
                        })
                     .catch(error=>console.log(error))},200)
                }
           
    componentWillUnmount(){
                // setTimeout(() => {
                    axios.delete('https://urshop-2ffd4-default-rtdb.firebaseio.com/itemClicked.json',
                        this.state.selectedProductId)
                //   }, 500)
            }
        

    render(){
        let oneProdDetails=null
        if(this.state.productDetails){
         oneProdDetails=(<div className={classes.ProD}>
            {Object.values(this.state.productDetails).map((a,index)=>{
                // {let obj = JSON.parse(a)}
                // console.log(Object.values(a.imageId))
                if(a.prodId==this.state.selectedProductId){
                return <OneProduct
                        key={a.prodId}
                        prodId={a.prodId}
                        prodName={a.name}
                        imageId={this.state.imageOfflineId[index]}
                        // imageId={a.imageId}
                        toHere="/prod"
                        dealOfTheDay={a.dealOfTheDay}
                        oldPrice={a.oldPrice}
                        newPrice={a.newPrice}
                        /* showProdDetails={()=>this.showProdDetailsHandler(a.prodId)} */
                                     />}
                })}
        </div>)}
        
        return(
                <div className={classes.ProD}>
                   {oneProdDetails}
                   <button >Add To Cart</button>
                </div>
        )
    }
}

export default ProdDetails;