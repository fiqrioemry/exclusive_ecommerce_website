import React from "react";
import DateFormater from "../../features/formater/DateFormater";
import { FaRegThumbsUp, FaRegThumbsDown, FaUserCircle } from "react-icons/fa";
import ReviewScoreElement from "../ReviewScoreElement";

const CommentReviewsElement = ({ reviews }) => {
  return (
    <div className="w-full lg:w-[75%] py-6 px-2">
      {/* 1. review comment heading */}
      <div className=" mb-4 flex items-center justify-between ">
        <div className="text-2xl font-semibold">Review Comment</div>
      </div>
      {/* 2. review comment box */}
      <div>
        {reviews.map((review, index) => {
          const formatedDate = DateFormater(review.date);
          return (
            <div className="mb-4" key={index}>
              <div className="w-full rounded-md border px-4 py-4">
                {/* stars */}
                <div className="mb-4">
                  <ReviewScoreElement reviews={review.rating} />
                  <div className="text-md font-medium mb-2">
                    {review.comment}
                  </div>
                  <div className="text-sm">Ditulis {formatedDate}</div>
                </div>
                <div className="flex justify-between items-center py-2">
                  {/* profile picture */}
                  <div className="flex flex-row items-center gap-x-4">
                    <FaUserCircle className="h-10 w-10" />

                    {review.reviewerName}
                  </div>
                  <div className="flex flex-row gap-x-4 items-center justify-center">
                    <div className="flex flex-row">
                      <FaRegThumbsUp /> <div>5</div>
                    </div>
                    <div className="flex flex-row items-center">
                      <FaRegThumbsDown /> <div>0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentReviewsElement;
