/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Partytown } from '@builder.io/partytown/react';

import { Octokit } from '@octokit/core';

import './stylesheets/App.css';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { GITHUB_TOKEN, GITHUB_USERNAME } from './apiKeys';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

import CustomCursor from './components/customCursor/CustomCursor';
import Scrollbar from './hooks/smoothScroll';

SmoothScrollbar.use(OverscrollPlugin);

const overscrollOptions = {
  enabled: true,
  effect: 'bounce',
  damping: 0.17,
  maxOverscroll: 150,
};

function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = React.useState([]);

  const octokit = new Octokit({ auth: GITHUB_TOKEN });

  useEffect(() => {
    octokit
      .request('GET /user/starred', {
        affiliation: 'owner',
        visibility: 'public',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
      })
      .then((response) => {
        const myRepositories = response.data.filter(
          (repo) => repo.owner.login === GITHUB_USERNAME,
        );
        setProjects(myRepositories);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Partytown debug forward={['dataLayer.push']} />
      <div className="App">
        {loading ? (
          <ClimbingBoxLoader color="#5c62ec" loading={loading} size={30} />
        ) : (
          <>
            <Navbar />
            <CustomCursor />
            <Scrollbar
              className="scroll-container"
              damping={0.1}
              thumbMinSize={10}
              plugins={{
                overscroll: { ...overscrollOptions },
              }}
            >
              <Routes>
                <Route path="/" element={<Home projects={projects} />} />
                <Route path="/home" element={<Home projects={projects} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </Scrollbar>
          </>
        )}
      </div>
    </>
  );
}

export default App;
