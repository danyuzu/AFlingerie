import "../components/ProudProducts.css";
import CategoriesHeader from "../components/CategoriesHeader";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;