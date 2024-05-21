import React, { useState, useEffect } from "react";
import { Card, CardBody } from "react-bootstrap";
import "./styles/cardItems.css";
import calculateAvgRating from "../Shared/AvgRating";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { useCartContext } from "../Context/Cart_Context";

function CardItems({ item }) {
  const navigation = useNavigate();
  const { cart, addToCart, removeToCart } = useCartContext();
  const { id, title, Image, price, featured, reviews, category } = item;

  const [reviewData, setReviewData] = useState([]);
  const totalReview = [
    ...reviews.map((review) => ({ ...review, productId: id })),
    ...reviewData,
  ];
  const { totalRating, avgRating } = calculateAvgRating(
    totalReview.filter((item) => item.productId === id)
  );

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("UserReviews")) || [];
    const filteredReviews = storedReviews.filter(
      (review) => review?.productId === id
    );
    setReviewData(filteredReviews);
  }, [id]);

  return (
    <>
      <div className="cardDetails">
        <Card>
          <div
            className="card_img"
            onClick={() => navigation(`/product/${category}/${id}`)}
          >
            <picture>
              <img src={Image} alt="card profile" loading="lazy" />
            </picture>
            {featured && <span>In the Stock</span>}
          </div>
          <CardBody>
            <div className="card_top">
              <h5 className="mobile_title">
                <Link to={`/product/${category}/${id}`}>{title}</Link>
              </h5>

              <div className="card_rating_title">
                <span className="item_ratings">
                  <i>
                    <FaStar />
                  </i>
                  {avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? (
                    "Not rated"
                  ) : (
                    <span>
                      {
                        totalReview.filter((item) => item.productId === id)
                          .length
                      }
                    </span>
                  )}
                </span>
                <h5>${price}</h5>
              </div>
              <div className="card_bottom">
                <h5 className="booking_btn">
                  {!cart.find((cartItem) => cartItem.id === id) ? (
                    <MdShoppingCart
                      size={25}
                      className="cart-icon"
                      onClick={() => {
                        addToCart(item);
                      }}
                    />
                  ) : (
                    <MdRemoveShoppingCart
                      size={25}
                      className="cart-icon"
                      onClick={() => {
                        removeToCart(id);
                      }}
                    />
                  )}
                </h5>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default CardItems;
