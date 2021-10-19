import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/booking/Booking";
import Header from "./components/header/Header";
import Home from "./components/home/home/Home";
import Login from "./components/login/login/Login";
import Register from "./components/login/register/Register";
import Private from "./components/login/privateRoute/Private";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Private path="/booking/:id">
              <Booking></Booking>
            </Private>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
