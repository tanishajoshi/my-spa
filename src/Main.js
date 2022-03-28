import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Booking from "./Booking";
import Shop from "./Shop";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <h1>Tanisha's Yoga Studio</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Benefits</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/booking">Book Consultation</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>

          </ul>
          <div className="content">
            <Routes>
              <Route path="/stuff" element={<Stuff/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/booking" element={<Booking/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
              
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;