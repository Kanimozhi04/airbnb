import React from 'react';
import './App.css';
import './Groupimg.js';
export default function Card(props){
   // console.log(props);
//console.log(props);
  
    return(
        

        <div className="card">
            <img  src={props.img} className="images"   />
            <div className="starImg">
                <img src="https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg" className='star'  />
                <span>{props.rating}</span>
                <span className="graytext">{props.reviewCount}.</span>
                <span className="graytext">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='changebold'>From ${props.price}</span> / person</p>
        </div>
       /*<div className="card">
            <img src="person1.png"className="person1Img" />
            <div className="starImg">
                <img src="star.png" className='star'  />
                <span>5.0</span>
                <span className="graytext">(6) .</span>
                <span className="graytext">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='changebold'>From $136</span> / person</p>
        </div> 
       */

    );
}