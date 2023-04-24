import React from "react";

function ErrorCard({ error }) {
  return (
    <div>
      <h3 style={{ color: "red" }}>{error}</h3>
    </div>
  );
}

export default ErrorCard;
