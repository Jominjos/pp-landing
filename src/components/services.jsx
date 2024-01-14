import React from "react";

export const Services = (props) => {
  const handleButtonClick = () => {
    const telLink = `tel:+91 7373379510`;
    window.location.href = telLink;
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="https://media.licdn.com/dms/image/C4D12AQFvR6webwTsKw/article-cover_image-shrink_720_1280/0/1533823206296?e=2147483647&v=beta&t=wZN4Py-PYNTGQa6WCk1HVhivWC8SWcoIYFN1LdI1b9A"
              className="img-responsive"
              alt=""
            />{" "}
          </div>

          <div className="col-xs-12 col-md-6">
            <div id="franchise" className="section-title">
              <h2>Franchise</h2>
              <p>
                Popular properties welcomes you to join hands in franchise and
                assures you monthly minimum income gurantee and refundable
                franchise deposit.
              </p>
              {/* <img src="https://spaces.indiapropertydekho.com/blogs/banner-8-1657520639.jpg"  alt="franchise"
        style={{ maxWidth: '100%', maxHeight: '100%' }}/> */}
              <button
                className="btn btn-custom btn-lg page-scroll"
                onClick={handleButtonClick}
              >
                📞Call
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
