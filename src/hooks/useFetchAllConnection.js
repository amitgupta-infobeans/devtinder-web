import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connecitonSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const useFetchAllConnection = () => {
  const connectionsData = useSelector((store) => store.fetchConnections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const resp = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      if(!connectionsData) toast.success(resp?.data?.message);
      dispatch(addConnections(resp?.data?.data));
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return { connectionsData };
};
