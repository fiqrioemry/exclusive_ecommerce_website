import React from "react";
import ReviewScoreElement from "../ReviewScoreElement";

const AverageReviewsElement = ({ reviews }) => {
  const starCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  reviews.forEach((review) => {
    starCounts[review.rating]++;
  });

  const totalReviews = reviews.length;

  const getPercentage = (starCount) => {
    return totalReviews > 0 ? (starCount / totalReviews) * 100 : 0;
  };

  return (
    <div className="w-full lg:w-[25%] py-6 px-2">
      <div className=" mb-4 flex items-center justify-between ">
        <div className="text-2xl font-semibold">Review Scores</div>
      </div>

      <div className="flex flex-col py-6 items-center  mb-6  rounded-md border-2">
        <div className="uppercase text-2xl font-semibold mb-4">
          Average Rating
        </div>
        <ReviewScoreElement reviews={reviews} />
        <div className="text-4xl font-bold mt-4 mb-4">
          {(
            reviews.reduce((total, review) => {
              return (total += review.rating);
            }, 0) / reviews.length
          ).toFixed(1)}
        </div>
        <div>{reviews.length} Ulasan</div>
      </div>

      {/* 2. progress bar rating */}
      <div className="pr-6">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mb-2">
            <span className="w-5 text-sm">{star}</span>
            <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
              <div
                className="bg-yellow-500 h-2 rounded-lg"
                style={{ width: `${getPercentage(starCounts[star])}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm">{starCounts[star]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AverageReviewsElement;
