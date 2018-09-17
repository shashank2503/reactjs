import React from 'react';
export default class Form extends React.Component{
    render(){
        return(
            <div>
               <form onSubmit={this.props.getweather}>
                   <input type="text" name="city" placeholder="enter city"/>
                   <p></p>
                   <input type="text" name="city" placeholder="enter country"/><p></p>
                   <button>Check-weather</button>

               </form>
            </div>
        );
    }
}