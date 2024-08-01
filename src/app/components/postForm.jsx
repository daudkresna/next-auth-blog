"use client";

import { useRef } from "react";
import { createPost } from "../actions/createPost";
import SubmitButton from "./buttons/submitButton";

const PostForm = ({ id }) => {
  const postRef = useRef();
  console.log(id);
  const createPostWithId = createPost.bind(null, id);
  return (
    <div className="bg-white px-12 py-6 md:w-[300px] w-full">
      <h1 className="font-bold text-center text-xl mb-6">Create Post</h1>
      <form
        action={(formData) => {
          postRef.current?.reset();
          createPostWithId(formData);
        }}
        ref={postRef}
        className="flex flex-col gap-4"
      >
        <label htmlFor="title" className="text-sm text-slate-500">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="masukkan-judul-post"
          className="border-2 border-slate-300 p-2 rounded-lg"
        />
        <label htmlFor="description" className="text-sm text-slate-500">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="your-email"
          className="border-2 border-slate-300 p-2 rounded-lg"
        />
        <SubmitButton title="Create Post" />
      </form>
    </div>
  );
};

export default PostForm;
