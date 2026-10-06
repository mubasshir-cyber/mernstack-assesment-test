import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="content">
        <section className="hero">
          <h1>Responsive Navbar Demo</h1>
          <p>
            Resize your browser window to test the <strong>Desktop</strong>, <strong>Tablet</strong>, and <strong>Mobile</strong> navbar modes.
          </p>
          <div className="features">
            <div className="card">
              <h3>🖥️ Desktop (≥ 1024px)</h3>
              <p>Horizontal navbar with Logo, 4 menu items, and Create Account button.</p>
            </div>
            <div className="card">
              <h3>📱 Tablet (768px - 1023px)</h3>
              <p>Full-width green background menu with an "X" close icon and horizontal menu items.</p>
            </div>
            <div className="card">
              <h3>📲 Mobile (&lt; 768px)</h3>
              <p>Full-screen green vertical menu with centered items and Create Account button at the bottom.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
