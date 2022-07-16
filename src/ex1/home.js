import React from "react";
import "./home.css";
import Header from "./header";
import Footer from "./footer";
import Banner from "./banner";
import Item from "./item";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner/>
        <Item/>
        <Footer />
      </div>
    );
  }
}

export default Home;
