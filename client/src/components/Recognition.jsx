export default function Recognition({ awards, education }) {
  return (
    <section className="section" aria-label="Awards and education">
      <div className="wrap recognition">
        <div>
          <h2 className="section-title">Awards</h2>
          <ul className="awards">
            {awards.map((a, i) => (
              <li key={a.title} className={`award ${i === 0 ? 'tone-yellow' : 'tone-pink'}`}>
                <span className="trophy" aria-hidden="true">🏆</span>
                <div>
                  <h3>{a.title} <span className="year">{a.year}</span></h3>
                  <p>{a.text}</p>
                  <p className="muted">{a.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Education</h2>
          <ul className="education">
            {education.map((e) => (
              <li key={e.course}>
                <h3>{e.course}</h3>
                <p>{e.school}, {e.location}</p>
                <p className="muted">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
