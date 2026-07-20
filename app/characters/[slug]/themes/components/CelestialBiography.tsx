type Props = {
  description?: string | null;
};

export default function CelestialBiography({
  description,
}: Props) {

  return (

    <section className="biography">

      <div className="biography-header">

        <span className="line" />

        <h2>Biography</h2>
        <span className="line" />

      </div>

      <div className="biography-card">

        <p>

          {description ||
            "No biography available."}

        </p>

      </div>

    </section>

  );

}