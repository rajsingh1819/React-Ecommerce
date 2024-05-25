import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import calculateAvgRating from "../Shared/AvgRating";
import "./styles/productPage.css";
import { FaStar, FaUserAlt } from "react-icons/fa";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useCartContext } from "../Context/Cart_Context";
import { useNavigate } from "react-router-dom";
import { Offers } from "../assets/Constants/Constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import Newsletter from "./Newsletter";

function ProductPage(props) {
  const { addToCart, cart, removeToCart } = useCartContext();
  const navigate = useNavigate();
  const data = props.data[0];
  const [goToCart, setGoToCart] = useState(true);
  const [mobileRating, setMobileRating] = useState(null);
  const [userMsg, setUserMsg] = useState("");
  const { id, title, Image, price, desc, reviews, category } = data || {};
  const { deliveryCharges, taxCharge } = Offers || {};

  const [reviewData, setReviewData] = useState([]);
  const [showOptions, setShowOptions] = useState({});
  const islogin = localStorage.getItem("login");

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

  const handleBooking = () => {
    const login = localStorage.getItem("login");
    navigate(`/product/${category}/${id}/booking`, {
      state: { data, avgRating, totalRating, taxCharge, deliveryCharges },
    });

    if (!login) {
      userNotAvailable();
    }
  };

  const userReviews = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const reviewDone = () => {
    toast.success("User Review Successfully!!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleReviews = (e) => {
    e.preventDefault();
    if (!mobileRating) {
      userReviews("Review should not be empty!");
    } else if (!userMsg) {
      userReviews("Message should not be empty!");
    } else {
      const login = localStorage.getItem("login");
      if (!login) {
        userNotAvailable();
        navigate("/login");
      } else {
        const review = {
          id: uuidv4(),
          productId: id,
          name: JSON.parse(login)?.name || "Anonymous user",
          userId: JSON.parse(login)?.id || "Anonymous user id",
          message: userMsg,
          rating: mobileRating,
        };
        let storedReviews =
          JSON.parse(localStorage.getItem("UserReviews")) || [];
        storedReviews.push(review);
        localStorage.setItem("UserReviews", JSON.stringify(storedReviews));
        setReviewData([...storedReviews]);
        setUserMsg("");
        setMobileRating(null);
        reviewDone();
      }
    }
  };

  const userNotAvailable = () => {
    toast.info("User is not logged in!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  // const editReview = (index, userId) => {
  //   const login = JSON.parse(localStorage.getItem("login"));
  //   if (!login) {
  //     userNotAvailable();
  //     return;
  //   }

  //   if (userId === login?.id) {
  //     console.log("edit is not woking...");
  //     setShowOptions(false);
  //   }
  // };

  const deleteReview = (reviewId, productId, user) => {
    const login = JSON.parse(localStorage.getItem("login"));
    if (!login) {
      userNotAvailable();
      return;
    }

    if (user === login?.id) {
      let storedReviews = JSON.parse(localStorage.getItem("UserReviews")) || [];
      // Filter out the review to be deleted based on productId and reviewId
      const updatedReviews = storedReviews.filter(
        (review) => !(review.productId === productId && review?.id === reviewId)
      );

      localStorage.setItem("UserReviews", JSON.stringify(updatedReviews));
      setReviewData(updatedReviews);
      setShowOptions(false); // Close the options menu after deletion
    }
  };

  const handleToggleOptions = (index, user) => {
    const login = JSON.parse(localStorage.getItem("login"));

    if (user === login?.id) {
      setShowOptions((prevState) => {
        const updatedOptions = { ...prevState };

        // Close all other options
        Object.keys(updatedOptions).forEach((key) => {
          if (key !== index.toString()) {
            updatedOptions[key] = false;
          }
        });

        // Toggle options for the clicked review
        updatedOptions[index] = !prevState[index];

        return updatedOptions;
      });
    }
  };

  const actionReview = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowOptions(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container className="Product_item">
        <Row>
          <Col lg="7">
            <div className="card_information">
              <div className="card_imag_button">
                <div className="card_img">
                  <img src={Image} alt="img-png" />
                </div>
                <div className="button-style">
                  {!cart.find((cartItem) => cartItem.id === id) ? (
                    <span
                      onClick={() => {
                        setGoToCart(false);

                        setTimeout(() => {
                          addToCart(data);
                          navigate("/cart");
                        }, 2000);
                      }}
                    >
                      <MdShoppingCart size={25} />
                      {goToCart ? (
                        <span> ADD TO CART</span>
                      ) : (
                        <span>
                          {" "}
                          GO TO CART <div className="processing-icon"></div>
                        </span>
                      )}
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        removeToCart(id);
                      }}
                    >
                      <MdRemoveShoppingCart size={25} />
                      <span> REMOVE ITEM</span>
                    </span>
                  )}
                  <Button onClick={handleBooking} className="buyButton">
                    BUY NOW
                  </Button>
                </div>
              </div>
              <div className="Card_data">
                <div className="card_title_reviews">
                  <div className="title">
                    <h3>{title}</h3>
                  </div>
                  <div className="reviews">
                    <FaStar className="review-icon" />
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>
                        (
                        {
                          totalReview.filter((item) => item.productId === id)
                            ?.length
                        }
                        )
                      </span>
                    )}
                  </div>
                </div>
                <div className="card_price_desc">
                  <h5>
                    Price : <span>${price}</span>
                  </h5>
                  <div className="area">
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="5">
            <div className="user-rating ">
              <h5>
                Reviews (
                {totalReview
                  ? totalReview.filter((item) => item.productId === id)?.length
                  : 0}{" "}
                reviews)
              </h5>

              <Form onSubmit={handleReviews}>
                <div className="rating-group mt-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span
                      key={rating}
                      className={mobileRating === rating ? "selected" : ""}
                      onClick={() => setMobileRating(rating)}
                      style={{
                        cursor: "pointer",
                        color: mobileRating >= rating ? "#e7c251" : "gray",
                      }}
                    >
                      {rating}
                      <FaStar />
                    </span>
                  ))}
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    placeholder="Write some review here..."
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                  />
                  <button className="input_btn" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
              <ListGroup className="user_reviews mt-4 scrollable-column">
                <div>
                  {totalReview.filter((item) => item.productId === id)?.length >
                    0 &&
                    totalReview
                      ?.filter((item) => item?.productId === id)
                      ?.map((item, index) => (
                        <div key={index} className="Full_user_action">
                          <div className="reviews-item" onClick={actionReview}>
                            {item?.image ? (
                              <img src={item.image} alt="user" />
                            ) : (
                              <span className="imageView">
                                <FaUserAlt />
                              </span>
                            )}
                            <div
                              className="reviews-info"
                              onClick={actionReview}
                            >
                              <div>
                                <h5>{item?.name}</h5>
                                <p>{new Date().toLocaleDateString("en-IN")}</p>
                              </div>
                              <div>
                                <span className="userRating">
                                  <FaStar className="icon_style" />
                                  {item.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="userMsg">
                            <span
                              className="messageContent"
                              onClick={actionReview}
                            >
                              {item?.message}
                            </span>
                            <div className="messageOptions">
                              <BsThreeDotsVertical
                                size={20}
                                className="toggle-icon"
                                onClick={() =>
                                  handleToggleOptions(index, item?.userId)
                                }
                              />
                              {}
                              {islogin && showOptions[index] && (
                                <div className="options-container">
                                  {/* <div
                                    className="option"
                                    onClick={() =>
                                      editReview(index, item?.userId)
                                    }
                                  >
                                    Edit
                                  </div> */}
                                  <div
                                    className="option"
                                    onClick={() =>
                                      deleteReview(
                                        item?.id,
                                        item?.productId,
                                        item?.userId
                                      )
                                    }
                                  >
                                    Delete
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </>
  );
}

export default ProductPage;
