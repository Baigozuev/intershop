import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { TbSunLow } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiMoon } from "react-icons/hi";
import { BsFillBasketFill } from "react-icons/bs";
import logo from "../../assets/img/logo.svg";
import { BiHistory } from "react-icons/bi";

const Header = () => {
  const { dark } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="img" onClick={() => nav("/")} />
          </Link>
          <div className="header--search">
            <input type="text" placeholder="Я ищу" />
            <a>
              <FiSearch />
            </a>
          </div>
          <button >add</button>
          <div className="header--icons">
            <Link to={"/addProduct"}>
              <FaCartPlus />
            </Link>
            <Link to={"/basket"}>
              <a>
                {" "}
                <BsFillBasketFill />
              </a>
            </Link>
            <Link to={"/history"}>
              <a>
                {" "}
                <BiHistory/>
              </a>
            </Link>
            {!dark ? (
              <a onClick={() => dispatch({ type: "DARK_MODUL" })}>
                <HiMoon />
              </a>
            ) : (
              <a onClick={() => dispatch({ type: "DARK_MODUL" })}>
                <TbSunLow />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
