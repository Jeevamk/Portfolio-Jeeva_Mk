import { tone } from '../api';

export default function Skills({ groups }) {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills">
          {groups.map((g, i) => (
            <div key={g.group} className={`skill-group ${tone(i)}`}>
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
