import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const FeedCards = ({
  removeFeed,
  onefeed,
  allFeeds,
  dispatch,
  feekKey,
  getFeed,
}) => {
  const { firstName, _id, lastName, age, gender, photoUrl } = onefeed;

  const updateInnerFeed = async (status) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.status === 200) {
        dispatch(removeFeed(_id));
      }
    } catch (e) {
      if (e?.response?.data?.message === 401) {
        toast.error(e?.response?.data?.message);
      } else {
        toast.error(e?.response?.data?.message);
      }
    }
  };

  const checkLastFeed = () => {
    getFeed(true);
  };
  return (
    <>
      <div className="carousel-item h-[40rem] relative">
        <img
          className="mb-2"
          src={
            photoUrl
              ? photoUrl
              : "./default-user.png"
          }
        />
        <div className="absolute bottom-10 flex w-[40rem]  justify-between p-2 items-center">
          <button
            onClick={() => updateInnerFeed("ignored")}
            className="btn text-lg btn-warning text-black "
          >
            Ignore
          </button>
          <span className="text-orange-800 bg-gray-300 font-extrabold text-2xl p-2 flex flex-col justify-center items-center">
            <span>
              {firstName.toUpperCase()} {lastName.toUpperCase()}
            </span>
            <span>
              {age} {gender?.toUpperCase()}
            </span>
          </span>
          <button
            onClick={() => updateInnerFeed("interested")}
            className="btn text-lg btn-success text-black self-end"
          >
            Interested
          </button>
        </div>
        <div className="absolute bottom-5"></div>
      </div>
      {allFeeds.length && allFeeds.length - 1 === feekKey && (
        <div
          onClick={checkLastFeed}
          className="cursor-pointer text-blue-500 underline carousel-item h-20 m-auto text-3xl"
        >
          Show more...
        </div>
      )}
    </>
  );
};

export default FeedCards;
