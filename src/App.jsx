// src/App.js
import React from 'react';
import RecentPosts from './RecentPosts';
import FeaturedWorks from './FeaturedWorks';
import Footer from './Footer';
import Avatar from './Avatar';
import Navbar from './NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Avatar />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};

export default App;
