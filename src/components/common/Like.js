import React from "react";

export default function Like(props) {
  return (
    <i
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onToggle}
    />
  );
}
