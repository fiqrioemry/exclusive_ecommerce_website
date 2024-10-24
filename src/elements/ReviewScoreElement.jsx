import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewScoreElement = ({ reviews }) => {
  if (reviews.length === undefined) {
    const fullStars = reviews;
    const emptyStars = 5 - fullStars;
    return (
      <div className="flex flex-row gap-x-1 text-lg iems-center">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, idx) => (
          <FaStar key={`full-${idx}`} className="text-yellow-500" />
        ))}

        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, idx) => (
          <FaStar key={`empty-${idx}`} className="text-gray-400" />
        ))}
      </div>
    );
  } else {
    const averageRating = (
      reviews.reduce((accu, review) => (accu += review.rating), 0) /
      reviews.length
    ).toFixed(1);
    const fullStars = Math.floor(averageRating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex flex-row gap-x-1 text-lg iems-center">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, idx) => (
          <FaStar key={`full-${idx}`} className="text-yellow-500" />
        ))}

        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, idx) => (
          <FaStar key={`empty-${idx}`} className="text-gray-400" />
        ))}
      </div>
    );
  }
};

export default ReviewScoreElement;
