// src/components/RecentPosts.js
import React from 'react';

const RecentPosts = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent posts</h2>
          <a href="#view-all" className="text-blue-600">View all</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Making a design system from scratch</h3>
            <p className="text-gray-600 mb-4">12 Feb 2020 | Design, Pattern</p>
            <p className="text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Creating pixel perfect icons in Figma</h3>
            <p className="text-gray-600 mb-4">12 Feb 2020 | Figma, Icon Design</p>
            <p className="text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
