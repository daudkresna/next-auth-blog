import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import PostForm from "../components/postForm";
import PostContainer from "../components/postContainer";

const page = async () => {
  const session = await getServerSession(authOptions);
  const id = session.user.id;
  const res = await fetch(`${process.env.BASE_URL}user/${id}/posts`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return (
    <>
      <div className="bg-gray-300 p-8 flex gap-8 md:flex-row min-h-screen w-full flex-col">
        <div className="flex sm:w-full md:w-fit md:justify-start sm:justify-center">
          <div className="h-fit w-full flex justify-center sm:w-fit">
            <PostForm id={id} />
          </div>
        </div>
        <div className="gap-4 w-full grid grid-cols-2 md:grid-cols-3 h-full">
          {data.posts.map((post) => (
            <PostContainer
              createdAt={post.createdAt}
              description={post.description}
              postId={post.postId}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
