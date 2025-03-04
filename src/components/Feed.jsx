import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeed,
  removeFeed,
  addMoreFeed,
  updateOffsetFeed,
} from "../utils/feedSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FeedCards from "./FeedCards";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Feed = () => {
  const feeds = useSelector((store) => store.feed);
  const { feed, offsetFeed } = feeds;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeed = async (loadMore = false) => {
    if (!loadMore && feed?.length) return;
    try {
      let apiUrl = BASE_URL + "/user/feed?page=" + offsetFeed;

      const resp = await axios.get(apiUrl, {
        withCredentials: true,
      });

      if (resp?.data?.data.length === 0) {
        dispatch(addFeed(null));
      } else {
        toast.success(resp?.data?.message);
        loadMore
          ? dispatch(addMoreFeed(resp?.data?.data))
          : dispatch(addFeed(resp?.data?.data));

        dispatch(updateOffsetFeed());
      }
    } catch (e) {
      if (e?.response?.data?.message === 401) {
        navigate("/login");
      } else {
        toast.error(e?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center my-5">
      <ToastContainer autoClose={1000} position="top-center" theme="light" />
      <div className="carousel carousel-vertical rounded-box w-[40rem] h-[50rem]">
        {feed &&
          feed.map((eachFeed, feekKey) => {
            return (
              <FeedCards
                onefeed={eachFeed}
                key={eachFeed._id}
                dispatch={dispatch}
                removeFeed={removeFeed}
                feekKey={feekKey}
                allFeeds={feed}
                getFeed={getFeed}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Feed;
