import React from 'react';
import Title from './components/Title.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'

export default class App extends React.Component {
  
    getweather =async(e)=>{
    e.preventDefault();
    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi,india&appid=a6e9e88f8a7dbbf4cf654c46fe012741")
       

    const data =api_call.json();
    console.log(data);

  }

  render(){
  
    return(
      <div>
      <Title />
      <Form getweather={this.getweather}/>
      <Weather/>
      
      </div>
    );
  }
}