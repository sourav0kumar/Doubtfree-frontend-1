import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewQuestion = () => {
  const { questionID } = useParams();
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const questions = useSelector((state) => state.getdoubts.result?.questions);
  const filteredQuestion = questions?.filter(
    (question) => question._id === questionID
  );
  const question = filteredQuestion.length > 0 ? filteredQuestion[0] : null;
  const handleAddAnswer = () => {
    // Handle logic for adding an answer
    // You can show a modal or navigate to a separate page for adding answers
  };

  useEffect(() => {
    const fetchAnswers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/getallans?questionID=${questionID}`
        );
        const fetchedAnswers = response.data.answers;
        setAnswers(fetchedAnswers);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchAnswers();
  }, [questionID]);

  return (
    <div>
      {question && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">{question.title}</h2>
          <p className="text-gray-700 mb-2">Posted by: {question.user}</p>
          <p className="text-gray-700">{question.details}</p>
        </div>
      )}
      <div className="flex justify-between w-full items-end">
        <div className="dropdown mt-2">
          {/* <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link> */}
          <span className="mt-2">
            <div>Filters:</div>
          </span>
          <button
            type="submit"
            className="bg-white bg-clip-border dropdown-toggle border-2  text-black py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By..
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Newest First
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Older First
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={handleAddAnswer}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          style={{ height: "fit-content" }}
        >
          Add Answer
        </button>
      </div>
      <h3 className="text-lg font-bold my-2">Answers:</h3>
      {loading && (
        <>
          <div className="flex w-full justify-center p-5">Loading...</div>
        </>
      )}
      {!loading &&
        answers.map((answer) => (
          <div
            className="bg-white rounded-sm shadow-lg p-4 mb-4 w-full"
            key={answer.id}
          >
            <p className="text-gray-700">{answer.details}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 text-sm">
                Answered by: {answer.user}
              </p>
              <p className="text-gray-500 text-sm">{answer.date}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewQuestion;
