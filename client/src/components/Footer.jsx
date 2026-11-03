export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and NestJS.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
