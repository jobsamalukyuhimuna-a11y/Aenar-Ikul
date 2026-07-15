"use client";

export default function DeleteButton({
  id,
}: {
  id: number;
}) {
  async function deleteStory() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this story?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `/api/admin/stories/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    alert(data.message);

    window.location.reload();
  }

  return (
    <button
      onClick={deleteStory}
      style={{
        marginLeft: 12,
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        background: "#8b2020",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Delete
    </button>
  );
}