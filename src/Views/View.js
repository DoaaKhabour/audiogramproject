import React ,{Component} from 'react' ;
import Offers from '../Component/Offers' ;
import FeedBack from '../Component/FeedBackForm/FeedBack' ;
import Menu from '../Component/Menu' ;
import {Route,Link,Switch} from 'react-router-dom' ;
import AddNewItemToList from '../Component/AddNewItemToList'  ;

import './View.css' ;
class View extends Component {

    state={
        auth:true
    }

state={
    offers:[
        {offerId:"1",offerName:"Lunch Box Offer",offerImg: "https://scontent-ams3-1.cdninstagram.com/vp/88c951a8e830c7bf573869558db2cba3/5D520B13/t51.2885-15/e35/56337570_1998593953600255_5209648937483797929_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com&se=7&ig_cache_key=MjAyMDQ5ODE0Nzc3NzU4MjkxOQ%3D%3D.2",offerDescrip:"Get your LUNCH BOX to your  workplace !!! we can deliver it for you ONLY in  5 JD . "},

        {offerId:"2",offerName:"Careem Box Offer",offerImg:"https://scontent.famm2-1.fna.fbcdn.net/v/t1.0-9/50946051_2121917711451976_8614661895544111104_n.jpg?_nc_cat=100&_nc_eui2=AeEJt_YFPZwylh00Qceh1qW15QsZkVvm9SMUoYuf5qjvEbbHkT_gIUHtvbgWwJwVQnt-5OEQErf7R1DyqA9YB55W9JmQbGh1Mpprw2eIFAmpwg&_nc_ht=scontent.famm2-1.fna&oh=0016c5ac20d57f513dd83312cd89de92&oe=5D523D39",offerDescrip:" If you are using CAREEM APP you can take a discount on your order 25% ."},

        {offerId:"3",offerName:"Healthy Meal Offer",offerImg:"https://scontent.famm2-1.fna.fbcdn.net/v/t1.0-9/29512190_1916431918667224_4911774637044808460_n.jpg?_nc_cat=101&_nc_eui2=AeFsfYmXBJOk7zWSLhjF4_mh07tTSx2TUJmtRW8hes0V0KLNRidfDbUsApKJbW-EQ0EeM2zIJmRJjotwNGJdQSWy8qoz1Z-ZLoXxhiAa5l9PNQ&_nc_ht=scontent.famm2-1.fna&oh=376520912b126e79a18f9b427340f37a&oe=5D5EA594",offerDescrip:" If your are HEALTHY person you can find your healthy meal in our resturant ONLY in 6 JD ." },

        {offerId:"4",offerName:"Family Meal Offer",offerImg:"https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/23621735_1855860364724380_4176866296539024689_n.jpg?_nc_cat=110&_nc_eui2=AeHLLLBgonQSjw8YPfI2n_z40V-ZtH7Lj4Px78uKLgKffuf9cvIf9CP4gUKbK0dfkEtytv8UvKTPi-Nd5oZzzcnRhF-cbAIvWZbGGxl-6tn4Ug&_nc_ht=scontent.famm2-2.fna&oh=f7edd616336a6abd5ebbd4b09c814a3f&oe=5D5E7762",offerDescrip:" Special offer for you .. Buy one and get one for FREE ."}

    ]

}
render(){

    let offers=null ;
    offers=this.state.offers.map((offer=>{

        return <Offers
        key={offer.offerId}
        offerName={offer.offerName}
        offerImg={offer.offerImg}
        offerDescrip={offer.offerDescrip} />

    }))
    return (
       
<div>
        <div className="App">
        <header className="header">  <h2>Grill Mark Resturant </h2> <img src="data:image/png;base64,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"
         alt="logo" style={{width:"100px"  ,
          height:"100px",border:"0"}} ></img>
       <nav className="topnav" >
      <Link  className ="topnav" to="/Menu/"  exact >Menu</Link>
            <Link className="topnav" to= {{ pathname:'/Offers'} } > Offers</Link>
            <Link className="topnav" to={{pathname:'./FeedBack'}} > FeedBack</Link>
            <Link className="topnsv" to={{pathname: './AddNewItemToList'}}>Add Order </Link>
       </nav>
        </header> </div>


        <section>
    {<Menu/>}
</section>

        <section>
<div className="App">{<AddNewItemToList/>}</div>

</section>


<section>
    <div className="App"> 
   {offers}
   </div>
</section>

  

        <Switch>
   {this.state.auth?  <Route  path="/Offers"   Component={Offers}/>:null}
<Route  path="/MyMenu"   Component={Menu}/> 
<Route path="/FeedBack"    component={FeedBack} />
<Route path="/AddNewItemToList"    component={AddNewItemToList} />

</Switch>





<section>
<div class="footer">
   <label>contact us:  <br/>
   <a href="https://web.facebook.com/grillmark/">
  <img src="https://www.bankingtech.com/files/2016/06/Facebook.png" alt="Facebook" style={{width:"30px" ,height:"30px",border:"0"}}></img>
</a>

<a href="https://www.instagram.com/grillmarkjo/?hl=en">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2e0hPXUaXAfmmnMRf_5WpGfHPlAN2VLiHiHVUEaMTlLzVpDR" alt="Instagram" style={{width:"30px" ,height:"30px",border:"0"}}></img>
</a>

        </label>  <br/>      


        <label>Direction to  our location :</label> <br/>
        <a href="https://www.google.com/maps/place/Grill+Mark/@32.5403794,35.868671,15z/data=!4m5!3m4!1s0x0:0x30df2a54be69eb57!8m2!3d32.5403794!4d35.868671" >
            <img src="https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/map_pin_1.ashx?mw=620&mh=408"  alt="Direction" style={{width:"45px" ,height:"55px",border:"0"}}></img>
        </a>
        </div>
        </section>
        </div>
    )
}


}

export default View ;