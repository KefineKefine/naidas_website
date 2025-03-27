
import React from 'react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <section className="mb-12 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider mb-2">Get in Touch</span>
            <h1 className="text-5xl font-bold mb-6">Contact</h1>
            <p className="text-xl max-w-2xl mb-8 text-gray-700">
              Have a question or want to work together? Reach out through any of these channels.
            </p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-box purple p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="hover-scale inline-block">hello@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover-lift inline-block">Twitter</a>
                    <a href="#" className="hover-lift inline-block">LinkedIn</a>
                    <a href="#" className="hover-lift inline-block">Dribbble</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-box blue p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-200 rounded-md font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-200 rounded-md font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-md font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn-gradient amber hover-scale w-full">
                    <span className="btn-content">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </section>
          
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-box emerald max-w-3xl mx-auto p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Available for Work</h2>
              <p className="mb-6">
                I'm currently available for freelance projects and collaboration opportunities. Let's create something beautiful together.
              </p>
              <a href="#" className="btn-gradient purple hover-scale inline-block">
                <span className="btn-content">View My Portfolio</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
