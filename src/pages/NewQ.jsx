import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Link } from 'react-router-dom';

import {  ArrowLeftOutlined} from "@ant-design/icons";

const mdParser = new MarkdownIt();

const NewQ = ({ onSubmit }) => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDetails, setQuestionDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionTitle.trim() === '' || questionDetails.trim() === '') {
      return;
    }
    onSubmit(questionTitle, questionDetails);
    setQuestionTitle('');
    setQuestionDetails('');
  };

  const handleEditorChange = ({ text }) => {
    setQuestionDetails(text);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <header className='font-extrabold text-center mb-2 text-3xl'>Ask a New Question</header>
      <div className="mb-3">
        <label htmlFor="title" className="font-bold form-label">Title or Summary</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="e.g. Why do we use #define for declaration?"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label font-semibold">Details</label>
        <MdEditor
          id="details"
          placeholder="e.g. I didn't understand this part,here is the attached screenshot..."
          value={questionDetails}
          style={{ height: '200px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          view={{
            markdown: true,
            html: false,
            fullScreen: false,
            hideMenu: false,
          }}
          config={{
            view: {
              menu: true,
              md: true,
              html: false,
            },
            canView: {
              menu: true,
              md: true,
              html: true,
              fullScreen: true,
              hideMenu: true,
            },
            markdownClass: 'markdown-body',
          }}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
      >
        Publish
      </button>
      <section className='mt-4'>
        <ArrowLeftOutlined className="mr-1"/>
        <Link to="/dashboard/qna" className='font-bold'>Back to All Questions</Link>
      </section>
      
    </form>
  );
};

export default NewQ;



