import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import PortfolioSection from './PortfolioSection';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About />
      <Service />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
