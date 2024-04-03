import React from "react";
import { SlMinus } from "react-icons/sl";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { dark, basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const addToBasket = (data) => {
    let res1 = [...basket, data];
    localStorage.setItem("bas", JSON.stringify(res1));

    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };
  let somBas = basket.some((some) => some.id === el.id);
  return (
    <div
      className="card"
      style={{
        background: dark ? "rgba(177, 171, 171, 0.879)" : "white",
      }}
    >
      <img src={el.url} alt="img" width={230} />
      <h3>{el.name}</h3>
      <p>{el.des}</p>
      <h4>{el.price * el.quantity} $</h4>
      <div className="card--add">
        <div className="card--add__quantity">
          <a onClick={() => dispatch({ type: "COUNT_MINUS", payload: el })}>
            <SlMinus />
          </a>
          <h3>{el.quantity}</h3>
          <a onClick={() => dispatch({ type: "COUNT_PLUS", payload: el })}>
            <FaPlusCircle />
          </a>
        </div>
        {!somBas ? (
          <button onClick={() => addToBasket(el)}>В корзину</button>
        ) : (
          <button onClick={() => nav("/basket")}>basket</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
