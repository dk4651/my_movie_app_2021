import React from 'react';

class Detail extends React.Component{
    
    componentDidMount(){
        
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
        console.log(location.state);


    }
    render(){
        console.log(this.props)
        const {location} = this.props;
        if(location.state){
        return(<div>{location.state.title}</div>);}
            else{
            return null;
            }
        

    }
}


// function Detail({location}){

// console.log(location)
//     return(
//         <span>hello</span>
//     )

// }

export default Detail