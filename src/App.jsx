import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyBookWithUs from './sections/WhyBookWithUs';
import Destinations from './sections/Destinations';
import Experience from './sections/Experience';
import Meditation from './sections/Meditation';
import Inquiry from './sections/Inquiry'; // 1. Import Section
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-luxury-cream select-none">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBookWithUs />
        <Destinations />
        <Experience />
        <Meditation />
        <Inquiry /> {/* 2. Render cleanly right here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;