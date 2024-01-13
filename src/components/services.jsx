import React from "react";

export const Services = (props) => {

  const handleButtonClick = () => {
    const telLink = `tel:+918667554840`;
    window.location.href = telLink;
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Franchise</h2>
          <p>
          எங்கள் நிறுவனத்துடன் இணைந்து பணியாற்ற.
          </p>
           <button
                 
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleButtonClick}
                >
                  📞Call
                </button>{" "}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
