import React from "react";
import Card from "./Card.js";
import data from "./data.js";
import Navbar from "./Navbar.js";
import './App.css';
import Groupimg from "./Groupimg.js";
//console.log(data);
export default function App()
{
const cards = data.map(item => {
return (
 
  <Card 
      key={item.id}
      img={item.img}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
  />
)
})        
return (
  <div>
      
      <Navbar />
      <Groupimg />
      <section className="cardList">{cards}</section>
       
  </div>
)
}