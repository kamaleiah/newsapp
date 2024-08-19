import React, { useEffect, useState } from "react";
import './list.css';
import ArticleCard from "./ArticleCard";
import { useCrud } from "../context/appContext";

function ArticleList() {

    const { article, retrieveArticles, search, showResults, sResults } = useCrud();
    const [artList, setArtList] = useState(9);
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
        retrieveArticles();
    },[]);


    const showList = (search.length <= 1 ? (article.slice(0, artList)): sResults).map((article, index) => {
        return (
            <ArticleCard key={index} a={article}/>
        )
    });

    const loadMore = () => {
        setArtList(prevArtList => prevArtList + 6);
        if (artList >= article.length) {
          setShowMore(false);
        }
      };

    const showLess = () => {
        setArtList(9);
        setShowMore(true)
      };

    return (
        <div>
                { showResults ? (
            <div className="horizontal-list">
                {showList.length >= 0 ? showList : "No articles match that search"}
            </div>
            ) : ( 
                
                <div className="horizontal-list">
                  {showList}
                </div>
            )}
                {showMore ? ( <button className="ui button orange" style={{marginLeft:'44%'}} onClick={loadMore}>Load More</button>
                ) : ( 
                <>
                <h4 style={{color:"white", textAlign:'center'}}>No more results</h4>
                <button className="ui button orange" style={{marginLeft:'44%'}} onClick={showLess}>Show Less</button>
                </>    
                ) } 
        </div>     
    )
}

export default ArticleList;