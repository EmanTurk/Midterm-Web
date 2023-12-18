import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Discover what our customers are saying about Glimmix! Browse through our reviews and see firsthand experiences from shoppers just like you. From the quality of our fabrics to the joy of finding the perfect fit, our community's feedback is the heart of our journey towards excellence. Your opinion matters to us, so after you've made your magical fashion finds, we invite you to share your own Glimmix story. Your insights not only guide us but also help fellow fashion enthusiasts in making their perfect choice.</p>

        </div>
      </div>
  );
};

export default DescriptionBox;
