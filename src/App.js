import './App.css'
import React, { useState } from 'react'
import bookList from './data/bookList'

function App() {
  const [genere, setGenere] = useState('Self Help')
  return (
    <div className="booksContainer">
      <h1>
        {' '}
        Prathamesh's <br /> Book Recommendation 📖
      </h1>
      <h3>Choose genere:</h3>
      <div className="booksHeading">
        {Object.keys(bookList).map((gen, i) => (
          <li
            key={i}
            className={`${gen === genere && 'activeGenere'}`}
            onClick={() => setGenere(gen)}
          >
            {gen}
          </li>
        ))}
      </div>

      <br />
      <div className="bookList">
        {bookList[genere].map((book) => (
          <div className="bookComponent" key={book.title}>
            <img src={book.imageKey} alt={book.title} className="bookCover" />
            &nbsp; &nbsp; &nbsp;
            <div className="bookContent">
              <span className="bookTitle">{book.title}</span>
              <span className="bookAuthor">
                <b>Author: </b> {book.author}
              </span>
              <span className="bookRating">
                <b>Rating: </b> {book.rating}/ 5
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
