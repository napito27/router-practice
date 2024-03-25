import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Ooops! This page does not exist</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NotFound;
