import React, { Component } from 'react';
import axios from 'axios';
import './AddNewItemToList.css' ;


class AddNewItemToList extends Component{

state={
    orderUserName :'',
    orderItemId :'',
    orderPrice :''
}



postMyNewOrder=()=>{
    const data={
        orderUserName:this.state.orderUserName,
        orderItemId:this.state.orderItemId,
        orderPrice:this.state.orderPrice
    }
    axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post'
    ,data)
    .then(response=>{
     console.log(response)  
     })
    .catch(error=>{
        console.log(error)
        
    });    
}

render () {
    return (
        <div className="div">
            <label className="label">Please enter the information bellow to add new item ..</label><br/> 
            
            <label>UserName</label>

          <div>  <input type="text" value={this.state.orderUserName} 
            onChange={(event) => this.setState({orderUserName: event.target.value})} /></div>
            <label>Order Id</label>
            <input type="text" value={this.state.orderItemId} onChange={(event) => this.setState({orderItemId: event.target.value})} />
            <label>orderPrice</label>
            <input type="text" value={this.state.orderPrice} onChange={(event) => this.setState({orderPrice: event.target.value})} /><br/>
           
            <button  className="button" onClick={this.postMyNewOrder}>Submit</button>
        </div>
    );
}
}



export default AddNewItemToList ;