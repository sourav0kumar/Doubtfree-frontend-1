import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const { user, title, details, date, _id } = question;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <p className="text-gray-700 mb-2">Posted by: {user}</p>
      <p className="text-gray-700">{details}</p>
      <p className="text-gray-500 text-sm mt-2">Question ID: {_id}</p>
      <div className="pt-3">
        <Link
          to={`view/${_id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          View Question
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
