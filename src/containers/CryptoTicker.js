import React from "react";
import { useSelector } from "react-redux";

const CryptoTickerComponent = ()=> {
    let cryptosymbols = useSelector((state) => state.allCryptosymbols.cryptosymbols);
    console.log(cryptosymbols);
    //try for in loop with cryptosymbols

    let newcryptosymbols = Object.values(cryptosymbols)
    console.log(newcryptosymbols);

    let renderList = cryptosymbols.map((product) => {
    let {symbol, low, high, datetime, name} = product; // here list all the api parameters you want to render
    let prod = product.values[0]   
    return (
        <div className="Cryptotickermain"> 
            <div className="firstcryptodiv"></div>
                {/* <div className="secondcryptodiv"></div>
                <div className="thirdinnercyrptodiv"></div> */}
                    <div className="company">{product.meta.symbol}</div>
                    <div className="low">low: {prod.low}</div>
                    <div className="high">high: {prod.high}</div>
                    <div className="datetime">{prod.datetime}</div>  
        </div>
        );
    });
    // const {id, title} = cryptosymbols[0];
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default CryptoTickerComponent
