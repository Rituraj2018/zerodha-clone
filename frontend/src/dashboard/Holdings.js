import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log("Error fetching holdings:", err);
      });
  }, []);

  return (
    <>
      <h3>Holdings ({allHoldings.length})</h3>

      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {allHoldings.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Holdings;