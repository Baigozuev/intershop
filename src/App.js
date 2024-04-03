import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddProduct from "./components/AddProduct";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import Basket from "./components/Basket";
import History from "./components/History";

function App() {
  const { dark } = useSelector((s) => s);
  return (
    <div
      className="App"
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/search /: nameSearch" element={<Search />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/history" element={<History />} />


      </Routes>
    </div>
  );
}

export default App;
