import { useState } from 'react';
import { tone } from '../api';

const PREVIEW = 4;

function Project({ project, index }) {
  const [open, setOpen] = useState(false);
  const many = project.points.length > PREVIEW;
  const points = open || !many ? project.points : project.points.slice(0, PREVIEW);

  return (
    <li className={`project ${tone(index)}`}>
      <span className="node" aria-hidden="true" />
      <div className="project-head">
        <h4>{project.name}</h4>
        <span className="period">{project.period}</span>
      </div>
      <p className="project-desc">{project.description}</p>
      <ul className="chips" aria-label="Tech stack">
        {project.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <ul className="points" id={`points-${project.id}`}>
        {points.map((p) => (
          <li key={p.title}>
            <strong>{p.title}</strong>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
      {many && (
        <button
          type="button"
          className="more"
          aria-expanded={open}
          aria-controls={`points-${project.id}`}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Show fewer details' : `Show all ${project.points.length} details`}
        </button>
      )}
    </li>
  );
}

export default function Experience({ jobs }) {
  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <h2 id="exp-title" className="section-title">Experience</h2>
        {jobs.map((job) => (
          <article key={job.company} className="job">
            <header className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}, {job.location}</p>
              </div>
              <span className="job-period">{job.period}</span>
            </header>
            <ol className="timeline">
              {job.projects.map((p, i) => <Project key={p.id} project={p} index={i} />)}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
