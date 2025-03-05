import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateReview, addReviews } from "../utils/reviewRequestSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const useReviewRequest = () => {
  const reviewsData = useSelector((store) => store.reviewRequest);
  const dispatch = useDispatch();
  const fetchData = async () => {
    if (reviewsData) return;

    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addReviews(res.data.data));
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const acceptOrRejectRequest = async (requestStatus, requestId) => {
    try {
      const resp = await axios.post(
        BASE_URL + "/request/review/" + requestStatus + "/" + requestId,
        {},
        { withCredentials: true }
      );
      toast.success(resp?.data?.message);
      dispatch(updateReview(requestId));
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return { acceptOrRejectRequest };
};
