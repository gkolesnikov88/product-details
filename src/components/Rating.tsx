import React from "react";
import { RiStarLine } from "@remixicon/react";
import { RiStarFill } from "@remixicon/react";
import { RiStarHalfFill } from "@remixicon/react";
import "./_rating.css";

type RatingTypes = {
  rating: number;
  reviews: number;
};

const getRoundedRating = (rating: number) => {
    return Math.round(rating * 10) / 10;
}

const getStarsSequence = (rating: number) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating && i + 0.5 < rating) {
      // full star
      stars.push(<RiStarFill />);
    } else if (i < rating && i + 0.5 > rating) {
      // half star
      stars.push(<RiStarHalfFill />);
    } else {
      // empty star
      stars.push(<RiStarLine />);
    }
  }

  return stars;
};

const getReviewsText = (reviews: number) => {
  return `See all ${reviews} reviews`;
};

const Rating = ({ rating, reviews }: RatingTypes) => {
  return (
    <div className="rating__wrapper">
      <div className="rating__number text-xl">{getRoundedRating(rating)}</div>
      <div className="rating__stars">{getStarsSequence(rating).map((el, idx) => (<div key={idx}>{el}</div>))}</div>
      <button  className="reviews__link text-sm">{getReviewsText(reviews)}</button>
    </div>
  );
};

export default Rating;
