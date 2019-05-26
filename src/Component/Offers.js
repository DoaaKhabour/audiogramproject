import React from 'react' ;
import './Offers.css'
const Offers = (props) => (
  <div className="App">
    <div className="gallery">
        <label className="Label">{props.offerName}</label>
      <img src={props.offerImg} alt="Food" width="800px" height="600px"></img>
    <div className="desc" >{props.offerDescrip}</div>
  </div>
  </div>

);

export default Offers;