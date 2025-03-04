import React from "react";

const AcceptRejectCard = ({
  data,
  acceptOrRejectRequest,
  forReviewRequest,
}) => {
  const { fromUserId, _id } = data;
  const { lastName, firstName, photoUrl, about, age, gender } = forReviewRequest
    ? fromUserId
    : data;

  return (
    <div className="flex justify-between items-center flex-row-reverse p-5 border-gray-200 border-2 m-5 shadow-xl ">
      <img src={photoUrl} className="rounded-full w-52" />
      <div className="w-96 mr-5">
        <h1 className="text-2xl font-bold">
          {firstName} {lastName}
        </h1>
        <h2 className="text-lg">
          {age ? age + " years" : age}, {gender?.toUpperCase()}
        </h2>
        <p className="py-6 text-justify">{about}</p>
        {forReviewRequest && (
          <div className="flex justify-start ">
            <button
              onClick={() => acceptOrRejectRequest("accepted", _id)}
              className="btn btn-success mr-3"
            >
              Accept
            </button>
            <button
              onClick={() => acceptOrRejectRequest("rejected", _id)}
              className="btn btn-warning px-5"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptRejectCard;
