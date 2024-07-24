export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo" draggable="false">
        <img src="src/assets/logo.svg" alt="logo" draggable="false"></img>
        EcoLifestyle
      </a>

      <ul>
        <li>
          <a href="/save-energy" draggable="false">
            Save Energy
          </a>
        </li>
        <li>
          <a href="/save-water" draggable="false">
            Save Water
          </a>
        </li>
        <li>
          <a href="/reduce-reuse-recycle" draggable="false">
            Waste recycling
          </a>
        </li>
        <li>
          <a href="/ecological-technologies" draggable="false">
            Ecological technologies
          </a>
        </li>
      </ul>
      <div className="menu">
        <a href="/advices" draggable="false">
          <img src="src/assets/menu.svg" alt="menu_icon" draggable="false" />
        </a>
      </div>
    </nav>
  );
}
