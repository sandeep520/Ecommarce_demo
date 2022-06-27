import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Products = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loding, setLoding] = useState(data);

  let cartData = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      console.log(response);
      if (cartData) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoding(false);
      }
      return () => {
        cartData = false;
      };
    };
    getProducts();
    
  }, []);

  const Loding = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton style={{ height: "350px" }} />
        </div>
        <div className="col-md-3">
          <Skeleton style={{ height: "350px" }} />
        </div>
        <div className="col-md-3">
          <Skeleton style={{ height: "350px" }} />
        </div>
        <div className="col-md-3">
          <Skeleton style={{ height: "350px" }} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    console.log(updateList);
    setFilter(updateList);
  };

  

  const ShowProducts = () => {
    return (
      <>
       
        <div className="buttons">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Man's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellary{" "}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electicronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                  style={{ height: "250px" }}
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p class="card-text">{product.price}</p>
                  <Link to={`/products/${product.id}`} class="btn btn-primary">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-border text-center font-bold">
              Our Product's
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loding ? <Loding /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
