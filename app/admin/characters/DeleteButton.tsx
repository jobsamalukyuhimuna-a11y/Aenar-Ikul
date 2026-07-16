"use client";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  async function removeCharacter() {
    const ok = confirm("Delete this character?");

    if (!ok) return;

    const res = await fetch(`/api/admin/characters/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      location.reload();
    }
  }

  return (
    <button
      onClick={removeCharacter}
      style={{
        marginLeft: "10px",
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        background: "#a32020",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Delete
    </button>
  );
}