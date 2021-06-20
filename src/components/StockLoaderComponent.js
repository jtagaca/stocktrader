import React from "react";
import { Loading } from "./LoadingComponent";
import NumberFormat from "react-number-format";
import { PriceStats } from "./PriceStatsComponent";
import "../App.css";

export const StockLoader = ({
  isLoading,
  isInputFocused,
  isSearching,
  description,
  quote,
  quoteColor,
  delta,
  percentage,
}) => {
  return (
    <div className="col-12 text-center center ">
      <Loading
        isLoading={isLoading}
        className={`
                    ${isLoading && isSearching ? "d-none" : ""}
                `}
      />

      <div
        className={`
                ${
                  isLoading ||
                  description === "" ||
                  (isInputFocused && isSearching)
                    ? "d-none"
                    : ""
                }
            `}
      >
        <div className="result">
          <h1 className=" title"> {description} </h1>

          <NumberFormat
            value={quote}
            style={{ color: "black" }}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            className={` quote-size`}
          />

          <PriceStats delta={delta} percentage={percentage} />
        </div>
      </div>
    </div>
  );
};
