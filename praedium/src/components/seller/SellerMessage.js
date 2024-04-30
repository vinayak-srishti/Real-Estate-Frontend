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
                .get("/Seller/property" + res.data[i].propertyId, {
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

    return (
      <section className="msger">
    <header className="msger-header">
      <div className="msger-header-title">
        <i className="fas fa-comment-alt" /> 
      </div>
      <div className="msger-header-options">
        <span>
          <i className="fas fa-cog" />
        </span>
      </div>
    </header>
    <main className="msger-chat">
    <h1>Message</h1>
    {msg.map((msgContainer, index) => (
      <div style={{border:"1px solid black"}}>
        <h2>Chat with {msgContainer.firstname + msgContainer.lastname} <span><img style={{height:"75px", width:"75px"}} src={`${url}${msgContainer.profile}`}/></span></h2>
        <div class="card-body">
          <h5 class="card-title">Property <span><img style={{height:"75px", width:"75px"}} src={`${url}${msgContainer.pic}`}/></span></h5>
          <span class="card-title">name : {msgContainer.city}   </span> 
          <span class="card-text">  price : {msgContainer.price}</span>
          <span><button onClick={()=>handleClick(msgContainer.propertyId,msgContainer.sellerId, msgContainer.buyerId)} >View Chat</button></span>
        </div>
      </div>    
    ))}
      
      
    </main>
    
  </section>
  
    );
}

export default SellerMessage