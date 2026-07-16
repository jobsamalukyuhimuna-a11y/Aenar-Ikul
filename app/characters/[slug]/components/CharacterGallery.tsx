import Image from "next/image";

type GalleryImage = {
  id: string | number;
  image: string;
};

type Props = {
  character: {
    name: string | null;
    images: GalleryImage[];
  };
};

export default function CharacterGallery({
  character,
}: Props) {
  if (character.images.length === 0) {
    return null;
  }

  return (
    <section
      style={{
        marginTop: "70px",
        background: "rgba(17,17,17,.75)",
        border: "1px solid rgba(200,164,77,.25)",
        borderRadius: "20px",
        padding: "45px",
      }}
    >
      <h2
        style={{
          color: "#d7b56d",
          fontSize: "38px",
          fontFamily: "Cinzel, serif",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {character.images.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              height: "300px",
              borderRadius: "18px",
              overflow: "hidden",
              border:
                "1px solid rgba(215,181,109,.25)",
            }}
          >
            <Image
              src={item.image}
              alt={character.name || "Character"}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}