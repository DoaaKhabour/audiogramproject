
   import React from 'react' ;
    


   const List = (props) => (
    <div  >
        
       <tr className="View">
          <td>{props.itemId}</td>
          <td>{props.itemDesc}</td>
          <td>{props.itemPrice}</td>
          <td>  <input type="text" value={props.quantity} 
                onChange={(event) => ({quantity: event.target.value})} /></td>
          <td><img src={props.itemImage} alt="Menu" width="200px" height="200px"  onClick={props.clicked}  ></img></td>


          </tr> 

         </div>


        
);
export default List ;