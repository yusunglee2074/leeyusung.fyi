"use client";

import { useState } from "react";
import AdminForm from "../../components/AdminForm";

export default function Admin() {
  const [message, setMessage] = useState("");

  async function handleSubmit(data: { title: string; content: string }) {
    const response = await fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setMessage("Post created successfully");
      await fetch("/api/revalidate");
    } else {
      setMessage("Error creating post");
    }
  }

  return (
    <div className="container mx-auto p-4 bg-white border-2 border-black shadow-brutal">
      <h1 className="text-4xl text-center text-fuchsia mb-8 shadow-brutal-text">
        Admin Page
      </h1>
      <AdminForm onSubmit={handleSubmit} />
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
