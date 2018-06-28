import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class Books extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const {books,Shelf_Title} = this.props
    return (
     <div className="bookshelf">
    <h2 className="bookshelf-title">{Shelf_Title}</h2>
    <div className="bookshelf-books">
         <ol className="books-grid">
        {books.map((book,index) => 
      <li key={book.id} className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
     backgroundImage: `url(${book.imageLinks.thumbnail})`

            }} />
            <div className="book-shelf-changer">
              <select onChange={event=>this.props.onChangeShelf(book.id,event)} defaultValue={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </li>
            )}
        </ol>
        </div>
        </div>
    )
  }
}

export default Books;
