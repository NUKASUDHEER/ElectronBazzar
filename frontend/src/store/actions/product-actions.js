import { allProductsActions } from "../index";
import {
  singleProductSliceActions,
  updateProductActions,
  craeteProductActions,
  adminProductActions,
  deleteProductActions,
} from "../index";
import {
  newReviewActions,
  allReviewActions,
  deleteReviewActions,
} from "../index";

const token = localStorage.getItem("token");

export const fetchProducts = (
  keyword = "",
  currentPage = 1,
  price = [0, 50000],
  category,
  ratings = 0
) => {
  return async (dispatch) => {
    // console.log(keyword);
    dispatch(allProductsActions.getAllProductRequest());
    const sendRequest = async () => {
      let url;
      if (category)
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte] = ${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      else
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte] = ${price[1]}&ratings[gte]=${ratings}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      });
      const data = await response.json();
      return data;
    };

    const data = await sendRequest();
    console.log(data);
    dispatch(allProductsActions.getAllProductsSucces(data));
    if (!data.success)
      dispatch(allProductsActions.getAllProductsFail(data.message));
  };
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch(singleProductSliceActions.singleProductRequest());
  const sendRequest = async () => {
    let url;

    url = `http://localhost:4000/api/v1/product/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json", token },
    });
    const data = await response.json();
    return data;
  };
  const data = await sendRequest();
  if (data.success)
    dispatch(singleProductSliceActions.setSingleProductSuccess(data.product));
  else dispatch(singleProductSliceActions.setSingleProductFail(data.message));
};

export const getAdminProduct = () => async (dispatch) => {

    dispatch(adminProductActions.adminProductRequest());

    const response = await fetch(
      "http://localhost:4000/api/v1/admin/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      })
  
    const data = await response.json();
    console.log(data);
    if (data.success)
      dispatch(adminProductActions.adminProductRequestSuccess(data.products));
    else
      dispatch(
        adminProductActions.adminProductRequestFail(data.message)
      );
  
};

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch(craeteProductActions.newProductRequest());
    console.log(productData);
    const response = await fetch(
      `http://localhost:4000/api/v1/admin/product/new`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", token },
        body: JSON.stringify(productData),
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch(craeteProductActions.newProductRequestSuccess(data));
  } catch (error) {
    dispatch(
      craeteProductActions.newProductRequestFail(error.response.data.message)
    );
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  console.log(id, productData);

  dispatch(updateProductActions.updateProductRequest());

  const response = await fetch(
    `http://localhost:4000/api/v1/admin/product/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", token },
      body: JSON.stringify(productData),
    }
  );
  const data = await response.json();
  console.log(data);
  if (data.success)
    dispatch(updateProductActions.updateProductSuccess(data.success));
  else updateProductActions.updateProductFail(data.message);
};

export const deleteProduct = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch(deleteProductActions.deleteProductRequest());
    const response = await fetch(
      `http://localhost:4000/api/v1/admin/product/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", token },
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.success)
      dispatch(deleteProductActions.deleteProductRequestSucess(data.success));
    else dispatch(deleteProductActions.deleteProductRequestFail(data.message));
  } catch (error) {
    dispatch(
      deleteProductActions.deleteProductRequestFail(error.response.data.message)
    );
  }
};

export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch(newReviewActions.newReviewRequest());
    console.log(reviewData);
    const response = await fetch(`http://localhost:4000/api/v1/review`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", token },
      body: JSON.stringify(reviewData),
    });

    const data = await response.json();
    console.log(data);
    dispatch(newReviewActions.newReviewSuccess(data.success));
  } catch (error) {
    dispatch(newReviewActions.newReviewFail(error.response.data.message));
  }
};

export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch(allReviewActions.allReviewRequest());

    const response = await fetch(
      `http://localhost:4000/api/v1/reviews?id=${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      }
    );
    const data = await response.json();
    dispatch(allReviewActions.allReviewSuccess(data.reviews));
  } catch (error) {
    dispatch(allReviewActions.allReviewFail(error.response.data.message));
  }
};

export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch(deleteReviewActions.deletReviewRequest());

    const response = await fetch(
      `http://localhost:4000/api/v1/reviews?id=${reviewId}&productId=${productId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token },
      }
    );

    const data = await response.json();
    dispatch(deleteReviewActions.deleteReviewSuccess(data.success));
  } catch (error) {
    dispatch(deleteReviewActions.deleteReviewFail(error.response.data.message));
  }
};
