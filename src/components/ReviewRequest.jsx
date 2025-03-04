import React from "react";
import AcceptRejectCard from "./AcceptRejectCard";
import { useReviewRequest } from "../hooks/useReviewRequest";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const ReviewRequest = () => {
  const reviews = useSelector((store) => store.reviewRequest);
  const { acceptOrRejectRequest } = useReviewRequest();
  return (
    <div className="flex items-center flex-col justify-center my-10">
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      {reviews &&
        reviews.map((oneReview) => (
          <AcceptRejectCard
            key={oneReview._id}
            data={oneReview}
            acceptOrRejectRequest={acceptOrRejectRequest}
            forReviewRequest={true}
          />
        ))}
    </div>
  );
};

export default ReviewRequest;
