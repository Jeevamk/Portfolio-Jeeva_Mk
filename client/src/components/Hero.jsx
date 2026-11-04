export default function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          {profile.available && (
            <p className="availability">
              <span className="pulse" aria-hidden="true" />
              Open to new opportunities
            </p>
          )}
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            {profile.title}, {profile.subtitle}
          </p>{" "}
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              See my work
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-stack" aria-hidden="true">
            <span className="card c1" />
            <span className="card c2" />
            <span className="card c3" />
          </div>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="800"
            height="875"
          />
          {profile.badges.map((b, i) => (
            <p key={b.value} className={`badge badge-${i}`}>
              <strong>{b.value}</strong>
              <span>{b.label}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="wrap summary">
        {profile.summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
