import GreenButton from "./components/GreenButton";

function App() {
  const track = document.getElementById("image-track") as HTMLElement;

  window.onmousedown = (e) => {
    track.setAttribute("data-custom-attribute", e.clientX.toString());
  };

  window.onmousemove = (e) => {
    let s: string | null = track.getAttribute("data-mouse-down-at");
    if (s != null) {
      const mouseDelta = parseFloat(s) - e.clientX,
        maxDelta = window.innerWidth / 2;
    }
  };

  return (
    <>
      <div className="banner">
        <nav className="navbar">
          <img src="src/assets/logo.svg" alt="logo" className="logo"></img>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div id="image-track" data-mouse-down-at="0">
            <img src="src/assets/img_1.jpg" alt="image" draggable="false" />
            <img src="src/assets/img_2.jpg" alt="image" draggable="false" />
            <img src="src/assets/img_3.jpg" alt="image" draggable="false" />
            <img src="src/assets/img_4.jpg" alt="image" draggable="false" />
          </div>
          <h1>Inspiring you to live a more sustainable lifestyle</h1>
          <p>
            Welcome to EcoLifestyle, the ultimate destination for all things
            sustainable living! Our website is dedicated to helping you make
            conscious choices that benefit both you and the environment. We
            believe that small changes in our daily lives can have a big impact
            on the planet, and we're here to guide you every step of the way.
            From eco-friendly products to green living tips, we've got you
            covered. Join us in our mission to create a better world for future
            generations by embracing an eco-friendly lifestyle today.
          </p>
          <div>
            <GreenButton text="Sign In" />
            <GreenButton text="Log In" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
