import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page main-page">
        <section className="hero">
          <div className="hero-inner">
            <h1>Tom Leskin</h1>
            <h2>Software Developer</h2>
            <a href="mailto:tleskin@gmail.com?subject=Let's chat!" className="button primary">
              Let's chat!
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
