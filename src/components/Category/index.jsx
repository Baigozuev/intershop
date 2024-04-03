import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const { products } = useSelector((s) => s);
  let filterCategory = products.filter((el, idx, arr) => {
    return (
      idx ===
      arr.findIndex((e) => {
        return e.category === el.category
      })
    );
});
console.log(filterCategory);
const dispatch = useDispatch()
const sortCategory =(data) => {
    dispatch({type: "SORT_CATEGORY",payload : data})

}
const {dark} =useSelector((s) => s)
  return <div className="category">
    {
        filterCategory.map((el) => (
            <button onClick={() => sortCategory(el)}>{el.category}</button>
        ))
    }
  </div>;
};

export default Category;
