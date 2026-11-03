const BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    // NestJS ValidationPipe returns { message: string | string[] }
    const msg = Array.isArray(data.message) ? data.message.join(' ') : data.message;
    throw new Error(msg || `Request failed (${res.status})`);
  }
  return data;
}

export const getProfile = () => request('/profile');
export const getExperience = () => request('/experience');
export const getSkills = () => request('/skills');
export const sendMessage = (body) =>
  request('/contact', { method: 'POST', body: JSON.stringify(body) });

// Colour each project / skill group in turn
export const TONES = ['violet', 'pink', 'orange', 'teal', 'sky', 'yellow'];
export const tone = (i) => `tone-${TONES[i % TONES.length]}`;
