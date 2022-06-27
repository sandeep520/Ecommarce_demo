import React, { useState, useEffect } from "react";
// import { addCart } from "./Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams,useNavigate } from "react-router";
import { addCart } from "../Action/Action";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const [sdata, setData] = useState([]);
    const dispatch=useDispatch();
    const addtoCart=(Product)=>{dispatch(addCart(Product))};
    // console.log(addCart)

  useEffect(() => {
    //console.log("useeffect");
    const getdata = async () => {
      console.log("API");
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response)
      setData(await response.json());
      localStorage.setItem("data",JSON.stringify(response))
    };
    getdata();
  }, []);
  console.log("Data", sdata);

  // const history = useNavigate()
  // const onSubmit = (Product) => {
  //   dispatch(addCart(Product))
  //   history('/cart')
  // }

  return (
    <>
      <h1>Product Details</h1>

      <div className="col-md-6">
        <img
          className=""
          src={sdata.image}
          style={{ height: "400px", width: "400px" }}
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{sdata.category}</h4>
        <h1 className="display-5">{sdata.title}</h1>
        {/* <p className="lead fw-bolder">
          Reting {sdata.rating && sdata.reting.rate}
          <i className="fa fa-start"></i>
        </p> */}
        <h3 className="display-6 fw-bold my-4">{sdata.price}</h3>
        <p className='lead'>{sdata.description}</p>
                  <button className='btn btn-outline-dark' onClick={()=>addtoCart(sdata)}>
                      Add To Cart
                  </button>
                  <Link to='/cart' className='btn btn-outline-dark '>
                      Go to Cart
                  </Link>
      </div>
    </>
  );
};



export default ProductDetails;
