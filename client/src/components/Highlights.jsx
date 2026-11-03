import { tone } from '../api';

export default function Highlights({ items }) {
  return (
    <section className="section" aria-labelledby="hl-title">
      <div className="wrap">
        <h2 id="hl-title" className="section-title">What I’ve built</h2>
        <ul className="highlights">
          {items.map((h, i) => (
            <li key={h.title} className={`highlight ${tone(i)} ${i % 3 === 0 ? 'solid' : ''}`}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
