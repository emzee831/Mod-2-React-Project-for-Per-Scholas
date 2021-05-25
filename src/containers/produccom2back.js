import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = ()=> {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {} = product; // here list all the api parameters you want to render
        return (
        <div className="four column wide" key={id}> 
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={image} alt={title}/>
                </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta">{}</div>  
                        <div className="meta">{}</div>
                    </div>
            </div>
        </div>
        </Link>
        </div>);
    });
    // const {id, title} = products[0];
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default ProductComponent


//////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = ()=> {
    const products = useSelector((state) => state.allProducts.products);
    // const {id, title} = products[0];
    
        return (
        <div className="four column wide"> 
            <div className="ui link cards">
            <div>{product.AAPL.meta.symbol}</div>
                <div className="card">
                    <div className="image">
                    </div>
                </div>
            </div>
        </div>
    );
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default ProductComponent

/////////////////////////////////////////////////////////////////////
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = ()=> {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    //try for in loop with products
    const renderList = products.map((product, index) => {
    const {symbol, interval, currency} = product; // here list all the api parameters you want to render
        return (
        <div className="Stock Section home"> 
            {/* <Link to={`/product/${id}`}> */}
            <div>{product.AAPL.meta.symbol}</div>
                <div className="first inner stock div">
                    <div className="second inner stock div">
                        <div className="maybegraph">
                        </div>
                            <div className="third inner stock div">
                                <div className="company">{symbol}</div>
                                <div className="interval">{interval}</div>
                                <div className="currenty">{currency}</div>
                            </div>
                    </div>
                </div>
            {/* </Link> */}
        </div>
        );
    });
    // const {id, title} = products[0];
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default ProductComponent



////////////////////////////////////////////////////////
this.setState({
    data:{
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label:'Population',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ]
        }
      ]
    }
  });
}
};



render() {
return (
    <div>
      <Chart singlestock={this.state.data}/>
  </div>
);
}
}

export default Stock;


