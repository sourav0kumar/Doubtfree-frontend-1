import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QueryBar from "../components/QueryBar";
import QuestionCard from "./doubts/question";

const QnADesc = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const getdoubts = useSelector((state) => state.getdoubts).result;

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };
//   const arr=getdoubts.questions;
//  arr.sort((a, b) => b.user - a.user);
//   console.log(arr);

  const numDescending=[...getdoubts.questions].sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
console.log(numDescending);


  const filteredQuestions = getdoubts?.questions?.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleClearSearch = () => {
  //   setSearchQuery("");
  // };
  

  return (
    <div>
      <QueryBar
        
        
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Rest of the component */}
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
            <Link className="dropdown-item" to="/dashboard/qna">
              Newest First
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Oldest First
            </Link>
          </li>
        </ul>
      </div>
      <section className="mt-3">
        <h2 className="mb-6 mt-2 text-2xl font-bold tracking-tight  text-black-700 lg:mb-8 lg:text-2xl">
          All Questions asked:
        </h2>
      </section>
      <section className="mt-3 flex w-full justify-end">
        <Link
          to="/dashboard/newq"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Ask a New Question
        </Link>
      </section>

      {/* <div className="flex justify-start align-top flex-wrap my-5 gap-3">
        {searchQuery !== "" && filteredQuestions.length === 0 ? (
          <p className="text-center align-center  text-2xl">No Results Found</p>
        ) : (
          filteredQuestions.map((question, index) => (
            <QuestionCard key={index} question={question} />
          ))
        )}
      </div> */}

    <div className="flex justify-start align-top flex-wrap my-5 gap-3">
      {searchQuery === ""
        ? numDescending &&
          numDescending
            ?.slice()
            .reverse()
            .map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))
        : filteredQuestions.length === 0 ? (
            <p className="text-center align-center  text-2xl">No Results Found</p>
          ) : (
            filteredQuestions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))
          )}
    </div>

    </div>
  );
};

export default QnADesc ;
