import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


// 첫 예시 만들기
// 좋아하는 음식을 나열한다 
const FoodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "samgeopsal",
    image : "http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name : "chicken",
    image : "http://www.ckhero.co.kr/new/theme/basic/img/main_quick_menu7.png",
    rating : 4.7
  }]

function Food({name, image,rate}){
//  console.log(props);
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rate}/5.0</h4>
      <img src= {image} width = '450' alt = {image}></img>

    </div>
  )
      
}

Food.propTypes = {

  name : PropTypes.string.isRequired
};

  
function App() {
  return (
 
    <div>
      <h1>My Favorite Food List</h1>
      {FoodILike.map(dish => (
      <Food 
      key = {dish.id} 
      name = {dish.name} 
      image = {dish.image}
      rate = {dish.rating}/>))}
    </div>
  )
}
// 첫 예시 만들기

export default App;
