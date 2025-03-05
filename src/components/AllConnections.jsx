import React from "react";
import AcceptRejectCard from "./AcceptRejectCard";
import { ToastContainer } from "react-toastify";
import { useFetchAllConnection } from "../hooks/useFetchAllConnection";

const AllConnections = () => {
  const { connectionsData } = useFetchAllConnection();

  return (
    <div className="flex items-center flex-col justify-center my-10">
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      {connectionsData &&
        connectionsData.map((oneconnection) => (
          <AcceptRejectCard key={oneconnection._id} data={oneconnection} />
        ))}
    </div>
  );
};

export default AllConnections;
