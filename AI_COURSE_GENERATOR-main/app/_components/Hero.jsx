// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link'; // Import Link for navigation
// import Image from 'next/image'; // Import Image for optimized images

// function Hero() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-700 via-white-300 to-pink-300 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-00 to-yellow-300 drop-shadow-md">
//           Welcome to Teacher.io
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <Link
//             href="/dashboard" // Specify the destination path
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </Link>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Teacher.io?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}

//       {/* Example Course Card */}
//       <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl">
//         <Link href={'/course/' + 123}>
//           <Image
//             src="/example-course-banner.jpg"
//             alt="Course Banner"
//             width={300}
//             height={200}
//             className="w-full h-[200px] object-cover rounded-lg"
//           />
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Teacher.io
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Teacher.io?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}

//       {/* AI Features Section */}
//       <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl">
//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">AI Course Generator</h3>
//           <p className="text-white/80 mt-2">
//             Generate personalized courses based on student progress and needs. Leverage the power of AI to create tailored content.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Interactive Quizzes</h3>
//           <p className="text-white/80 mt-2">
//             Build interactive quizzes that engage students and provide instant feedback using AI-generated questions.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Progress Analytics</h3>
//           <p className="text-white/80 mt-2">
//             Track student progress with detailed analytics and suggestions for improving learning outcomes.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Seamless Integration</h3>
//           <p className="text-white/80 mt-2">
//             Easily integrate with popular platforms to streamline the teaching experience and connect with students.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Teacher.io
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Teacher.io?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Hero;

// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Teacher.io
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Teacher.io?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Hero;

// import React from 'react';

// function Hero() {
//   return (
//     <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4">
//       <h1 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//         Welcome to Teacher.io
//       </h1>
//       <p className="mt-4 text-lg sm:text-xl">
//         Unleash the power of AI to create personalized learning experiences that engage and inspire.
//       </p>
//       <a
//         href="#features"
//         className="mt-6 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 text-lg font-semibold"
//       >
//         Get Started
//       </a>
//     </section>
//   );
// }

// export default Hero;
import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <section className="flex-grow bg-gray-900 text-white h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center h-full flex flex-col justify-center">
        {/* Header Content */}
        <div className="mx-auto text-center flex-grow mt-16">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="sm:block"> Teacher.io </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-lg text-white/80">
            AI Course Generator: Revolutionizing Personalized Learning
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/dashboard"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* AI Features */}
        <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl mx-auto">
          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">AI Course Generator</h3>
            <p className="text-white/80 mt-2">
              Generate personalized courses based on student progress and needs. Leverage the power of AI to create tailored content.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Interactive Quizzes</h3>
            <p className="text-white/80 mt-2">
              Build interactive quizzes that engage students and provide instant feedback using AI-generated questions.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Progress Analytics</h3>
            <p className="text-white/80 mt-2">
              Track student progress with detailed analytics and suggestions for improving learning outcomes.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Seamless Integration</h3>
            <p className="text-white/80 mt-2">
              Easily integrate with popular platforms to streamline the teaching experience and connect with students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
