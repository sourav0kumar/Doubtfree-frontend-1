import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleRunCode = () => {
    // Run code logic
  };

  const handleSaveCode = () => {
    // Save code logic
  };

  const handleSubmitCode = () => {
    // Submit code logic
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Online Code Editor</h2>

      <div className="mb-4">
        <label htmlFor="language" className="block mb-2">
          Choose Language:
        </label>
        <select
          id="language"
          className="block w-full bg-white border border-gray-300 rounded px-4 py-2 mb-2"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="JavaScript">C++</option>
          <option value="JavaScript">Java</option>
          <option value="JavaScript">C</option>
          <option value="JavaScript">Python</option>
          <option value="Python">Javascript</option>
          <option value="Java">Kotlin</option>
          {/* Add more language options */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="code" className="block mb-2">
          Code:
        </label>
        <textarea
          id="code"
          className="block w-full bg-white border border-gray-300 rounded px-4 py-2 h-64"
          value={code}
          onChange={handleCodeChange}
        ></textarea>
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleRunCode}
        >
          Run
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSaveCode}
        >
          Save
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmitCode}
        >
          Submit
        </button>
      </div>

      {/* Code Output */}
      {/* Add the component or element to display the code output */}
    </div>
  );
};

export default CodeEditor;
