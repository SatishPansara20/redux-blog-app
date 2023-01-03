import React from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <section>
        <div className="bg-gray-500 text-xl">
          <p className="text-end">
            <Link to="/addpostform">ADD POST</Link>
          </p>
          <p className="text-start">
            <NavLink to="/">Posts</NavLink>
          </p>
        </div>
      </section>
    </nav>
  );
}
