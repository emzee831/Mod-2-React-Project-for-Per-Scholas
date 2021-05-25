import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = ()=> {
    let products = useSelector((state) => state.allProducts.products);
    console.log(products);
    //try for in loop with products

    let newProducts = Object.values(products)
    console.log(newProducts);

    let renderList = newProducts.map((product) => {
    let {symbol, low, high, datetime, name} = product; // here list all the api parameters you want to render
    let prod = product.values[0]   
    return (
        <div className="StockSectionhome"> 
                <div className="first inner stock div">
                    <div className="second inner stock div">
                        <div className="maybegraph">
                        </div>
                            <div className="thirdinnerstockdiv">
                                <div className="company">{product.meta.symbol}</div>
                                <div className="low">low: {prod.low}</div>
                                <div className="high">high: {prod.high}</div>
                                <div className="datetime">{prod.datetime}</div>
                            </div>
                    </div>
                </div>
        </div>
        );
    });
    // const {id, title} = products[0];
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default ProductComponent





//////////////////////////////////////////////////////////////////////////



// const ProductComponent = ()=> {
//     const products = useSelector((state) => state.allProducts.products);
//     console.log(products);
//     //try for in loop with products



//     const renderList = products.map((product) => {
//     const {symbol, low, high, datetime, name} = product; // here list all the api parameters you want to render
//         return (
//         <div className="StockSectionhome"> 
//             {/* <Link to={`/product/${id}`}> */}
//             {/* <div>{product.AAPL.meta.symbol}</div> */}
//                 <div className="first inner stock div">
//                     <div className="second inner stock div">
//                         <div className="maybegraph">
//                         </div>
//                             <div className="third inner stock div">
//                                 <div className="name">{name}</div>
//                                 <div className="company">{symbol}</div>
//                                 <div className="low">low: {low}</div>
//                                 <div className="high">high: {high}</div>
//                                 <div className="datetime">{datetime}</div>
//                             </div>
//                     </div>
//                 </div>
//             {/* </Link> */}
//         </div>
//         );
//     });
//     // const {id, title} = products[0];
//     return <>{renderList}</>;
// };
// //meta class are for listing json parameters from api calls
// // this is componenet is for listing individual items
// export default ProductComponent




///////////////////////////////////////////////////////////////
// const ProductComponent = ()=> {
//     const products = useSelector((state) => state.allProducts.products);
//     console.log(products);
//     //try for in loop with products



//     // const renderList = products.map((product) => {
//     // const {symbol, low, high, datetime, name} = product; // here list all the api parameters you want to render
        
//     // });
  
//     return (
//         <div className="StockSectionhome"> 
//             {/* <Link to={`/product/${id}`}> */}
//             {/* <div>{product.AAPL.meta.symbol}</div> */}
//                 <div className="first inner stock div">
//                     <div className="second inner stock div">
//                         <div className="maybegraph">
//                         </div>
//                             <div className="third inner stock div">
//                                 <div className="name"></div>
//                                 <div className="company"></div>
//                                 <div className="low">low: </div>
//                                 <div className="high">high:</div>
//                                 <div className="datetime"></div>
//                             </div>
//                     </div>
//                 </div>
//         </div>
//         );
// };
// //meta class are for listing json parameters from api calls
// // this is componenet is for listing individual items
// export default ProductComponent
