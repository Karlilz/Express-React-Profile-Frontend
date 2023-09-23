import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1 style={{textTransform:'uppercase', fontSize:'40px', textDecoration: 'underline'}}>Karla Lazarte</h1>
      <h2 style={{textTransform:'uppercase', fontSize:'25px'}}>Full Stack Developer</h2>
      <nav style={navStyle}>
        {/* <Link to="/">
          <div>HOME</div>
        </Link> */}
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div>LET'S CONNECT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;