 
// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
// import FacebookIcon from "@material-ui/icons/Facebook"


 

 const TopNavMenu = () => {

  return (
 
 
 <div
        style={{ zIndex: 99999 }}
        className="container-fluid backGroundColor-topNav fixed-top "
      >
        <div className="container text-white">
          <div className="row">
            <div className="col d-flex-justify-content-start align-items-center service-area text-shadow-1 pt-1">
              <span className="headerLink"><Link  to="/ipswich-air-conditioning">Ipswich</Link></span> | <span className="headerLink"><Link  to="/brisbane-air-conditioning">Brisbane</Link></span> | <span className="headerLink"><Link  to="/gold-coast-air-conditioning">Gold Coast</Link></span>
            </div>

            <div
              style={{ PaddingBottom: 5 }}
              className="col-4 d-flex justify-content-end phone-nav"
            >
              <a
                style={{ fontSize: 14 }}
                className="call-icon d-flex align-items-center text-shadow-1 btn-- btn-green-- my-1 px-3 "
                href="tel:0404602657"
              >
                <span style={{ fontSize: 22 }} className="material-icons">
                  local_phone
                </span>{" "}
                <span
                  className="phone-num fw-600"
                  style={{ whiteSpace: `nowrap` }}
                >
                  Call 0404 602 657
                </span>
              </a>
            </div>
          </div>
        </div>
    </div>
     )
}

export default TopNavMenu