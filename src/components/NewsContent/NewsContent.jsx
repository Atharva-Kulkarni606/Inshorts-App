import React from 'react';
import { Container } from '@material-ui/core';
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({newsArray,newsResults}) => {
    return(
        <Container maxWidth = "md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshorts app on your
                    </span>
                    <img 
                    src="https://assets.inshorts.com/website_assets/images/appstore.png" 
                    alt="app store"
                    height ="80%"
                     />
                     <img 
                    src="https://assets.inshorts.com/website_assets/images/playstore.png" 
                    alt="play store"
                    height ="80%"
                     />
                </div>
                {
                    newsArray.map((newsItem) => {
                        return <NewsCard newsItem = {newsItem} key = {newsItem.title}/>
                    })
                }
                <hr />
            </div>
           
        </Container> 
    )

};

export default NewsContent;