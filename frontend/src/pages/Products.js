import React, { useEffect, useState } from "react";
import "../components/styles/Product.css";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/FilterBar/Filter";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../store/actions/product-actions";
import Pagination from "react-js-pagination";

const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword;

  const {loading, products, resultPerPage, productsCount} = useSelector((state) => state.allProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 30000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const setCurrentPageNo = (e) => setCurrentPage(e);
  
  const setPriceHandler = (Price) => setPrice([Price[0], Price[1]]);
  const setCategoryHandler = (category) => setCategory(category);
  const setRatingHandler = (rating) => setRating(rating);

  useEffect(() => {
    dispatch(fetchProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, keyword, currentPage, price, category, rating]);

  return (
    <>
      <Navbar />

      {loading?<p style = {{color:'black'}}>Loading...</p>:<div className="App body">
        <Filter
          onPrice={setPriceHandler}
          onCategory={setCategoryHandler}
          onRating={setRatingHandler}
        />
        <div className="Display">
          <div className="showProduct">
            <h5>Showing results for products</h5>
          </div>
          <div className="product-page">
            {products.map((product) => (
              <div className="product-single">
                <div className="picture">
                  <div className="image">
                    <img src="/images/one.webp" alt="hp_pavillion"></img>
                  </div>
                </div>
                <div className="productinfo_div">
                  <div className="pro_info">
                    <div className="pro_name">
                      <Link className="heading" to={`/product/${product._id}`} style={{color: 'black'}}>
                        {product.name}
                      </Link>
                    </div>

                    <div className="pro_rating">
                      <div className="pro_star_rating">
                        <span className="inline"></span>
                        <span className="outline">
                          4.1
                          <img
                            src="/images/star_image.png"
                            alt="star"
                            className="star"
                          ></img>
                        </span>
                      </div>
                      <div className="pro_num_rating">
                        <span className="num_rate">24 Ratings</span>
                        <span style={{ color: "#878787" }}> & </span>
                        <span className="num_review">5 Reviews</span>
                      </div>
                    </div>
                    <div className="pro_list">
                      <ul>
                        <li>Ultra HD (4K) 3840 x 2160 Pixels</li>
                        <li>40W Speaker Output</li>
                        <li>120 Hz Refresh Rate</li>
                        <li>4 x HDMI | 3 x USB</li>
                        <li>
                          1 Year LG India Comprehensive Warranty and Additional
                          1 Year Warranty is Applicable on Panel/Module
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_price">
                    <div className="price_num_discount">₹{product.price}</div>
                    <div className="price_num_actual">
                      <del className="crosspri">₹1,00,000</del>
                      <span className="pri_per_discount">43% off</span>
                    </div>
                    <div className="delivery">Free delivery</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      </div>}
    </>
  );
};
export default Product;
