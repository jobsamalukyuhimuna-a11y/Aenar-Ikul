"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewUniversePage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [cover, setCover] = useState("");

  function handleNameChange(value: string) {
    setName(value);

    setSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      "Universe form is ready. Saving will be connected in the next step."
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px 100px",
        background:
          "radial-gradient(circle at top, #241b0d 0%, #0b0b0b 45%, #050505 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "45px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 10px",
                color: "#9d7d3d",
                letterSpacing: "4px",
                fontSize: "12px",
              }}
            >
              ADMINISTRATION
            </p>

            <h1
              style={{
                margin: 0,
                color: "#d7b56d",
                fontFamily: "Cinzel, Georgia, serif",
                fontSize: "42px",
                fontWeight: 400,
              }}
            >
              Create Universe
            </h1>

            <p
              style={{
                color: "#8f8f8f",
                marginTop: "12px",
              }}
            >
              Create a new world for your library.
            </p>
          </div>

          <Link
            href="/admin/universes"
            style={{
              textDecoration: "none",
              color: "#d7b56d",
              border: "1px solid rgba(215,181,109,.3)",
              background: "rgba(215,181,109,.05)",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            ← Back to Universes
          </Link>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(17,17,17,.82)",
            border: "1px solid rgba(215,181,109,.22)",
            borderRadius: "22px",
            padding: "35px",
            boxShadow: "0 25px 70px rgba(0,0,0,.5)",
          }}
        >
          {/* NAME */}

          <Field
            label="Universe Name"
            value={name}
            onChange={handleNameChange}
            placeholder="Aenar Ikul"
            required
          />

          {/* SLUG */}

          <Field
            label="Slug"
            value={slug}
            onChange={setSlug}
            placeholder="aenar-ikul"
            required
          />

          {/* CATEGORY */}

          <Field
            label="Category"
            value={category}
            onChange={setCategory}
            placeholder="Fantasy"
            required
          />

          {/* COVER */}

          <Field
            label="Cover Image"
            value={cover}
            onChange={setCover}
            placeholder="/universes/aenar-ikul.jpg"
          />

          {/* DESCRIPTION */}

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#d7b56d",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Describe this universe..."
              rows={6}
              required
              style={textareaStyle}
            />
          </div>

          {/* QUOTE */}

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                color: "#d7b56d",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              Quote
            </label>

            <textarea
              value={quote}
              onChange={(event) =>
                setQuote(event.target.value)
              }
              placeholder="Every world has a beginning..."
              rows={4}
              style={textareaStyle}
            />
          </div>

          {/* COVER PREVIEW */}

          {cover && (
            <div
              style={{
                marginBottom: "30px",
                padding: "18px",
                borderRadius: "14px",
                border:
                  "1px solid rgba(215,181,109,.15)",
                background: "rgba(0,0,0,.3)",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#8f8f8f",
                  fontSize: "12px",
                }}
              >
                COVER PATH
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#d7b56d",
                  wordBreak: "break-all",
                }}
              >
                {cover}
              </p>
            </div>
          )}

          {/* INFO */}

          <div
            style={{
              marginBottom: "30px",
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(215,181,109,.04)",
              border:
                "1px solid rgba(215,181,109,.12)",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                color: "#d7b56d",
                fontSize: "14px",
              }}
            >
              World Statistics
            </p>

            <p
              style={{
                margin: 0,
                color: "#81745f",
                fontSize: "13px",
                lineHeight: 1.7,
              }}
            >
              Books, characters and kingdoms will be
              calculated automatically from the library.
            </p>
          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="submit"
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "15px 25px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#d7b56d,#8b6828)",
                color: "#111",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Create Universe
            </button>

            <Link
              href="/admin/universes"
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "14px 25px",
                borderRadius: "12px",
                border:
                  "1px solid rgba(215,181,109,.25)",
                background: "rgba(255,255,255,.03)",
                color: "#b8aa94",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <label
        style={{
          display: "block",
          color: "#d7b56d",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#9d7d3d" }}> *</span>
        )}
      </label>

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
    </div>
  );
}

/* =========================================================
   STYLES
========================================================= */

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(215,181,109,.2)",
  background: "rgba(0,0,0,.35)",
  color: "#fff",
  outline: "none",
  fontSize: "15px",
  fontFamily: "inherit",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(215,181,109,.2)",
  background: "rgba(0,0,0,.35)",
  color: "#fff",
  outline: "none",
  fontSize: "15px",
  lineHeight: 1.7,
  fontFamily: "inherit",
  resize: "vertical",
};