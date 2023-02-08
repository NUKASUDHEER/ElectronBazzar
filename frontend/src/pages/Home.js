import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "../components/styles/Home.module.css";
import Banner from "../components/layout/Banner";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/layout/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/product-actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const images = [
  "/images/carousel-2.jpg",
  "/images/carousel-4.jpg",
  "/images/carousel-3.jpg",
  "/images/carousel-5.jpg",
  "/images/carousel-1.jpg",
];

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const {products} = useSelector((state) => state.allProducts);
  return (
    <>
      <body className={classes.body}>
        <Carousel>
          {images.map((image, i) => (
            <img
              className={classes.images}
              src={image}
              key={i}
              alt={`${i} Slide`}
            />
          ))}
        </Carousel>

        <div className={classes.featuredProductsSection}>
          <h1 className={classes.featuredProductHeading}>FEATURED PRODUCTS</h1>
          <div className={classes.line}></div>
          <div className={classes.featuredProducts}>
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className={classes.link}
              >
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  id={product._id}
                />
              </Link>
            ))}
          </div>
        </div>
        <Banner />
        <br />
        <br />
        <Footer />
      </body>
    </>
  );
};

export default Home;
