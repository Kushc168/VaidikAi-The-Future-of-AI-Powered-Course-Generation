"use client";
import ReactMarkdown from 'react-markdown';
import React from "react";
import YouTube from "react-youtube";

// YouTube player options
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // Refer: https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter,Chapters,content }) => {
  // Safeguard to ensure content exists
  const sections = content?.content?.sections;

  return (
    <div className="p-6 max-w-screen-lg">
      {/* Chapter Header */}
      <h2 className='font-bold text-2xl'>{chapter?.chapterName || Chapters?.ChapterName}</h2>
      <p className='text-gray-500'>{chapter?.about}</p>

      {/* Video Section */}
      <div className = 'flex justify-center my-6 border-2 border-gray-400 p-2 rounded-sm '>
        <YouTube
        videoId={content?.videoId}
            opts={opts}
        
        />
        </div>

      {/* Content Sections */}
      <div className="mt-6">
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map((section, index) => (
            <div key={index} className="p-5 bg-sky-100 mb-3 rounded-lg">
              <h3 className="font-medium text-lg">{section?.title || "Untitled Section"}</h3>
              <h3 className="font-medium text-lg">{sections?.title || "Untitled Section"}</h3>

              <ReactMarkdown>{section?.description || "No description available."}</ReactMarkdown>
              <ReactMarkdown>{sections?.description || "No description available."}</ReactMarkdown>

              {/* Optional Code Example */}
              {section?.codeExample && (
                <div className="p-4 bg-black text-white mt-4 rounded-md">
                  <pre>
                    <code>{section.codeExample}</code>
                  </pre>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No content sections available for this chapter.</p>
        )}
      </div>
    </div>
  );
};

export default ChapterContent;
