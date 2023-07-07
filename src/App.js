import { commerce } from "./lib/commerce";
import "./App.css";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactform from "./components/ContactForm/Contactform";
import About from "./components/Aboutpage/About";
import Checkout from "./components/CheckoutForm/Checkout";
import NetworkDetector from "./Hoc/NetworkDetector";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    // console.log(data);
    console.log(products);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  console.log(products);
  console.log(About);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} setSearchTerm={setSearchTerm} />
        <Switch>
          <Route exact path="/adore-wear">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              searchTerm={searchTerm}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contactform">
            <Contactform />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NetworkDetector(App);
