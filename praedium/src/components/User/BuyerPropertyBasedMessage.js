import React, { useState, useEffect } from "react";
import Land from "../Images/Land.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../../baseURL";
import './chat.css'

function PropertiesList({ url }) {
const params = useParams();
  const propertyId = params.id.split('_')[0];
  const sid = params.id.split('_')[1];
  const [msg, setMsg] = useState([]);
  const [imgLeft, setimgLeft] = useState("");
  const [imgRight, setimgRight] = useState("");
  const [reciverName, setreciverName] = useState("");
  const [sendMsg, setSendMsg] = useState({
        buyerId:localStorage.getItem('userId'),
        sellerId:sid,
        propertyId: propertyId,
        message:"",
        messagefrom: "buyer"
    
  });

  const Change = (a) => {
    setSendMsg({ ...sendMsg, [a.target.name]: a.target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    if (sendMsg.message){
        var res = await axiosInstance.post('/message',sendMsg)
    }
  };

  useEffect( ()  => {
    async function fetch() {
        var buyer = await axiosInstance.get('/user/profileView/' + localStorage.getItem("userId"),  {
            headers: {
                "Content-Type": "multipart/form-data",
            },
          });
          setimgRight(url + buyer.data.profile)
    
    
        var seller = await axiosInstance.get('/Seller/profileView/'+sid,  {
            headers: {
                "Content-Type": "multipart/form-data",
            },
          });
    
          setimgLeft(url + seller.data.profile)
          setreciverName(seller.data.firstname+ " " + seller.data.lastname)
    }
    fetch();
    setInterval( async () => {
        var res = await axiosInstance.get('/message/messageListing');
        var temp = [];
        for(var i in res.data) {
            if (res.data[i].buyerId == localStorage.getItem('userId') && res.data[i].sellerId == sendMsg.sellerId && res.data[i].propertyId == sendMsg.propertyId) {
                temp.push(res.data[i]);
                console.log(res.data[i])
            }
            setMsg(temp);
        }
    }, 1000);
  }, []);

  const navigate=useNavigate()
  
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
  {msg.map((msgContainer, index) => (
    msgContainer.messagefrom && msgContainer.messagefrom == 'buyer' ?  <div className="msg right-msg">
    <img
      className="msg-img"
      src={imgRight}
    />
    <div className="msg-bubble">
      <div className="msg-info">
        <div className="msg-info-name">You</div>
        <div className="msg-info-time">{msgContainer.date}</div>
      </div>
      <div className="msg-text">{msgContainer.message}</div>
    </div>
  </div>
  :
  <div className="msg left-msg">
      <img
        className="msg-img"
        src={imgLeft}
      />
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{reciverName}</div>
          <div className="msg-info-time">{msgContainer.date}</div>
        </div>
        <div className="msg-text">
            {msgContainer.message}
        </div>
      </div>
    </div>
  ))}
    
    
  </main>
  <form className="msger-inputarea">
    <input
      type="text"
      className="msger-input"
      placeholder="Enter your message..."
      name="message"
      onChange={Change}
    />
    <button className="msger-send-btn" onClick={send}>
      Send
    </button>
  </form>
</section>

  );
}

export default PropertiesList;
