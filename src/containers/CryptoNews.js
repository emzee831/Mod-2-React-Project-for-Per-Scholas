import React from "react";
import { useSelector } from "react-redux";


const CryptoNews = ()=> {
    const cryptonews = useSelector((state) => state.allCryptonews.cryptonews);
    console.log(cryptonews);
    const renderList = cryptonews.map((cryptonews) => {
    const {source, author, title, description, url, urlToImage, content} = cryptonews; // here list all the api parameters you want to render
        return (
            

        <div className="cryptonewshome"> 
            <div>
                <img className="newsimage" src={urlToImage} alt="image" width="200" height="200"/>
            </div>
                <div className="firstnewsdiv"></div>
                  <div className="newstitle">{title}</div>
                  <div className="spacebetweennews"></div>
                    <div className="articledescription">{description}</div>
                    <div className="spacebetweenlinknews"></div>
                    <a className="linktoarticle" href={url} target="_blank">{url}</a>
        </div>
        );
    });
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default CryptoNews