import React, { useState } from "react";
import "../components/styles/shippingForm.css";
import { Country, State } from "country-state-city";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/layout/CheckouSteps";
import { saveShippingInfo } from "../store/actions/cart-actions";

const Shipping = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/order/confirm");
  };

  return (
    <>
      <div style={{marginTop:"5%", font: 'Poppins'}}><CheckoutSteps activeStep={0}/></div>
     

      
      <div className="shippingForm" style={{marginTop:"5%"}}>
        <form className="productForm" onSubmit={shippingSubmit}>
          <div className="createShippingForm">
            <div
              className="heading"
              style={{ marginLeft: -50, marginTop: -20 }}
            >
              <h1 style ={{fontWeight: '400'}}>Shipping Details</h1>
            </div>
            <div className="shipInput">
              <input
                type="text"
                placeholder="Address"
                className="inputField"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
              />
            </div>
            <div className="shipInput">
              <input
                type="text"
                placeholder="City"
                className="inputField"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="shipInput">
              <input
                type="number"
                placeholder="Pincode"
                className="inputField"
                id="pincode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="shipInput">
              <input
                type="number"
                placeholder="Phone Number"
                className="inputField"
                id="phone"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="shipInput">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="inputField selectOption"
                id="country"
              >
                <option className="dropDown-items">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option
                      key={item.isoCode}
                      value={item.isoCode}
                      className="dropDown-items"
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="shipInput">
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="inputField selectOption"
                id="states"
              >
                <option id="dropDown-items">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option
                      key={item.isoCode}
                      value={item.isoCode}
                      className="dropDown-items"
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <button type="submit" className="continueButton">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Shipping;
