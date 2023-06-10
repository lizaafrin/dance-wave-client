import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {


  return (
    <>
      <div className="text-2xl font-bold mx-auto">
        <img className="max-w-screen-2xl mx-auto" src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=900&t=st=1686403553~exp=1686404153~hmac=f673bead5f449eb5b8285198fd7fcc24e6508cc1bd9deb9cde3c8b5153861b02" alt="" />
        <p className="text-center underline mt-0"><Link to="/"> Go to Home</Link></p>
      </div>
    </>
  );
};

export default ErrorPage;