
import React from 'react';
import PageTransition from '../components/PageTransition';

const Profile = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <section className="mb-12 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider mb-2">About Me</span>
            <h1 className="text-5xl font-bold mb-6">Profile</h1>
            <p className="text-xl max-w-2xl mb-8 text-gray-700">
              Learn more about the person behind this website and their design philosophy.
            </p>
          </section>
          
          <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-box emerald max-w-3xl mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4">Personal Bio</h2>
              <p className="mb-4">
                I'm a designer and developer passionate about creating beautiful, functional, and intuitive digital experiences.
              </p>
              <p className="mb-4">
                With a background in both design and development, I approach projects with a holistic perspective, ensuring that form and function work together seamlessly.
              </p>
              <p>
                My design philosophy is heavily influenced by minimalist principles, focusing on simplicity, clarity, and purpose.
              </p>
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-box blue p-6 hover-scale">
              <h3 className="text-xl font-bold mb-3">Skills</h3>
              <ul className="space-y-2">
                <li>UI/UX Design</li>
                <li>Frontend Development</li>
                <li>Visual Design</li>
                <li>Interaction Design</li>
                <li>Typography</li>
              </ul>
            </div>
            
            <div className="text-box purple p-6 hover-scale">
              <h3 className="text-xl font-bold mb-3">Experience</h3>
              <ul className="space-y-2">
                <li>Senior Designer at Studio X</li>
                <li>Frontend Developer at Tech Co</li>
                <li>Freelance Designer</li>
                <li>Design Educator</li>
              </ul>
            </div>
            
            <div className="text-box amber p-6 hover-scale">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <ul className="space-y-2">
                <li>MFA in Interaction Design</li>
                <li>BS in Computer Science</li>
                <li>Certificate in Typography</li>
                <li>Various Online Courses</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Profile;
