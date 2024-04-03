import React from "react";

export default function Element({ ridx, cidx }) {
  return <div style={styles} ridx={ridx} cidx={ridx} />;
}

const styles = {
  width: "20px",
  height: "20px",
  margin: "3px",
  backgroundColor: "#d8d3cd",
  borderRadius: "3px",
  boxShadow: "2px 2px 2px #bbb",
  cursor: "pointer",
  display: "inline-block",
  transition: "background-color 0.3s ease-out"
};
