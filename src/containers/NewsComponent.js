import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NewsComponent = ()=> {
    const news = useSelector((state) => state.allNews.news);
    console.log(news);
    const renderList = news.map((news) => {
    const {source, author, title, description, url, urlToImage, content} = news; // here list all the api parameters you want to render
        return (
            

        <div className="Newshome"> 
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
    // const {id, title} = products[0];
    return <>{renderList}</>;
};
//meta class are for listing json parameters from api calls
// this is componenet is for listing individual items
export default NewsComponent