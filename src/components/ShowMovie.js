import React from 'react';
import './ShowMovie.css';
import {Link} from 'react-router-dom';


function ShowMovie({id,title,img,summary,genres}){

return(
    <div className = 'movie'>
    <Link to ={{
        pathname : '/movie-detail',
        state : {
            title,
            img,
            summary,
            genres
        }
    }}>
    
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
        </Link>  
    </div>


    )

}


export default ShowMovie;