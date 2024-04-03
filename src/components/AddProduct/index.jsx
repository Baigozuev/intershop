import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setPriductName] = useState("");
  const [productDes, setPriductDes] = useState("");
  const [productPrice, setPriductPrice] = useState("");
  const [productCategory, setPriductCategory] = useState("");
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();


  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };
  const addProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productDes.trim() === "" ||
      productPrice.trim() === "" ||
      productCategory.trim() === ""
    ) {
      alert(404);
    } else {
      let newProduct = {
        id: products.length ? products [products.length - 1].id + 1 : 1,
        url: productImg,
        name: productName,
        des: productDes,
        price: productPrice,
        category: productCategory,
        quantity: 1,
      };
      dispatch({ type: "ADD_PRODUCT", payload: newProduct });
      // setProductImg("");
      setPriductName("");
      setPriductDes("");
      setPriductPrice("");
      setPriductCategory("");
    }
  };
  
  const nav = useNavigate();
  return (
    <div id="add">
      <div className="container">
        <div className="add">
          <input type="file" className="add--file" onChange={onChange} />
          {/* <input
            // onChange={(e) => setProductImg(e.target.value)}
            type="img"
            placeholder="Product img"
            className="add--input"
          /> */}
          <input
            onChange={(e) => setPriductName(e.target.value)}
            value={productName}
            type="text"
            placeholder="Product name"
            className="add--input"
          />
          <input
            onChange={(e) => setPriductDes(e.target.value)}
            value={productDes}
            type="text"
            placeholder="Product description"
            className="add--input"
          />
          <input
            onChange={(e) => setPriductPrice(e.target.value)}
            value={productPrice}
            type="text"
            placeholder="Product price"
            className="add--input"
          />
          <input
            onChange={(e) => setPriductCategory(e.target.value)}
            value={productCategory}
            type="text"
            placeholder="Product category"
            className="add--input"
          />
          <button onClick={() => addProduct(nav("/"))}>add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
