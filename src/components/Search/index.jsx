import React from 'react';
import { useParams } from 'react-router-dom';
import {  useSelector } from "react-redux";
import { SlMinus } from "react-icons/sl";
import { FaPlusCircle } from "react-icons/fa";

const Search = () => {
 const {search,dark} = useSelector((s) => s)
    const {nameSearch} = useParams()
    
    return (
        <div className="search">
              {search.map((el) => (
        <div
          className="card"
          style={{
            background: dark ? "rgba(177, 171, 171, 0.879)" : "white",
          }}
        >
          <img src={el.url} alt="img" width={230} />
          <h3>{el.name}</h3>
          <p>{el.des}</p>
          <h4>{el.price} $</h4>
          <div className="card--add">
            <div className="card--add__quantity">
              <a>
                <SlMinus />
              </a>
              <h3>{el.quantity}</h3>
              <a>
                <FaPlusCircle />
              </a>
            </div>
          </div>
        </div>
      ))}
        </div>
    );
};

export default Search;