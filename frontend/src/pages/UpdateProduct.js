import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateProduct } from '../store/actions/product-actions';


const UpdateProduct = (props) => {

  const dispatch = useDispatch()

  const show = useSelector((state) => state.FormShow.show);


  const [productData, setProductData] = useState({
    name: props.name,
    price: props.price,
    Stock: props.stock
  })

  const onChangeInputHandler = (e) => {
    setProductData({
      ...productData,
      [e.target.id]: e.target.value
    })
  }

  console.log(productData);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct(props.id, productData))
    window.location.reload()
  };


  return (
    <>
      <div className="UsercompleteForm" style={{ left: show ? "52%" : "37%" }}>
        <form className="productForm" onSubmit={onSubmitHandler}>
          <div className="createUserForm">
            <div
              style={{ marginLeft: -40, marginTop: -20 }}
              className="heading"
            >
              <h1>Edit Product</h1>
            </div>
            <div className="divInput">
              <input
                defaultValue={props.name}
                type="text"
                placeholder="product name"
                className="inputField"
                id="name"
                onChange={onChangeInputHandler}
              />
            </div>
            <div className="divInput">
              <input
                onChange={onChangeInputHandler}
                type="number"
                placeholder="total stock"
                className="inputField"
                id="Stock"
                defaultValue={props.stock}
              />
                      </div>
                      <div className="divInput">
              <input
                onChange={onChangeInputHandler}
                type="number"
                placeholder="price"
                className="inputField"
                id="price"
                defaultValue={props.price}
                
              />
            </div>
            <button type="submit" className="createButton">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </>
    )
}

export default UpdateProduct