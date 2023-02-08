import React, { useState } from "react";
import "../components/styles/AdminCreateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../store/actions/product-actions";
import {useNavigate} from 'react-router-dom'

const AdminCreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const show = useSelector((state) => state.FormShow.show);


  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [Stock, setStock] = useState('');



  const onSubmitHandler = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price,
      category,
      Stock,
    }
    dispatch(createProduct(productData));
    setName('')
    setPrice('')
    setCategory('')
    setDescription('')
    setStock('')
    navigate("/admin/products")
  };

  return (
    <>
      <div className="completeForm" style={{ left: show ? "52%" : "37%" }}>
        <form className="productForm" onSubmit={onSubmitHandler}>
          <div className="createProductForm">
            <div
              style={{ marginLeft: -40, marginTop: -20 }}
              className="heading"
            >
              <h1>Add Product</h1>
            </div>
            <div className="divInput">
              <input
                onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="Product Name"
                className="inputField"
                id="name"
                value={name}
              />
            </div>
            <div className="divInput">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                className="inputField"
                id="price"
                value={price}
              />
            </div>
            <div className="divInput">
              <input
                onChange={e => setDescription(e.target.value)}
                type="text"
                placeholder="Product Discription"
                className="inputField"
                id="description"
                value={description}
              />
            </div>
            <div className="divInput">
              <input
                onChange={e => setCategory(e.target.value)}
                type="text"
                placeholder="Category"
                className="inputField"
                id="category"
                value={category}
              />
            </div>
            <div className="divInput">
              <input
                onChange={e => setStock(e.target.value)}
                type="number"
                placeholder="Stock"
                className="inputField"
                id="stock"
                value={Stock}
              />
            </div>
            <button type="submit" className="createButton">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateProduct;
