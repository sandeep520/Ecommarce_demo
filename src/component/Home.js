import React from "react";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <div>

    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://as1.ftcdn.net/v2/jpg/04/81/04/26/1000_F_481042622_rPaHQRGjikIG5zM1CiqUGDp799Ca4dN1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Connect to shoppers anytime</h1>
      <h2>Discount and sale yellow banner for black friday</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://as2.ftcdn.net/v2/jpg/04/67/48/29/1000_F_467482943_kLYcRGbxJUpKnDNVMwNkp4bhtsVbUTGH.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Online and In-Store </h1>
      <h2>Bridge the Gap Between Online and In-Store.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://as2.ftcdn.net/v2/jpg/03/58/21/81/1000_F_358218126_JdeQj5fnYgm2ZwY3NCxlWZ4xLdtiRzNa.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>New and Popular Business Apps</h1>
      <h2>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     
    </div>
    </>
  );
};

export default Home;
