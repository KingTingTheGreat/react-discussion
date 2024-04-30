import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <h3 className="text-3xl">React Introduction</h3>
      <nav>
        <Link className="text-xl p-2 m-1" to="/">Home</Link>
        <Link className="text-xl p-2 m-1" to="/about">About</Link>
        <Link className="text-xl p-2 m-1" to="/random-words">Random Words</Link>
      </nav>
    </header>
  )
}

export default Header;
