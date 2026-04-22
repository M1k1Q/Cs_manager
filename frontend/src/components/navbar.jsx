function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">CS Manager</span>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#" className="nav-link">Teams</a></li>
          <li><a href="#" className="nav-link">Players</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar