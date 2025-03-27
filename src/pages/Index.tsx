
import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <section className="mb-16 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider mb-2">Welcome to</span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">My Personal Website</h1>
            <p className="text-xl max-w-2xl mb-8 text-gray-700">
              A beautifully designed space showcasing simplicity and elegance through minimalist design principles.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/profile" className="btn-gradient purple hover-scale">
                <span className="btn-content">View Profile</span>
              </Link>
              <Link to="/contact" className="btn-gradient blue hover-scale">
                <span className="btn-content">Get in Touch</span>
              </Link>
            </div>
          </section>
          
          <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-box purple max-w-3xl mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4">About This Site</h2>
              <p className="mb-4">
                This website demonstrates the beauty of minimalist design with clean typography, thoughtful animations, and elegant interactions.
              </p>
              <p>
                Explore the different pages to experience the smooth transitions and hover effects that enhance the user experience.
              </p>
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-box blue p-6 hover-lift">
              <h3 className="text-xl font-bold mb-3">Design Philosophy</h3>
              <p>
                Inspired by the principles of simplicity, clarity, and purpose. Every element serves a function while maintaining visual harmony.
              </p>
            </div>
            
            <div className="text-box amber p-6 hover-lift">
              <h3 className="text-xl font-bold mb-3">Interactive Elements</h3>
              <p>
                Discover the subtle animations and transitions throughout the site that create a more engaging and delightful experience.
              </p>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Index;
