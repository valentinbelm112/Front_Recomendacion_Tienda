import React, { useContext, useState } from "react";
import "./styles/OrderDetailsWomen.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import UserContext from "../contex/CartContext";
import { Rating } from "@material-ui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

const OrderItem = ({ product }) => {

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { addToCart } = useContext(UserContext);
  console.log(useContext(UserContext));
  const handleClick = (item) => {
    addToCart(item);
  };
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 15 : 30,
    value: 3,
    isHalf: false,
  };

  const options1 = {
    edit: true,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 15 : 30,
    isHalf: false,
  };

  

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    console.log("guardado");

    setOpen(false);
  };

  const increaseQuantity = () => {
    if (product[0].stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  return (
    <div className="container-order-details">
      <div className="content-order-item">
        <div className="content-iamgen-order">
          <img src={product[0].image[0].URL} alt="image produturl" />
        </div>

        <div className="order-clothe-details">
          <div className="titleDetails">
            <div>{product[0].name}</div>
            <label className="unitPrice">${product[0].unitPrice}</label>
          </div>
          <div className="titleDescritption">
            <h1 className="product-description">Descripci??n</h1>
            <div>{product[0].description}</div>
          </div>

          <div className="starts">
            <div className="starts-1">
              <button onClick={decreaseQuantity}>-</button>
              <input readOnly type="number" value={quantity} />
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button
              class="button-55"
              role="button"
              onClick={() => handleClick(product)}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="share-favorite">
            <div className="share-and-favorite">
              <FontAwesomeIcon icon={faHeart} className="img3" />
              Favorito
            </div>
            <div className="share-and-favorite">
              <FontAwesomeIcon icon={faShareAlt} className="img3" />
              compartir
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="reviews">
            <ReactStars {...options} />{" "}
            <span>(5 reviews) </span>            
          </div>

          <div className="reviews-starts">
            <button onClick={submitReviewToggle} className="button-56">Submit Review</button>          
          </div>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              
              <ReactStars  
                {...options1}        
              />{" "}

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      </div>
    </div>
  );
};

export default OrderItem;
