import React from 'react'
import { Link } from "react-router-dom";
import QueryBar from '../components/QueryBar'
import askNewQ from './NewQ'
const QnA = () => {
  return (
    <div>
      <QueryBar/>
      < div className="dropdown mt-2">
          {/* <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link> */}
          <span className='mt-2'>
            <div>Filters:</div>
          </span>
          <button
            type="submit"
            className="bg-white bg-clip-border dropdown-toggle border-2  text-black py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            role="button" data-bs-toggle="dropdown" aria-expanded="false"
          >
            All Lectures
          </button>

          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Current Lecture</Link></li>
            <li><Link className="dropdown-item" to="#">All Lectures</Link></li>
          </ul>
        </div>

        <section className='mt-3'>
          <h2 className="mb-6 mt-2 text-2xl font-bold tracking-tight  text-black-700 lg:mb-8 lg:text-2xl">
           All Questions asked in this Course:
          </h2>
        </section>

        <section className='mt-1'>
          Here it should render all the questions added including new question published.
        </section>

        <section className='mt-3'>
          <Link to="/dashboard/newq">
            <header className='font-bold text-left mb-2 text-1xl'>Ask a New Question</header>
          </Link>
        </section>
    </div>
  )
}

export default QnA
