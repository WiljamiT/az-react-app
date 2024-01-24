import React from "react";
import MoviesComponent from "../components/Movies/MoviesComponent";

function Home({ isAuthenticated }) {
  return (
    <main className="container">
      <div className="container_center">
        <MoviesComponent isAuthenticated={isAuthenticated} />
      </div>
    </main>
  );
}

export default Home;
