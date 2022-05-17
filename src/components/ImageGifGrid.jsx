import React from "react";

export const ImageGifGrid = ({ el }) => {
  const { title, url } = el;
  return (
    <div className="card animate__animated animate__pulse">
      <img src={url} alt={title} width="150px" height="150px" />
    </div>
  );
};
