import React from 'react';
import './Home.css';
import Row from './Row';
import requests from '../requests';
import Nav from './Nav';
import Banner from './Banner';

function Home() {
  return (
    <div className="app">

      <Nav />
      <Banner />

      <Row title="MOVIEAPP ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      {/* <Row title="TRENDING NOW" fetchUrl ={requests.fetchTrendingNow} /> */}
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default Home;
