import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Educators Are Saying</h2>
        <p className="mt-4 text-gray-600">
          Hear from those who have transformed their teaching with Teacher.io.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <blockquote className="bg-gray-100 p-6 rounded">
            <p>"Teacher.io transformed my teaching approach! My students are more engaged than ever."</p>
            <footer className="mt-4">— Alex Smith</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
