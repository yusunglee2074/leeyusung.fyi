"use client";

import { useState } from "react";

interface AdminFormProps {
  onSubmit: (data: { title: string; content: string }) => void;
}

export default function AdminForm({ onSubmit }: AdminFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        required
        className="w-full p-2 border-2 border-black"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        required
        className="w-full p-2 border-2 border-black h-32"
      />
      <button
        type="submit"
        className="w-full p-2 bg-lime-400 border-2 border-black shadow-brutal hover:bg-lime-500"
      >
        Create Post
      </button>
    </form>
  );
}
