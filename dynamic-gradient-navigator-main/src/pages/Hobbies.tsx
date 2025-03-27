
import React from 'react';
import PageTransition from '../components/PageTransition';

const Hobbies = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <section className="mb-12 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider mb-2">Leisure Activities</span>
            <h1 className="text-5xl font-bold mb-6">Hobbies</h1>
            <p className="text-xl max-w-2xl mb-8 text-gray-700">
              Discover what I enjoy doing when I'm not designing or coding.
            </p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-box blue p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-4">Photography</h2>
              <p className="mb-4">
                I love capturing minimalist compositions, urban landscapes, and abstract architectural details.
              </p>
              <p>
                Photography helps me see the world through a different lens and influences my design sensibilities.
              </p>
            </div>
            
            <div className="text-box purple p-8 hover-lift">
              <h2 className="text-2xl font-bold mb-4">Reading</h2>
              <p className="mb-4">
                I enjoy books on design theory, philosophy, and science fiction that explores human-technology relationships.
              </p>
              <p>
                Reading diverse genres expands my thinking and provides fresh inspiration for my creative work.
              </p>
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-box amber p-6 hover-rotate">
              <h3 className="text-xl font-bold mb-3">Hiking</h3>
              <p>
                Exploring nature trails and mountains helps me disconnect from technology and find inspiration in organic patterns and forms.
              </p>
            </div>
            
            <div className="text-box emerald p-6 hover-rotate">
              <h3 className="text-xl font-bold mb-3">Cooking</h3>
              <p>
                I approach cooking with the same mindset as design—experimenting with ingredients, textures, and presentation to create a harmonious experience.
              </p>
            </div>
            
            <div className="text-box blue p-6 hover-rotate">
              <h3 className="text-xl font-bold mb-3">Music</h3>
              <p>
                As a hobbyist pianist, I appreciate the mathematical precision and emotional expression that music requires.
              </p>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Hobbies;
