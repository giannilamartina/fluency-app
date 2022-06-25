import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="main">
          <div class="section" id="intro">
            <h1>Fluency</h1>
            <p>
              Here at Fluency, we speak the languages that make your business
              successful.<br></br>
              We specialize in design, development, and everything in between.
              <br></br>
              Our mission is to guide you through an everchanging world by
              bridging the gaps between tech and the real world.
            </p>
          </div>
          <div class="section" id="services">
            <h2>Services</h2>
            <div class="card-container">
              <div class="card">Digital Design</div>
              <div class="card">Web Development</div>
              <div class="card">Search Engine Optimization (SEO)</div>
              <div class="card">Email Marketing</div>
              <div class="card">Social Media Management</div>
              <div class="card">Content Creation</div>
            </div>
            <div class="section" id="portfolio">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
