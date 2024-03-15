import "./Navbar.css";

import LogoImg2 from "../img/newlogo2.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";
import { IconMenu2, IconShoppingCart, IconX } from "@tabler/icons-react";
import logo from '../img/logolence.jpeg'

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const { cartItem } = useContext(CartContext);
  const {open , setopen} =useContext(CartContext);


  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
 setopen(!open)
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <IconX onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            Categorias
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
            lamps
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/4"
          >
            vista producto
          </Link>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${open? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${open? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
           Tu carrito de compras ({cartItem.length})
          </h2>
          <IconX onClick={openCart} />
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={logo}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
               categorias
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/4"
              >
              vista producto
              </Link>
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`hamburger-cart ${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="hamburger-hamb"
              >
                <IconMenu2 />
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;