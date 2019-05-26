import React ,{Component} from 'react' ;
import axios from 'axios' ;
import List from './Menu/List' ;
import Orders from './Menu/Orders' ;

class Menu extends Component{

    state={
        lists:[  
        ],
        quantity :'' ,
        orders:[
        ],
        totalPrice:''
    }



    componentDidMount() {
        console.log(this.props)
        
        axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
            .then(response => {
  
                const lists = response.data ;
                const updatedlist = lists.map(list => {
                    return {
                        ...list
                    }
                });
                this.setState({ lists:updatedlist })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: true })
            });
  
  
    }


    AddNewOrder=(orderToBeAdded)=>{
    
        const currentData=[...this.state.lists]
        const  currentData2= currentData.splice(orderToBeAdded,1);
        this.state.orders.push(currentData2)
        console.log(currentData2)
        this.setState({lists:currentData})
    
    
         }

 
            
         
  

    render(){


        let lists = <p style={{ textAlign: 'center' }} >Something went wrong</p>
      
    

        if (!this.state.error) {
        
            lists = this.state.lists.map( (list,ee )=> {
         
  
                return <List
                   key={list.itemId}
                   itemId={list.itemId}
                    itemDesc={list.itemDesc}
                    itemPrice={list.itemPrice}
                    itemImage={list.itemImage}
  
                    clicked={()=>this.AddNewOrder(ee)}
  
                />
            })
  
        }
  
  
         
     
  
        let orders=null ;
  
        orders=this.state.orders.map((order,ee)=>{
  console.log(order)
          return  <Orders 
     
          
          key={order[0].itemId}
          orderName={order[0].itemDesc}
          orderPrice={order[0].itemPrice}
          orderImage={order[0].itemImage}
  
          
          />
        })

 

    

    return(
         <div>
        <div className="App">  <label className="label">Menu Table</label> <p>click on photo to add order</p>
        <div></div>
        <table >
       <th>Item Id</th>
       <th>Item Name</th>
       <th>Item Price</th>
       <th>Item Image</th>
       <th>Quantity</th>
       </table>
        {lists}
        </div>
       
       <div className="App"> <label className="label">Bill Table</label> </div>
       <div>
       <table >
       <th>Item Name</th>
       <th>Item Price</th>
       <th>Quentity</th>
        </table>    
        {orders}
        <label className="label"> Total Price </label>
        <input  className="input" type="text" name="price"   /><br/>
        <button className="button" type="button"   >Submit Bill</button>
        
       </div>
       </div>
        )

}}

export default Menu ;
