// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './components/styles.css'; // This now only loads BODY and GRADIENT background styles

function App() {
  return (
    <div className="App">
      <div className="gradient-bg"></div> 
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;