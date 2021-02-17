import React,{Component} from 'react';
import classes from './Shop.css';
import OneProduct from './OneProduct/OneProduct';
import axios from 'axios';

import img1 from '../../assets/Images/img1.jpg';
import img2 from '../../assets/Images/img2.jpg';
import img3 from '../../assets/Images/img3.jpg';
import img4 from '../../assets/Images/img4.jpg';
import { Redirect } from 'react-router-dom';

class Shop extends Component{
    state={
            
// {"dealOfTheDay"="false","imageId"="img1","name"="Morning Glory, 50 Seeds Mixed by Seedscare","newPrice"=999,"oldPrice"=1999,"prodId":1006}

            //only below 2 using as of now
            selectedPostId:null,
            productDetails:null, 
            imageOfflineId:[img1,img2,img3,img4,img3,img2,img4,img1],
            itemClickedIdArray:[]
    }
    
    componentDidMount(){
        axios.get('https://urshop-2ffd4-default-rtdb.firebaseio.com/prodDetailsOnline.json')
             .then(response=>{this.setState({productDetails:response.data })})
             .catch(error=>console.log(error))
    }

    showProdDetailsHandler=(id)=>{
        axios.post('https://urshop-2ffd4-default-rtdb.firebaseio.com/itemClicked.json',id)
                 .then(()=>{
                           
                            {/* <Redirect from ="/" to="/prod"/> */}})
                 .catch(error=>console.log(error))
      
    }
    // componentWillUnmount(){
    //     setTimeout(() => {
    //         axios.delete('https://urshop-2ffd4-default-rtdb.firebaseio.com/itemClicked.json')
    //       }, 1000)
    // }
    
    render(){
        let oneProduct=null
        if(this.state.productDetails){
             oneProduct=(<div className={classes.Shop}>
                {Object.values(this.state.productDetails).map((a,index)=>{
                    // {let obj = JSON.parse(a)}
                    // console.log(Object.values(a.imageId))
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
                            showProdDetails={()=>this.showProdDetailsHandler(a.prodId)}
                                         />
                    })}
            </div>)}

        return(
            <div className={classes.Shop}>
            {oneProduct}
            </div>
        )
    }
 }
export default Shop;





//     productDetails : [
    //   {
    //     name: "ProductDetails for product 1",
    //     imageId: img1,
    //     prodId:1001
    //   },
    //   {
    //     name: "ProductDetails for product 2",
    //     imageId: img2,
    //     prodId:1002
    //   },
    //   {
    //     name: "ProductDetails for product 3",
    //     imageId: img3,
    //     prodId:1003
    //   },
    //   {
    //     name: "ProductDetails for product 4",
    //     imageId: img4,
    //     prodId:1004
    //   },
    // ],
    // imageId:[img1,img2,img3,img4,img3,img2,img4,img1],
        // prodName:["ProductDetails for product 1","ProductDetails for product 2",
        //                 "ProductDetails for product 3","ProductDetails for product 4",
        //                 "ProductDetails for product 5","ProductDetails for product 6",
        //                 "ProductDetails for product 7","ProductDetails for product 8"],

    
 // componentDidMount(){
    //     if(this.state.toPostProdDetailsToAxiox){
    //         console.log(this.state.toPostProdDetailsToAxiox)
    //         const data={...this.state.productDetails}
    //     // console.log(data)
    //     axios.post('https://urshop-2ffd4-default-rtdb.firebaseio.com/prodDetails.json',data)
    //          .then(response=>console.log(response),this.setState({toPostProdDetailsToAxiox:false}))
    //          .catch(error=>console.log(error))
    //     } 
    // }
       


// const oneProduct=(<div className={classes.Shop}>
        //     {this.state.prodName.map((a,index)=>{
        //          console.log(index)
        //         return <OneProduct
        //                     key={index}        
        //                     prodName={a}
        //                     imageId={this.state.imageId[index]}
        //                     toHere="/prod"
        //                     /* showProdDetails={()=>this.showProdDetails(index)} *//>
        // })}
        // </div>)