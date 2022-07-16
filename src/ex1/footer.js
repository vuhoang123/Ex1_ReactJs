import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2022
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
