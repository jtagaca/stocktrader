import React from "react";
import { Jumbotron } from "reactstrap";
import "../App.css";

export const Header = () => {
  return (
    <Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center headerjt">
            <h1 className="font-header_1">STOCK FINDER</h1>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};
