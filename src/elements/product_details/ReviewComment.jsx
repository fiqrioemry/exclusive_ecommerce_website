import React from "react";

const ReviewComment = () => {
  return (
    <div className="border-b-2">
      <div className="flex flex-row items-center mb-4">
        <div>
          <ReviewScoreElement product={product} />
        </div>
        8 Bulan lalu
      </div>
      <div className="flex flex-row items-center gap-x-4 mb-4">
        <div className="h-12 w-12 bg-black rounded-full"></div>
        <div>Ahmad Fiqri</div>
      </div>
      <div className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quam
        natus blanditiis tempore veritatis quasi harum ducimus dolores iure ut!
        Velit sunt earum voluptatem ut.
      </div>
    </div>
  );
};

export default ReviewComment;
