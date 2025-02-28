import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600">
          Discover the magic of AI in education. Tailored courses, engaging content, and seamless integration.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">AI Magic</h3>
            <p>Create courses that adapt to every learner's unique style.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Engaging Content</h3>
            <p>Interactive tools that keep students eager to learn.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Community Support</h3>
            <p>Join a vibrant network of educators and learners.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
