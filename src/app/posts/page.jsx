import React from "react";
import PostContainer from "../components/postContainer";

const page = async () => {
  const res = await fetch(`${process.env.BASE_URL}posts`, {
    cache: "no-store",
  });
  const data = await res.json();
  // console.log(data);
  return (
    <div className="min-h-[calc(100dvh-70px)] bg-gray-300">
      <div className="py-8 gap-4 w-full justify-items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {data.posts.map((post) => (
          <PostContainer
            createdAt={post.createdAt}
            description={post.description}
            postId={post.postId}
            title={post.title}
            name={post.user.name}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
