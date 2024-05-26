import React, { useState } from 'react';
import '../styles/ReviewAndRate.css';
import { FaStar } from 'react-icons/fa';

function ReviewAndRate() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleReviewChange = (event) => {
    setCurrentReview(event.target.value);
  };

  const handleRatingChange = (rating) => {
    setCurrentRating(rating);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (currentReview && currentRating) {
      setReviews([...reviews, { review: currentReview, rating: currentRating }]);
      setCurrentReview('');
      setCurrentRating(0);
      setHoverRating(0);
    }
  };

  return (
    <div className="review-and-rate" id='contact'>
      <h2>Review and Rate Genie CV </h2>
      <form onSubmit={handleReviewSubmit} className="review-form">
        <textarea
          value={currentReview}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
          required
        />
        <div className="rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hoverRating || currentRating) ? '#ffc107' : '#e4e5e9'}
                  size={30}
                  onMouseEnter={() => setHoverRating(ratingValue)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              </label>
            );
          })}
        </div>
        <button type="submit">Submit Review</button>
      </form>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-rating">
              {[...Array(5)].map((star, starIndex) => (
                <FaStar
                  key={starIndex}
                  color={starIndex < review.rating ? '#ffc107' : '#e4e5e9'}
                />
              ))}
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewAndRate;
