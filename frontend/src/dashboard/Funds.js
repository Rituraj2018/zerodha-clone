import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <Link to="#" className="btn btn-success">Add funds</Link>
        <Link to="#" className="btn btn-primary">Withdraw</Link>
      </div>
    </>
  );
};

export default Funds;