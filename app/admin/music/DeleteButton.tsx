"use client";

import { useState } from "react";

type Props = {
  id: number;
};

export default function DeleteButton({
  id,
}: Props) {
  const [deleting, setDeleting] =
    useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this music?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(true);

      const response = await fetch(
        `/api/admin/music/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Failed to delete music."
        );
      }

      window.location.reload();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete music."
      );

      setDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: "10px",
        border:
          "1px solid rgba(255,90,90,.35)",
        background:
          deleting
            ? "rgba(120,50,50,.45)"
            : "rgba(150,40,40,.18)",
        color: "#ff9b9b",
        fontWeight: "bold",
        cursor:
          deleting
            ? "not-allowed"
            : "pointer",
        opacity:
          deleting ? 0.7 : 1,
      }}
    >
      {deleting
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}