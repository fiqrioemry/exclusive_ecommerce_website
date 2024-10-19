import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const ReviewScoreElement = ({ product, minRating = 0 }) => {
  const reviews = product.reviews || [];

  // Handle case when reviews are empty to avoid divide by zero
  const averageRating = reviews.length
    ? (
        reviews.reduce(
          (accumulator, review) => accumulator + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : minRating;

  // Determine the number of full, half, and empty stars
  const fullStars = Math.floor(averageRating); // Full stars
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; // Half star condition
  const emptyStars = 5 - fullStars - halfStar; // Empty stars

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex text-lg items-center">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, idx) => (
          <LiaStarSolid key={`full-${idx}`} className="text-yellow-500" />
        ))}

        {/* Render half star */}
        {halfStar === 1 && (
          <LiaStarSolid key="half" className="text-yellow-500" />
        )}

        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, idx) => (
          <LiaStarSolid key={`empty-${idx}`} className="text-gray-400" />
        ))}
      </div>
      <div>{averageRating}</div>
      <div>{reviews ? "" : reviews.length}</div>
    </div>
  );
};

export default ReviewScoreElement;
