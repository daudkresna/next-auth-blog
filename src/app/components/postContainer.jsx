"use client";
import React, { useState } from "react";

const PostContainer = ({
  postId,
  createdAt,
  title,
  description,
  name = "",
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={postId}
      className="flex flex-col h-full justify-center items-center gap-3 rounded-lg bg-white p-4 md:w-[200px] w-full text-center hover:cursor-default"
      onMouseOver={() => {
        console.log("MASUK HOVER");
        setHover(true);
      }}
      onMouseOut={() => setHover(false)}
    >
      <div className="w-full">
        <h1 className="text-xl font-semibold truncate">{title}</h1>
      </div>
      <h3 className="text-gray-400 text-xs">
        {name != "" ? (
          <>
            <span
              className={`${
                hover ? "text-red-400" : "text-blue-400"
              }  font-semibold ease-in-out duration-300`}
            >
              {name}
            </span>
            {" - "}
          </>
        ) : (
          ""
        )}

        {new Date(createdAt).toLocaleDateString()}
      </h3>
      <div className="w-full">
        <h3 className="text-gray-500 text-sm truncate">{description}</h3>
      </div>
    </div>
  );
};

export default PostContainer;
