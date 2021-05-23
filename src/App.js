import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./AboutMe.js";
import ContactInfo from "./ContactInfo.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>quick intro</p>
            <h1>
              Hello, I'm Lena.
              <br />I am a self-taught developer based in Vancouver, Canada.
            </h1>
            <br />
            <ContactInfo />
            <AboutMe />
          </div>
          <div className="col">
            <div className="menu">
              <a href="">
                <i class="fas fa-plus"></i> menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
