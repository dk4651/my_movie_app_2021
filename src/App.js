import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';
import axios from 'axios';
import ShowMovie from './ShowMovie'


//세 번째 예시 만들기 
//영화 소개 사이트를 만들어라 
class App extends React.Component{
  state = {
    isLoading : false ,
    Moviedata: []
  };
GetData = async() => {
  const Movieurl = await axios.get("https://yts.mx/api/v2/list_movies.json");
  console.log(Movieurl);
  this.setState({Moviedata : Movieurl.data.data.movies, isLoading:true});
  console.log(this.state.Moviedata);


}
  componentDidMount(){
    this.GetData();
    /*setTimeout(()=>{
      this.setState({isLoading : true});
    },6000);*/

    /*const GetData = async() => {
      try {
        const url = await axios.get("https://yts.mx/api/v2/list_movies.json");
      } catch (error) {
  }
  }
  GetData();*/
}

  render(){

    return(

      <div>
        {this.state.isLoading ? 
        (this.state.Moviedata.map(list =>
          (<ShowMovie key = {list.id} 
          title = {list.title} 
          img = {list.medium_cover_image} 
          summary = {list.summary} 
          genres = {list.genres}/>)
          )
        )

        : 

        <h2>Loading...{this.Clock}</h2>}

      
      </div>
    )

  }
}


//세 번째 예시 만들기 


//두 번째 예시 만들기 
//버튼을 눌러서 숫자를 증/감시키기 

// class App extends React.Component{
//   state = {
//     count : 0

//   };
//   Add = () => {
//     this.setState({count: this.state.count + 1})
//   };
//   Minus = () => {
//     this.setState({count: this.state.count - 1})
//   };
//   Reset = () =>{
//     this.setState({count: this.state.count = 0})
//   };
//   render(){
//     return(
  
//     <div>
//       <p>
//         <h1>Current Number is : {this.state.count}</h1>
//       </p>
//       &nbsp;&nbsp;
//       <button onClick = {this.Add}> Plus </button>
//       &nbsp;&nbsp;
//       <button onClick ={this.Minus}> Minus </button>
//       &nbsp;&nbsp;
//       <button onClick ={this.Reset}> Reset </button>
//     </div>
//     )

//   }
// }

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
