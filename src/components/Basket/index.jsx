import React, { useState } from "react";
import { SlMinus } from "react-icons/sl";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/img/loader.svg";
import pustoi from "../../assets/img/pustoi.webp";
import { GrLocation } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sucessImg from "../../assets/img/success.png";

const Basket = () => {
  const { basket, modal, history } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [chek, setChek] = useState(false);
  const [remuve, setRemuve] = useState(false);
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  let totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  const addressError = () => {
    toast.error("🦄 укажите адрес!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const zakaz = () => {
    if (address.trim() === "") {
      addressError();
    } else {
      dispatch({ type: "MODAL" });
    }
  };
  const confirum = () => {
    setChek(true);
    setTimeout(() => {
      setSuccess(true);
    }, 2000);
  };
  
  let currentDate = new Date();
  // console.log(currentDate.getFullYear());
  // console.log(currentDate.getMonth());
  // console.log(currentDate.getDate());
  // console.log(currentDate.getHours());
  // console.log(currentDate.getMinutes());
  // console.log(currentDate.getSeconds());

  const close = () =>{
    let newHistory = {
      id: history.length ? history[history.length - 1].id + 1 : 1,
      title: address,
      fullYear: currentDate.getFullYear(),
      month:currentDate.getMonth(),
      date:currentDate.getDate(),
      hours: currentDate.getHours(),
      minutes:currentDate.getMinutes(),
      seconds:currentDate.getSeconds()
    }
    dispatch({ type: "MODAL" });
    dispatch({ type: "HISTORY",payload: newHistory });
    setChek(false);
    setAddress("");
    setSuccess(false)
  }
  console.log(history,"history");
  return (
    <div id="basket">
      <div
        className="bg"
        onClick={() => dispatch({ type: "MODAL" })}
        style={{
          display: modal ? "block" : "none",
        }}
      ></div>
      <div
        className="bg"
        onClick={() => setRemuve(false)}
        style={{
          display: remuve ? "block" : "none",
        }}
      ></div>
      <div className="container">
        {basket.length ? (
          <>
            <div className="basket">
              <div className="basket--product">
                {basket.map((el) => (
                  <div className="card">
                    <img src={el.url} alt="img" />
                    <h1>{el.name}</h1>
                    <div className="card--add">
                      <h4>{el.price * el.quantity} сом</h4>
                      <div className="card--add__quantity">
                        <a
                          onClick={() =>
                            dispatch({ type: "QUAN_MINUS", payload: el })
                          }
                        >
                          <SlMinus />
                        </a>
                        <h3>{el.quantity}</h3>
                        <a
                          onClick={() =>
                            dispatch({ type: "QUAN_PLUS", payload: el })
                          }
                        >
                          <FaPlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="basket--block">
                <div className="basket--block__commit">
                  <div className="">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      type="text"
                      placeholder="  Комментарий к заказу..."
                    />
                    <div className="basket--block__commit--buttons">
                      <button className="basket--block__commit--buttons__left">
                        Ок{" "}
                      </button>
                      <button className="basket--block__commit--buttons__right">
                        Отмена
                      </button>
                    </div>
                  </div>
                  <div className="basket--block__commit--clear">
                    <button
                      onClick={() => nav("/")}
                      className="basket--block__commit--clear__left"
                    >
                      Добавить еще
                    </button>
                    <button
                      onClick={() => {
                        setRemuve(true);
                        window.scroll(0, 0);
                      }}
                      className="basket--block__commit--clear__right"
                    >
                      Очистить корзину
                    </button>
                  </div>
                </div>
                <div className="basket--block__commit--total">
                  <h1>Общая сумма</h1>
                  <div className="basket--block__commit--total__price">
                    <h2>
                      <span>{totalPrice} $</span>
                    </h2>
                    <button
                      onClick={() => {
                        zakaz();
                        window.scroll(0, 0);
                      }}
                      className="basket--block__commit--total__price--btn"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal"
              style={{
                display: modal ? "block" : "none",
              }}
            >
              <a
                onClick={() => close()}
                style={{
                  display: modal ? "block" : "none",
                }}
              >
                <RxCross1 />
              </a>
              {!chek ? (
                <div className="modal--text">
                  <h1>
                    {address} <GrLocation />
                  </h1>
                  <h1>Вы подтверждаете свой adres?</h1>
                  <button
                    onClick={() => confirum()}
                    className="modal--text__btn"
                  >
                    Подтверждаю
                  </button>
                </div>
              ) : (
                <div className="modal--chek">
                  <h1>
                    {success
                      ? "Ваш заказ получен, курьер будет у вас дома примерно 20 минут"
                      : "Ваш заказ получен,просим подождать..."}
                  </h1>
                  {success ? (
                    <img src={sucessImg} alt="img" width={100} />
                  ) : (
                    <img src={loader} alt="img" width={100} />
                  )}
                </div>
              )}
            </div>
            <div
              className="modulRemuve"
              style={{
                display: remuve ? "block" : "none",
              }}
            >
              <a
                onClick={() => {
                  setRemuve(false);
                }}
                // style={{
                //   display: remuve ? "block" : "none",
                // }}
              >
                <RxCross1 />
              </a>
              <div className="modal--text">
                <h1>Вы точно хотите очистить корзину?</h1>
                <button
                  className="modal--text__btn"
                  onClick={() => {
                    setRemuve(false);
                    dispatch({ type: "REMUVE__ALL" });
                  }}
                >
                  Очистить
                </button>
              </div>
            </div>
          </>
        ) : (
          <img
            src={pustoi}
            alt="img"
            width={900}
            style={{
              marginLeft: "200px",
            }}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Basket;
