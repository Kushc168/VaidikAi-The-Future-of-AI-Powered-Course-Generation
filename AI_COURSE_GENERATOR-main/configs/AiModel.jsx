const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate A course Tutorial on following Detail with field as Course Name,Description, Along wiith chapter Name, about Duration Category : ‘Programming’, topic: Python, Level:Basic, Duration: 1hr, NoOf Chapters:5, in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"A beginner-friendly course covering the fundamentals of Python programming.  This course will equip you with the basic skills needed to write your own Python programs.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1hr\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting up your Python Environment\",\n      \"duration\": \"10 minutes\",\n      \"description\": \"Learn how to install Python, choose a suitable code editor (like VS Code or Thonny), and run your first Python script.\"\n    },\n    {\n      \"chapterName\": \"Data Types and Variables\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Explore fundamental data types like integers, floats, strings, and booleans. Understand how to declare and use variables.\"\n    },\n    {\n      \"chapterName\": \"Operators and Expressions\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Learn about arithmetic, comparison, logical, and assignment operators.  Practice writing simple expressions and understanding operator precedence.\"\n    },\n    {\n      \"chapterName\": \"Control Flow (if-else statements and loops)\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Master conditional statements (if, elif, else) to control the flow of your programs. Learn about for and while loops for iteration.\"\n    },\n    {\n      \"chapterName\": \"Introduction to Functions\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Understand the concept of functions, how to define and call them. Learn about parameters and return values.  Write simple functions to perform reusable tasks.\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  export const GenerateChapterContent_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "xplain the concept in Detail on Topic: Workout at home, Chapter: Warm-up, in JSON Format with list of array with field as title, description in detail,Code Example(HTML Code field in <precode> Format) is applicable\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"chapter\": \"Warm-up\",\n  \"topic\": \"Workout at Home\",\n  \"sections\": [\n    {\n      \"title\": \"Why Warm-up is Crucial\",\n      \"description\": \"A proper warm-up is essential before any home workout. It prepares your body for physical activity by increasing blood flow to muscles, raising your body temperature, and improving flexibility and range of motion.  This reduces the risk of injuries like muscle strains and tears, and helps you perform exercises more effectively.  A neglected warm-up can lead to decreased performance and increased risk of injury.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Components of an Effective Home Warm-up\",\n      \"description\": \"A well-rounded warm-up typically includes these components:\\n\\n* **Cardiovascular activity:**  Light cardio, such as brisk walking, jogging in place, jumping jacks, or cycling, increases heart rate and blood flow. Aim for 5-10 minutes.\\n* **Dynamic stretching:** This involves moving your joints through their full range of motion. Examples include arm circles, leg swings, torso twists, and high knees.  Avoid static stretching (holding a stretch) during the warm-up phase.  Focus on controlled movements, repeating each stretch several times.\\n* **Specific warm-up for your workout:**  If you're focusing on upper body strength, incorporate light movements like arm rotations and shoulder shrugs.  If you're doing leg exercises, include dynamic stretches like leg swings and hip circles.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Example Warm-up Routine (5-10 minutes)\",\n      \"description\": \"This is a sample routine; adjust it based on your chosen workout and fitness level. Remember to listen to your body and stop if you feel pain.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Warm-up Routine Example:  (5-minute version)\",\n      \"description\": \"This is a sample routine; modify it to fit your needs and fitness level.\",\n      \"codeExample\": [\n        {\n          \"exercise\": \"Jumping Jacks\",\n          \"duration\": \"30 seconds\"\n        },\n        {\n          \"exercise\": \"High Knees\",\n          \"duration\": \"30 seconds\"\n        },\n        {\n          \"exercise\": \"Butt Kicks\",\n          \"duration\": \"30 seconds\"\n        },\n        {\n          \"exercise\": \"Arm Circles (forward and backward)\",\n          \"duration\": \"30 seconds each\"\n        },\n        {\n          \"exercise\": \"Leg Swings (forward and backward, side to side)\",\n          \"duration\": \"30 seconds each\"\n        },\n        {\n          \"exercise\": \"Torso Twists\",\n          \"duration\": \"30 seconds\"\n        }\n      ]\n    },\n    {\n      \"title\": \"Visual Aids and Resources\",\n      \"description\": \"Many online resources provide visual demonstrations of warm-up exercises.  Searching for \\\"dynamic stretching exercises\\\" or \\\"home workout warm-up\\\" on YouTube or fitness websites can be beneficial.  Pay attention to proper form to prevent injuries.\",\n      \"codeExample\": \"<precode><code>\\n<!-- This is not executable code, just a placeholder for embedding a video or image -->\\n<!--  You could embed a YouTube video here using an iframe -->\\n<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/VIDEO_ID\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\\" allowfullscreen></iframe>\\n</code></precode>\"\n    },\n    {\n      \"title\": \"Important Considerations\",\n      \"description\": \"Always listen to your body. Stop if you experience any pain.  Proper hydration is crucial before, during, and after your workout.  Consider consulting a healthcare professional or certified fitness trainer before starting a new exercise routine, especially if you have any underlying health conditions.\",\n      \"codeExample\": null\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
