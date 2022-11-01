import React from "react";
import navIcon1 from '../assets/img/nav-Icon1.png';
import navIcon2 from '../assets/img/nav-Icon2.png';
import navIcon3 from '../assets/img/nav-Icon3.png';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
        {/* Column1 */}
        <div className="col">
        <a><img className="icon1" src={navIcon1} alt="" /></a>
            <h4 className="add">Add your clinic</h4>
            <ui className="list-unstyled">
              <li className="add2">let them know your clinic</li> 
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
          <a><img className="icon1" src={navIcon2} alt="" /></a>
            <h4 className="paper">Paperless Records</h4>
            <ui className="list-unstyled">
              <li className="paper2">Manage your pet information</li>   
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <a><img className="icon1" src={navIcon3} alt="" /></a>
            <h4 className="easy">Easy Communication</h4>
            <ui className="list-unstyled">
              <li className="easy2">Message available clinics</li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;