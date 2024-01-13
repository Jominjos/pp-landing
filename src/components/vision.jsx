import React from 'react'

const Vision = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our vision</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <img src="img/pp-banner2.jpeg" className="img-responsive" alt="" />{" "} */}
            <img src="https://www.smdeveloper.in/images/vision.jpg" className="img-responsive" alt="" />{" "}
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Vision