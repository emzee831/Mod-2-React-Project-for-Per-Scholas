import React, { useEffect, Component } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setCryptoSymbols, setCryptoNews } from "../redux/actions/productActions"; //important part!
import CryptoTickerComponent from "./CryptoTicker"
import CryptoNewsComponent from "./CryptoNews"
import './stocknews.css';


const CryptoListing = ()=> {
    const cryptonews = useSelector((state) => state);
    const cryptosymbols = useSelector((state) => state);
    const dispatch = useDispatch();
    
    let curday = function(sp){
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = today.getMonth()+1; 
        let dd = today.getDate();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+sp+dd+sp+yyyy);
        };
        // console.log(curday('/'));
        console.log(curday('-'));

    const startDateStr = curday('-')



    const fetchCryptoNews = async ()=> {
        const response3 = await axios
        

        .get(`https://newsapi.org/v2/everything?q=CryptoCurrency&from=${startDateStr}&sortBy=popularity&apiKey=2dfdded702694d04a46dd544f5498963&language=en&pageSize=10`)
        .catch((err) => {
            console.log("Err", err);
        });
        // dispatch(response3.data);
        dispatch(setCryptoNews(response3.data.articles)); // dispatching an action to redux product actions
        console.log(response3);
        console.log(response3.data.articles);
    };

    const fetchCryptoSymbol = async ()=> {

        const response4 = await axios
        .get("https://api.twelvedata.com/time_series?symbol=BTC/USD,ETH/BTC,XRP/USD,DASH/BTC,LTC&interval=1min&apikey=708c8cf825194910aa7b6c2a817b9283&outputsize=1")
        .catch((err) => {
            console.log("Err", err);
        });
        // dispatch(response4.data);
        dispatch(setCryptoSymbols(response4.data)); // dispatching an action to redux product actions
        console.log(response4);
        console.log(response4.data);
    };


    useEffect(() => {
        fetchCryptoSymbol();
        fetchCryptoNews(); 
    }, []);
    // console.log(products);
    // console.log("Cryptosymbols: ", cryptosymbols);
    // console.log("Cryptonews: ", cryptonews);

    return(
        <div className="cyptoandnews">
            <CryptoTickerComponent/>
            <CryptoNewsComponent/>
        </div>
    )
};

export default CryptoListing 

