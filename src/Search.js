import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import {PropTypes} from 'prop-types'
import Books from './Books'


class Search extends Component {
    state={
        query:"",
        books:[]
    }
 static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired

  }

 changeInputShelf=(event) => {
     let val=event.target.value.trim()
        this.setState({
            query: val,
            books: []
        });

        BooksAPI.search(val)
            .then((books) => {
                if(!books || books.error) {
                    this.setState({
                        books: []
                    })
                    return
                }

                books = books.map(book => {
                    book.shelf="none"
                    this.props.books.forEach(books => {
                        if (book.id === books.id) {
                            book.shelf = books.shelf
                        }
                        return book
                    })
                    return book
                })

                this.setState({
                    books
                })

            })
    }
    
  
moveFromShelf(id,shelf) {
    const book = this.state.books.filter(bookId => bookId.id === id.id)[0]
    book.shelf = shelf
    this.setState({
      books: this.state.books
    })
   if (this.props.changeShelf) {
            this.props.changeShelf(book, shelf)
        }
  }

    render(){
        const {changeShelf}=this.props
        return(
         <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.changeInputShelf}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                       {this.state.books.map(book =>
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      defaultValue={book.shelf}
                      onChange={event => {
                        this.moveFromShelf(book, event.target.value)
                      }}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
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
    );
  }
}


export default Search