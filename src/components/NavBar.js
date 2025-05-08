import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLink = links.map((singleLink) => {
    return <a key={singleLink} href={`#${singleLink}`}>{singleLink}</a>
  })

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {navLink}
    </nav>
  );
}

export default NavBar;
