import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../src/components/styles/table.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import {
  getAdminProduct,
  deleteProduct,
} from "../store/actions/product-actions";
import { useNavigate } from "react-router-dom";
import { deleteProductActions } from "../store/index";
import UpdateProduct from "./UpdateProduct";

const AdminAllProducts = () => {

  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock , setStock] = useState('')
  const [id, setId] = useState('')

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const {  products } = useSelector((state) => state.adminProducts);
  const { isDeleted } = useSelector((state) => state.deleteProduct);

  const onEditHandler = (name, price, stock, id) => {
    setId(id)
    setName(name)
    setPrice(price)
    setStock(stock)
    setEdit(true)
  }

  console.log(products);



  useEffect(() => {
    if (isDeleted) {
      alert.success("Product deleted successfully");
      dispatch(deleteProductActions.deleteProductRequestReset());
      navigate("/admin/dashboard");
    }
    dispatch(getAdminProduct());

  }, [alert, isDeleted, navigate, dispatch]);

  const productHandler = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload()
  };



  return (
    <>

      {!edit ? (
        <div>
        <div className="heading">
          <h1>Products</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </tbody>
          {products.length === 0 ? (
            <p style={{ color: "black" }}>Loading...</p>
          ) : (
            products.map((item) => {
              return (
                <>
                
                  <tbody key={item._id}>
                  <tr>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.Stock}</td>
                    <td>{item.price}</td>
                    <td>
                      <span className="tableicon">
                          <FontAwesomeIcon icon={faPen} onClick = {onEditHandler.bind(null, item.name, item.price, item.Stock, item._id)}/>
                       
                      </span>
                      <span className="tableicon">
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={productHandler.bind(null, item._id)}
                        />
                      </span>
                    </td>
                  </tr>
                </tbody> 
                
                
                </>
                
              );
            })
          )}
        </table>
      </div>
      ): <UpdateProduct name = {name} price={price} stock = {stock} id= {id}/>}


    </>
  );
};

export default AdminAllProducts;
