import Image from "next/image";
import Link from "next/link";
import { books } from "./data/books";

export default function LibraryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#fff",
        padding: "140px 60px",
      }}
    >
      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          THE ROYAL ARCHIVE
        </p>

        <h1
          style={{
            fontSize: "72px",
            color: "#d7b56d",
            marginBottom: "20px",
            fontWeight: 400,
            letterSpacing: "6px",
            fontFamily: "Cinzel, serif",
          }}
        >
          Library
        </h1>

        <p
          style={{
            color: "#bdbdbd",
            fontSize: "22px",
          }}
        >
          Discover every story, every world and every legend.
        </p>
      </div>

      {/* Search */}

      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto 60px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "18px 24px",
            background: "#111",
            border: "1px solid rgba(200,164,77,.3)",
            color: "#fff",
            fontSize: "18px",
            outline: "none",
          }}
        />
      </div>

      {/* Categories */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          marginBottom: "80px",
          flexWrap: "wrap",
        }}
      >
        {["All", "Novels", "Stories", "Poetry"].map((item) => (
          <button
            key={item}
            style={{
              padding: "14px 28px",
              background: "#151515",
              color: "#d7b56d",
              border: "1px solid rgba(200,164,77,.25)",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Books */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,320px)",
          justifyContent: "center",
          gap: "40px",
          margin: "0 auto",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              width: "320px",
              background: "#121212",
              border: "1px solid rgba(200,164,77,.18)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: ".35s",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
          >
            {/* Cover */}

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "470px",
                overflow: "hidden",
                background: "#090909",
              }}
            >
              <Image
                src={book.cover}
                alt={book.title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Content */}

            <div
              style={{
                padding: "28px",
              }}
            >
              <h2
                style={{
                  color: "#d7b56d",
                  fontSize: "28px",
                  marginBottom: "10px",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 400,
                }}
              >
                {book.title}
              </h2>

              <p
                style={{
                  color: "#888",
                  marginBottom: "20px",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                {book.universe}
              </p>

              <p
                style={{
                  color: "#bdbdbd",
                  lineHeight: 1.8,
                  marginBottom: "25px",
                  fontSize: "16px",
                }}
              >
                {book.description}
              </p>

              <Link
                href={`/library/stories/${book.slug}`}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px",
                  background: "transparent",
                  border: "1px solid rgba(200,164,77,.35)",
                  color: "#d7b56d",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  transition: ".3s",
                }}
              >
                Read Story →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}