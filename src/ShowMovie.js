import React from 'react';
import './ShowMovie.css';


function ShowMovie({title,img,summary,genres}){

return(    
    <div className = 'movie'>
        <img src = {img} alt = {title} title = {title}></img>
        <div className = 'movie__data'>
            <h3 className = 'movie__title'>{title}</h3>
            <ul className = 'movie__genres'>
                {genres.map((genre,index) => (
                <li key={index} className ='genres__genre'>
                    {genre}
                </li>
                ))}
            </ul>
            <p className = 'movie__summary'>{summary.slice(0,180)}...</p>  
        </div>    
    </div>
    )

}


export default ShowMovie;