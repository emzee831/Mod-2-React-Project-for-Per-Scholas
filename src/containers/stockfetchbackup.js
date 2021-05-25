import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setNews } from "../redux/actions/productActions"; //important part!
import ProductComponent from "./ProductComponent"
import NewsComponent from "./NewsComponent"
import './stocknews.css';


const ProductListing = ()=> {
    const news = useSelector((state) => state);
    const products = useSelector((state) => state);
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
    const fetchNews = async ()=> {
        const response2 = await axios
        

        .get(`https://newsapi.org/v2/everything?q=Finance&from=${startDateStr}&sortBy=popularity&apiKey=2dfdded702694d04a46dd544f5498963&language=en`)
        .catch((err) => {
            console.log("Err", err);
        });
        // dispatch(response2.data);
        dispatch(setNews(response2.data.articles)); // dispatching an action to redux product actions
        console.log(response2);
    };

    const fetchStocks = async ()=> {

        const response = await axios
        .get("https://api.twelvedata.com/time_series?symbol=AAPL,FB,GOOG,SQ,TSLA&interval=1min&apikey=708c8cf825194910aa7b6c2a817b9283&outputsize=1")
        .catch((err) => {
            console.log("Err", err);
        });
        // dispatch(response.data);
        dispatch(setProducts(response.data.data)); // dispatching an action to redux product actions
        console.log(response);
    };


    useEffect(() => {
        fetchStocks();
        fetchNews(); 
    }, []);
    // console.log(products);
    console.log("Products: ", products);
    console.log("News: ", news);

    return(
        <div className="stockandnews">
            <ProductComponent/>
            <NewsComponent/>
        </div>
    )
};

export default ProductListing 


// https://api.twelvedata.com/time_series?symbol=AAPL,&interval=1week&apikey=708c8cf825194910aa7b6c2a817b9283


// https://api.twelvedata.com/time_series?symbol=AAPL,FB,GOOG,SQ,TSLA&interval=1min&apikey=708c8cf825194910aa7b6c2a817b9283&outputsize=1