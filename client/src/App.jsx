import { useEffect, useState } from 'react';
import { getExperience, getProfile, getSkills } from './api';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([getProfile(), getExperience(), getSkills()])
      .then(([profile, experience, skills]) => setData({ profile, experience, skills }))
      .catch(() =>
        setError('The portfolio API is not running. Start it with "npm run dev" from the portfolio folder, then reload this page.'),
      );
  }, []);

  if (error) return <main className="status-screen"><p>{error}</p></main>;
  if (!data) return <main className="status-screen" aria-busy="true"><p>Loading…</p></main>;

  const { profile, experience, skills } = data;

  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <Highlights items={profile.highlights} />
        <Experience jobs={experience} />
        <Skills groups={skills} />
        <Recognition awards={profile.awards} education={profile.education} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
