import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseURL";
import { useNavigate, useParams } from "react-router-dom";

function PropertyDetail({ url }) {
  const [propertyListings, setPropertyListings] = useState([]);

  const params = useParams();
  const propertyId = params.propertyId;


  console.log(propertyId);
  useEffect(() => {
    async function fetchPropertyListings() {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.get(
          "Seller/property/" + propertyId,
          config
        );
        console.log(response.data);
        setPropertyListings([response.data]); // Update state with fetched data
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPropertyListings(); // Call the async function
  }, []);

  
  

//   console.log(lat, lon);

  const navigate = useNavigate();
  const handleMessage = (sid) => {
    navigate(`/buyerPropertyBasedMessage/${propertyId + "_" + sid}`);
  };
  const HandleOrder = (sid) => {
    navigate(`/payment/${propertyId + "_" + sid}`);
  };

  return (
    <div className="pt-5">
      <div className=" container mt-5 pt-5" style={{boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",padding:'5%'}}>
        {propertyListings && propertyListings.length > 0 ? (
          <div>
            {propertyListings.map((listing, index) => (
              <div className="row">
                <div className="col-3 " >
                  {" "}
                  <img
                    src={`${url}${listing.pic}`}
                    class="card-img-top text-center"
                    alt="..."
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <div className="mt-5">
                  <button
                      onClick={() =>
                        HandleOrder(listing.sellerid)
                      }
                      className="btn btn-primary"
                    >
                      Order
                    </button>
                    <button
                      onClick={() =>
                        handleMessage(listing.sellerid)
                      }
                      className="btn btn-primary ms-5"
                    >
                      Message
                    </button>
                  </div>
                </div>
                <div className="col-3"><h5 class="card-title mb-3">{listing.city}</h5>
                <p class="card-text">Landmark : {listing.landmark}</p>
                <p class="card-text">Area : {listing.area}</p>
                <p class="card-text">District : {listing.district}</p>
                <p class="card-text">Longitude : {listing.log}</p>
                <p class="card-text">Latitude : {listing.lat}</p>
                <p class="card-text">features : {listing.features}</p>
                <p class="card-text">sellerEmail : {listing.sellerEmail}</p>
                <p class="card-text">type: {listing.type}</p>{" "}
                <p class="card-text">Amount : {listing.price}/-</p>{" "}</div>
                <div className="col-6"  style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px"}}>
                  {" "}
                  <iframe
                        id="iframeId"
                        src={`https://maps.google.com/maps?q=${propertyListings[0].lat},${propertyListings[0].log}&hl=es;&output=embed`}
                        height="400px"
                        width="100%"
                   ></iframe>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h6 className="text-center">No Properties Found</h6>
        )}
      </div>
    </div>
  );
}

export default PropertyDetail;
// <div class="col">
//                 <div class="card">
//
//                   <div class="card-body">
//
//                     
//                   </div>
//                 </div>
//               </div>
