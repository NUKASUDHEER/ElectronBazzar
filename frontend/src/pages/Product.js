import React, { useState, useEffect } from "react";
import classes from "../components/styles/Product.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAlert } from "react-alert";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import {
  faStar,
  faIndianRupeeSign,
  faStarHalfStroke,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import RecomendedProducts from "../components/layout/RecomendedProducts";
import IndividualReview from "../components/layout/IndividualReview";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/actions/product-actions";
import { singleProductSliceActions } from "../store/index";
import { addItem } from "../store/actions/cart-actions";
import Navbar from "../components/Navbar/Navbar";

import { newReview } from "../store/actions/product-actions";
import { newReviewActions } from "../store/index";

function Product() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const { product, error, loading } = useSelector(
    (state) => state.singleProduct
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(singleProductSliceActions.setsproductReset());
    }
    if (success) {
      newReviewActions.newReviewReset();
    }
    if (reviewError) {
      newReviewActions.newReviewReset();
    }
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id, error, alert, success, reviewError]);

  const rating = {
    size: 20,
    count: 5,
    color: "grey",
    activeColor: "orange",
    value: product.ratings,
    a11y: true,
    isHalf: true,
    emptyIcon: <FontAwesomeIcon icon={faStar} />,
    halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
    filledIcon: <FontAwesomeIcon icon={faStar} />,
  };

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [Rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickHandler1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
  };
  const clickHandler2 = () => {
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
  };
  const clickHandler3 = () => {
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
  };
  const clickHandler4 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
  };

  const increaseQuantity = () => {
    if (quantity >= product.Stock) return;
    const q = quantity + 1;
    setQuantity(q);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    const q = quantity - 1;
    setQuantity(q);
  };

  const addItemToCartHandler = () => {
    dispatch(addItem(id, quantity));
    alert.success("Item added to cart successfully");
  };

  const onReviewFormSubmitHandler = (e) => {
    e.preventDefault();
    const reviewData = {
      rating: Rating,
      comment,
      productId: params.id,
    };
    console.log(reviewData);
    dispatch(newReview(reviewData));
  };

  return (
    <>
      <Navbar />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className={classes.black}>
          <div className={`${classes["product-main-info"]} `}>
            <div className={classes["product-row"]}>
              <div
                className={`${classes["product-col-md-8"]} ${classes["product-images"]}`}
              >
                <div className={`${classes["all-product-images"]}`}>
                  <div
                    className={classes["grid-img-box"]}
                    onClick={clickHandler1}
                  >
                    <img
                      src="/images/realme Book.png"
                      alt="..."
                      className={classes["grid-img"]}
                    />
                  </div>
                  <div
                    className={classes["grid-img-box"]}
                    onClick={clickHandler2}
                  >
                    <img
                      src="/images/realme Band 2.png"
                      alt="..."
                      className={classes["grid-img"]}
                    />
                  </div>
                  <div
                    className={classes["grid-img-box"]}
                    onClick={clickHandler3}
                  >
                    <img
                      src="/images/realme Cobble Bluetooth.png"
                      alt="..."
                      className={classes["grid-img"]}
                    />
                  </div>
                  <div
                    className={classes["grid-img-box"]}
                    onClick={clickHandler4}
                  >
                    <img
                      src="/images/realme Pad.png"
                      alt="..."
                      className={classes["grid-img"]}
                    />
                  </div>
                </div>

                <div className={`${classes["product-current-image"]}`}>
                  {state1 && (
                    <img
                      src="/images/realme Book.png"
                      alt="..."
                      className={`${classes["main-img"]}`}
                    />
                  )}
                  {state2 && (
                    <img
                      src="/images/realme Band 2.png"
                      alt="..."
                      className={`${classes["main-img"]}`}
                    />
                  )}
                  {state3 && (
                    <img
                      src="/images/realme Cobble Bluetooth.png"
                      alt="..."
                      className={`${classes["main-img"]}`}
                    />
                  )}
                  {state4 && (
                    <img
                      src="/images/realme Pad.png"
                      alt="..."
                      className={`${classes["main-img"]}`}
                    />
                  )}
                </div>
              </div>

              <div
                className={`${classes["col-md-4"]} ${classes["product-info"]}`}
              >
                <div
                  className={`${classes["product-details"]} ${classes["font-poppin"]}`}
                >
                  <div className={classes["product-name"]}>{product.name}</div>
                </div>

                <div
                  className={`${classes["product-price-rating"]} ${classes["font-poppin"]}`}
                >
                  <div className={classes["product-price-box "]}>
                    <div className={classes["product-price"]}>
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        style={{ fontSize: "1.3rem", margin: "0 auto" }}
                      />
                      {product.price}
                    </div>
                  </div>
                  <div className={classes["product-rating"]}>
                    Rating
                    <ReactStars {...rating} />
                  </div>
                </div>

                <div
                  className={`${classes["product-description"]} ${classes["font-poppin"]}`}
                >
                  Description :
                  <p>
                    MediaTek Helio G85 Octa-core Processor <br />
                    4 GB RAM | 128 GB ROM | Expandable Upto 256 GB <br />
                    16.51 cm (6.5 inch) HD+ Display <br />
                    50MP+2MP+2MP Primary Camera | 8MP Front Camera <br />
                    6000 mAh Battery <br />
                  </p>
                </div>

                <div className={classes["product-status"]}>
                  Status : In Stock
                </div>

                <div className={classes["product-quantity"]}>
                  Quantity:
                  <div className={classes["product-input"]}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={classes.Icon}
                      onClick={decreaseQuantity}
                    />
                    <input readOnly type="text" value={quantity} />
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={classes.Icon}
                      onClick={increaseQuantity}
                    />
                  </div>
                </div>

                <div className={classes["product-purchase"]}>
                  <div className={`${classes["add-cart"]}`}>
                    <Button
                      variant="outline-warning"
                      onClick={addItemToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <div
                    className={`${classes["buy-now"]} ${classes["btn-outline-primary"]}`}
                  >
                    <Button variant="outline-primary">Buy now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes["recomended-deals"]}>
            <div className={classes["recomended-products-heading"]}>
              Recomended Products
            </div>
            <div className={`${classes["background-1"]}`}>
              <RecomendedProducts />
            </div>
          </div>

          <div className={classes["all-product-details"]}>
            <div
              className={`${classes["details-navigation"]} ${classes["border"]}`}
            >
              <div className={classes["product-specs"]}>SPECS</div>
              <div className={classes["product-reviews"]}>
                <p>Reviews</p>
                <ReactStars {...rating} />
                <p>{rating.value}</p>
              </div>
            </div>
            <div
              className={`${classes["product-specs-main"]} ${classes["border"]}`}
            >
              <div className={classes["main-heading"]}>Specifications</div>
              <div
                className={`${classes["general-specs"]} ${classes["all-specs-category-box"]}`}
              >
                <div className={classes["heading"]}>General</div>
                <div
                  className={`${classes["individual-spec"]} ${classes["row"]}`}
                >
                  <div
                    className={`${classes["col-md-3"]} ${classes["spec-name"]}`}
                  >
                    Whats in the box
                  </div>
                  <div
                    className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                  >
                    laptop, charger, waranty card, user manual
                  </div>
                </div>

                <div
                  className={`${classes["individual-spec"]} ${classes["row"]}`}
                >
                  <div
                    className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                  >
                    Model number
                  </div>
                  <div
                    className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                  >
                    CB 11ODS8
                  </div>
                </div>
                <div
                  className={`${classes["individual-spec"]} ${classes["row"]}`}
                >
                  <div
                    className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                  >
                    Model name
                  </div>
                  <div
                    className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                  >
                    vivo book
                  </div>
                </div>
                <div
                  className={`${classes["individual-spec"]} ${classes["row"]}`}
                >
                  <div
                    className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                  >
                    color
                  </div>
                  <div
                    className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                  >
                    Onyx black
                  </div>
                </div>
                <div
                  className={`${classes["individual-spec"]} ${classes["row"]} ${classes["last"]}`}
                >
                  <div
                    className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                  >
                    Power Supply
                  </div>
                  <div
                    className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                  >
                    65W USB type-C
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <form onSubmit={onReviewFormSubmitHandler}>
                <input
                  type="text"
                  value={Rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={(e) => {
                    setRating("");
                    setComment("");
                  }}
                >
                  Cancel
                </button>
                <button>Submit</button>
              </form> */}
              
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>New Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form id="reviewform" onSubmit={onReviewFormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="text"
                        autoFocus
                        value={Rating}
                        onChange={(e) => setRating(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Review</Form.Label>
                      <Form.Control as="textarea" rows={3} 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={(e) => {
                    setShow(false);
                    setRating("");
                    setComment("");
                  }
                  }>
                    Close
                  </Button>
                  <Button variant="dark" form="reviewform" type="submit" onClick={(e) => {
                    setShow(false);
                  }}>
                    Submit Review
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className={`${classes["product-reviews-all"]}`}>
              <div className={classes["main-heading"]}>
                Reviews
                <Button variant="secondary" onClick={handleShow}>
                  New Rating
                </Button>
              </div>
              {product.reviews.map((review) => (
                <IndividualReview
                  comment={review.comment}
                  stars={review.rating}
                  userName={review.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Product;
