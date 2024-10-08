"use client";
import { createPost } from "@/actions/actions";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const notify = () => toast("Post have been posted");
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10">
      <input
        type="text"
        name="title"
        placeholder="title for post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        placeholder="Body content for the post"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <button
        className="h-10 bg-blue-500 px-5 rounded text-white"
        onClick={notify}>
        Submit
      </button>
      <ToastContainer />
    </form>
  );
}
