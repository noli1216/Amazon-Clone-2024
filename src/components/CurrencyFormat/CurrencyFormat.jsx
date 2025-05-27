import React from "react";
import numeral from "numeral";


const CurrenncyFormat = ({ amount }) => {

  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};


export default CurrenncyFormat;
