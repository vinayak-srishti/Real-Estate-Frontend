import React from "react";
import "./landingpage.css";
import Land from "./Images/Land.jpg"

function LandingPage() {
  return (
    <div>
      <div className="landingimg">
        <div className="landingpagecontent">
          <div className="mt-5 pt-5 ms-5 fs-1">
            <i>
              India's only real estate platform with 10,000+ highly rated
              sellers
            </i>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 mt-5">
              <h6>100% verified listings</h6>
              <h6>Real property picture</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-5">
        <b>We</b> are a licenced Real Estate Agency and registered in the
        Council of Cyprus Real Estate Agents,which is governed by the Cyprus
        Law. With great pleasure we offer you the following property services
        all over Cyprus in Nicosia,Limassol, Larnaca, Paphos, Paralimni, Ayia
        Napa and Protaras: Sales of properties and rentals of residential real
        estate ranging from apartments for sale, houses for sale and villas for
        sale. Also commercial property in Cyprus, ranging from offices, shops,
        warehouses, restaurants, shopping centers, hotels and other kind of
        business,all over Cyprus. Land - in a wide range of locations ranging
        from seaside beachfront plots, central city locations and and hill
        sites! agricultural,farming and industrial plots of land also available.
        Investment Property, Business Opportunities, Joint ventures. Custom
        built properties, such as individual villas, private homes, office
        buildings, showrooms, factories and warehouses. Short and long term
        rentals and exchange of real estate. Renovation and restoration of
        property. Cooperation with overseas agents- developers is always
        welcome! Investia Cyprus real estate agents offers its services to
        Purchasers and Tenants free of charge! Interior design, and assistance
        with: buying furniture, household appliances, textiles, garden
        landscaping - for free! Investia will offer professional assistance for
        all legal property matters through its associate law firms, property
        insurance, payment of taxes, registration of companies, and assistance
        for the application of obtaining a Cyprus residence permit for those
        purchasing property,over a certain amount and meet certain criteria. We
        recommend
      </div>
      <section><div className='' style={{height:'400px'}}>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{height:'400px'}}>
                    <div class="carousel-inner carousel-images">
                        <div class="carousel-item active c-item" data-bs-interval="10000">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                        <div class="carousel-item c-item" data-bs-interval="2000">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                        <div class="carousel-item c-item">
                            <img src={Land} class="d-block w-100 c-img" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div></section>
    </div>
  );
}

export default LandingPage;
