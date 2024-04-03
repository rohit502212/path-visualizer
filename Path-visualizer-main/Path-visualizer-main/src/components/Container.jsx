import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";

export default function Container() {
  return (
    <div className="vh-100 code items-center">
      <Header />
      {/* Modals for info andd error to be added */}
      <Board />
      <Footer />
    </div>
  );
}
