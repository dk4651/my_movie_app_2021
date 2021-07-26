import React from 'react';

function ShowMovie({title,img,summary,genres}){
    console.log(genres)
return(
    
    <div>
     <h2>{title}</h2>
     <h3>genres : {genres.map((list) => (<ul><li>{list}</li> </ul>))}</h3>
     <img src = {img} alt = {title}></img>
     <p>
        {summary} 
     </p>
        
    </div>
)

}


export default ShowMovie;