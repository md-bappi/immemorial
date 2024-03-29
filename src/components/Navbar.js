import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const blogRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const blogArr = [blogRef];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.9);
  useGsapDownStagger(logoArr, 1.5);
  useGsapDownStagger(blogArr, 1.8);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to={"/featured"}>featured</Link>
        </li>
        <li ref={li2}>
          <Link to={"/about"}>about</Link>
        </li>
        <li ref={li3}>
          <Link to={"/gallery"}>gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to={"/"}>
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className="blog-link" ref={blogRef}>
        <Link to={"/blog"}>blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
