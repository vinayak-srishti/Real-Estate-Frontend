import React, { useState, useEffect } from "react";
import Land from "../Images/Land.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../../baseURL";

function SellerMessage({url}) {
  const [msg, setMsg] = useState([]);
  const navigate=useNavigate()

  const handleClick = (pid,sid,bid) => {
    navigate('/sellerVeiwChat/'+pid+'_'+sid+'_'+bid);
  }

  useEffect( ()  => {
    async function fetch() {
        var res = await axiosInstance.get('/message/messageListing');
        var temp = [];
        var btemp = [];
        for(var i in res.data) {
            if (res.data[i].sellerId == localStorage.getItem('sellerId')) {
              if (!btemp.includes("buyerId:"+res.data[i].buyerId+"&"+"propertyId:"+res.data[i].propertyId)) {
                var buyer = await axiosInstance.get('/user/profileView/' + res.data[i].buyerId ,  {
                  headers: {
                      "Content-Type": "multipart/form-data",
                  },
                });
                var property = await axiosInstance
                .get("/Seller/property/" + res.data[i].propertyId, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                temp.push(Object.assign(res.data[i],buyer.data,property.data));
              }
              btemp.push("buyerId:"+res.data[i].buyerId+"&"+"propertyId:"+res.data[i].propertyId)
            }
            setMsg(temp);
        }
      }
      fetch();
    },[])
    console.log(msg);

    useEffect(() => {
      if (localStorage.getItem("sellerId") !== null) {
        navigate("/sellermessage");
      } else {
        navigate("/seller_login");
      }
    }, []);

    return (
      <section className="container mt-5 pt-5" >
    {/* <header className="msger-header">
      <div className="msger-header-title">
        <i className="fas fa-comment-alt" /> 
      </div>
      <div className="msger-header-options">
        <span>
          <i className="fas fa-cog" />
        </span>
      </div>
    </header> */}
          {msg && msg.length > 0 ?

    <main className="">
    <h3>Messages</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    {msg.map((msgContainer, index) => (
              <div class="col">
      <div className="card p-1" style={{border:"1px solid black"}}>
        <h4> <span><img style={{height:"75px", width:"75px",borderRadius:'50px'}} src={`${url}${msgContainer.profile}`}/></span>Chat with {msgContainer.firstname + msgContainer.lastname}</h4>
        <div class="card-body">
          <h5 class="card-title me-5">Property <span><img style={{height:"75px", width:"75px",marginLeft:'100px'}}  src={`${url}${msgContainer.pic}`}/></span></h5>
          <span class="card-title">City name : {msgContainer.city}   </span> 
           <p>District : {msgContainer.district}</p>
            <p>Price : {msgContainer.price} /-</p>
          <div></div>
          <button className="btn btn-primary" onClick={()=>handleClick(msgContainer.propertyId,msgContainer.sellerId, msgContainer.buyerId)} >View Chat</button>
        </div>
      </div>   
      </div> 
    ))}
    </div>
      
      
    </main>:<h6 className="text-center">No Messages Found</h6>}
    
  </section>
  
    );
}

export default SellerMessage