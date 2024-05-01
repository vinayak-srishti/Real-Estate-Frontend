import React, { useEffect, useState } from 'react'

function PropertyDetail() {

  const lat  = 9.0056
  const lon = 76.7831
  const [x,setx] = useState('')

  console.log(lat, lon);
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    setx( (
      <iframe
        id="iframeId"
        src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
        height="500px"
        width="100%"
      ></iframe>
    ));
  },[]);

  return (
    <div className='pt-5'>
      <div style={{ margin: "50px 30px" }}>
        {x}
      </div>
    </div>
  )
}

export default PropertyDetail
