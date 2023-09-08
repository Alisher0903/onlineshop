import { Route, Routes } from "react-router-dom";
import Category from "../category/Category";
import Product from "../producty/Product";
import Home from "../home/Home";
import Restaurant from "../restaurant/Restaurant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/restaurant" element={<Restaurant/>}/>
      </Routes>
    </>
  );
}

export default App;