import React,{useEffect} from 'react'
import './seller.css';
import { useNavigate } from 'react-router-dom';

function SellerHomePage() {
const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("sellerId") !== null) {
      navigate("/sellerhome");
    } else {
      navigate("/seller_login");
    }
  }, []);
  return (
    <div>
      <div className='sellerhomepageimg mt-5 pt-5 text-light'>
        <div className='homepageheading text-center '><div className='fs-1 fw-100'>Sell or Rent your property</div>
          <div className='text-light'>Selling or renting out your property is no longer a tedious task. You can easily sell or rent out a property online with  our Real Estate Portal - realestate.com, List your property with us and we help you find the ideal buyer or tenant quickly and conveniently. Start posting your property by clicking the property type of your choice...</div>
        </div>
        <div>

        </div>

      </div>
      <div className='container p-5'>We are a licenced Real Estate Agency and registered in the Council of Cyprus Real Estate Agents,which is governed by the Cyprus Law.
        With great pleasure we offer you the following property services all over Cyprus in Nicosia,Limassol, Larnaca, Paphos, Paralimni, Ayia Napa and Protaras:
        Sales of properties and rentals of residential real estate ranging from apartments for sale, houses for sale and villas for sale. Also commercial property in Cyprus, ranging from offices, shops, warehouses, restaurants, shopping centers, hotels and other kind of business,all over Cyprus.
        Land - in a wide range of locations ranging from seaside beachfront plots, central city locations and and hill sites! agricultural,farming and industrial plots of land also available.
        Investment Property, Business Opportunities, Joint ventures.
        Custom built properties, such as individual villas, private homes, office buildings, showrooms, factories and warehouses.
        Short and long term rentals and exchange of real estate.
        Renovation and restoration of property.
        Cooperation with overseas agents- developers is always welcome!
        Investia Cyprus real estate agents offers its  services to Purchasers and Tenants free of charge!
        Interior design, and assistance with: buying furniture, household appliances, textiles, garden landscaping  - for free!
        Investia will offer professional assistance for all legal property matters through its associate law firms, property insurance, payment of taxes, registration of companies, and assistance for the application of obtaining a Cyprus residence permit  for those purchasing property,over a certain amount and meet certain criteria.
        We recommend
      </div>
    </div>
  )
}

export default SellerHomePage
