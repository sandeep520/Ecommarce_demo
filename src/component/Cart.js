import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, removeCart } from "../Action/Action";
const Cart = () => {
  const state = useSelector((state) => state);
  console.log("state", state);
  const dispatch = useDispatch();
  const decremnetCart = (item) => {
    console.log("decrememntIn cart");
    dispatch(removeCart(item));
  };
  const incrementCart = (item) => {
    console.log("IncrementCart");
    return dispatch(addCart(item));
  };
  return (
    <>
      <div style={{ marginTop: "10px", textAlign: "start", padding: "10px" }}>
        <Link to="/product" type="button" class="btn btn-primary">
          Back
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        {state.map((item, i) => {
          // console.log(item.cartt);
          return (
            <>
              <tbody key={i}>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => incrementCart(item)}
                    >
                      +
                    </button>
                    <h1>{item.qty}</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => decremnetCart(item)}
                    >
                      -
                    </button>
                  </td>
                  <td>₹{item.qty * item.price}</td>
                  {/* <button onClick={() => deletefromCart(i)}>Delete</button> */}
                </tr>
              </tbody>
            </>
          );
        })}
      </table>

      <div className="container" style={{ textAlign: "right" }}>
        <Link
          to="/check"
          style={{ marginTop: "10px" }}
          type="button"
          class="btn btn-primary"
        >
          Proced To CheckOut
        </Link>
      </div>
    </>
  );
};
export default Cart;
