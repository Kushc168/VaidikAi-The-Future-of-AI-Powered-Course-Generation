import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold text-blue-600">Basic</h3>
            <p>$99/month</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold text-blue-600">Standard</h3>
            <p>$149/month</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold text-blue-600">Premium</h3>
            <p>$199/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
