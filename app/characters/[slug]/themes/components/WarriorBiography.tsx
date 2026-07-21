type Props = {
  description?: string | null;
};

export default function WarriorBiography({
  description,
}: Props) {

  return (

    <section className="warrior-biography">

      <div className="warrior-section-title">

        <span className="warrior-line" />

        <h2>Biography</h2>

        <span className="warrior-line" />

      </div>

      <div className="warrior-biography-card">

        <p>

          {description || "No biography available."}

        </p>

      </div>

    </section>

  );

}