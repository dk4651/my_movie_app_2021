import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

//두 번째 예시 만들기 
//버튼을 눌러서 숫자를 증/감시키기 

class App extends React.Component{
  state = {
    count : 0

  };
  Add = () => {
    this.setState({count: this.state.count + 1})
  };
  Minus = () => {
    this.setState({count: this.state.count - 1})
  };
  Reset = () =>{
    this.setState({count: this.state.count = 0})
  };
  render(){
    return(
  
    <div>
      <p>
        <h1>Current Number is : {this.state.count}</h1>
      </p>
      &nbsp;&nbsp;
      <button onClick = {this.Add}> Plus </button>
      &nbsp;&nbsp;
      <button onClick ={this.Minus}> Minus </button>
      &nbsp;&nbsp;
      <button onClick ={this.Reset}> Reset </button>
    </div>
    )

  }
}

//두 번째 예시 만들기 



// 첫 예시 만들기
// 좋아하는 음식을 나열한다 
  // const FoodILike = [
  //   {
  //     id : 1,
  //     name : "Kimchi",
  //     image : "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
  //     rating : 5
  //   },
  //   {
  //     id : 2,
  //     name : "samgeopsal",
  //     image : "http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
  //     rating : 4.9
  //   },
  //   {
  //     id : 3,
  //     name : "chicken",
  //     image : "http://www.ckhero.co.kr/new/theme/basic/img/main_quick_menu7.png",
  //     rating : 4.7
  //   }]

  // function Food({name, image,rate}){
  // //  console.log(props);
  //   return(
  //     <div>
  //       <h2>I like {name}</h2>
  //       <h4>{rate}/5.0</h4>
  //       <img src= {image} width = '450' alt = {image}></img>

  //     </div>
  //   )
        
  // }

  // Food.propTypes = {

  //   name : PropTypes.string.isRequired
  // };

    
  // function App() {
  //   return (
  
  //     <div>
  //       <h1>My Favorite Food List</h1>
  //       {FoodILike.map(dish => (
  //       <Food 
  //       key = {dish.id} 
  //       name = {dish.name} 
  //       image = {dish.image}
  //       rate = {dish.rating}/>))}
  //     </div>
  //   )
  // }
// 첫 예시 만들기

export default App;
