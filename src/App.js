import React, { useEffect, useState } from 'react';
import Navinshorts from './components/Navinshorts';
import './components/Navinshorts.css'
import categories from './Data/category';
import NewsContent from './components/NewsContent/NewsContent';
import apiKey from './Data/config';
import axios from 'axios';
import Footer from './components/Footer/Footer';

const App = () => { 
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState(); 


  // console.log(category)
  const newsApi = async () => {
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}
      `);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(news);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  },[newsResults,category]);


  return(
  <div className = "App">
      <Navinshorts setCategory = {setCategory}/>
      {newsResults && (<NewsContent 
        newsArray = {newsArray} 
        newsResults = {newsResults} 
      />
      )}
      <Footer />
  </div>
  );
  

};

export default App;